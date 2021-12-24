import { browser } from '$app/env';
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const hasNav = writable(false);

// theme tracker, default to dark
const theme = writable(browser ? window.localStorage.getItem('theme') : 'dark');
theme.subscribe((value) => {
	if (browser) {
		// change classes and settings
		window.localStorage.setItem('theme', value);

		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
});

// a lazy load store that, once the window is available, kicks up an IntersectionObserver instance and watches inputted images, video and iframes. Use in coordination with Image.svelte.
const lazyloader = writable(null, (set) => {
	// lazyload callback function that handles images iframes and videos, uses common data-src pattern
	const lazyLoadCb = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.target.tagName === 'IMG') {
				if (entry.isIntersecting && entry.target.srcset !== entry.target.dataset.srcset) {
					entry.target.srcset = entry.target.dataset.srcset;
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			} else if (entry.target.tagName === 'VIDEO') {
				if (entry.isIntersecting && entry.target.poster !== entry.target.dataset.poster) {
					const children = [...entry.target.children];
					entry.target.poster = entry.target.dataset.poster;
					children.forEach((child) => {
						child.src = child.dataset.src;
					});
					entry.target.load();
					observer.unobserve(entry.target);
				}
			} else if (entry.target.tagName === 'IFRAME') {
				if (entry.isIntersecting && entry.target.src !== entry.target.dataset.src) {
					entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			}
		});
	};

	// set IntersectionObserver once window is available
	if (typeof window !== 'undefined') set(new IntersectionObserver(lazyLoadCb, { rootMargin: '0px 0px 0px 0px' }));

	return () => set(null);
});

// prefers reduced motion
const prefersReducedMotion = readable(false, (set) => {
	const query = '(prefers-reduced-motion: no-preference)';
	const mediaQueryList = typeof window !== 'undefined' ? window.matchMedia(query) : {};

	const onChange = () => set(!mediaQueryList.matches);

	if (typeof window !== 'undefined') {
		mediaQueryList.addListener(onChange);
		onChange();
	}

	return () => {
		if (typeof window !== 'undefined') mediaQueryList.removeListener(onChange);
	};
});

export { hasNav, theme, lazyloader, prefersReducedMotion };