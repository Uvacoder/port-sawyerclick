import{S as z,i as B,s as G,O as N,P,a as v,d as _,Q,R,f as d,I as Y,p as b,l as U,T as D,U as Z,B as E,e as W,j,k as F,c as T,m as A,n as J,b as u,o as H,q,x as C,u as L,v as M}from"./vendor-fb920d45.js";function K(o){let s,e,n=o[2].contents+"",r,f=[o[2].attrs,{style:r="width: "+o[0]+"; height: "+o[1]+"; transform: rotate("+o[3]+"deg);"}],c={};for(let i=0;i<f.length;i+=1)c=E(c,f[i]);return{c(){s=N("svg"),e=N("g"),this.h()},l(i){s=P(i,"svg",{style:!0});var a=v(s);e=P(a,"g",{});var m=v(e);m.forEach(_),a.forEach(_),this.h()},h(){Q(s,c),R(s,"svelte-18khfnm",!0)},m(i,a){d(i,s,a),Y(s,e),e.innerHTML=n},p(i,a){a&4&&n!==(n=i[2].contents+"")&&(e.innerHTML=n),Q(s,c=b(f,[a&4&&i[2].attrs,a&11&&r!==(r="width: "+i[0]+"; height: "+i[1]+"; transform: rotate("+i[3]+"deg);")&&{style:r}])),R(s,"svelte-18khfnm",!0)},d(i){i&&_(s)}}}function x(o){let s,e=o[2]&&K(o);return{c(){e&&e.c(),s=U()},l(n){e&&e.l(n),s=U()},m(n,r){e&&e.m(n,r),d(n,s,r)},p(n,[r]){n[2]?e?e.p(n,r):(e=K(n),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:D,o:D,d(n){e&&e.d(n),n&&_(s)}}}function $(o,s,e){let n,r;const f=["n","ne","e","se","s","sw","w","nw"];let{name:c}=s,{direction:i="n"}=s,{strokeWidth:a}=s,{stroke:m}=s,{width:g="1em"}=s,{height:w="1em"}=s;return o.$$set=l=>{"name"in l&&e(5,c=l.name),"direction"in l&&e(6,i=l.direction),"strokeWidth"in l&&e(7,a=l.strokeWidth),"stroke"in l&&e(8,m=l.stroke),"width"in l&&e(0,g=l.width),"height"in l&&e(1,w=l.height)},o.$$.update=()=>{o.$$.dirty&32&&e(2,n=Z.icons[c]),o.$$.dirty&64&&e(3,r=f.indexOf(i)*45),o.$$.dirty&388&&n&&(m&&e(2,n.attrs.stroke=m,n),a&&e(2,n.attrs["stroke-width"]=a,n))},[g,w,n,r,f,c,i,a,m]}class O extends z{constructor(s){super();B(this,s,$,x,G,{directions:4,name:5,direction:6,strokeWidth:7,stroke:8,width:0,height:1})}get directions(){return this.$$.ctx[4]}}function ee(o){let s,e,n,r,f,c,i,a,m;const g=[{name:"github"},o[0]];let w={};for(let t=0;t<g.length;t+=1)w=E(w,g[t]);e=new O({props:w});const l=[{name:"twitter"},o[0]];let I={};for(let t=0;t<l.length;t+=1)I=E(I,l[t]);f=new O({props:I});const k=[{name:"mail"},o[0]];let S={};for(let t=0;t<k.length;t+=1)S=E(S,k[t]);return a=new O({props:S}),{c(){s=W("a"),j(e.$$.fragment),n=F(),r=W("a"),j(f.$$.fragment),c=F(),i=W("a"),j(a.$$.fragment),this.h()},l(t){s=T(t,"A",{href:!0,title:!0,class:!0});var h=v(s);A(e.$$.fragment,h),h.forEach(_),n=J(t),r=T(t,"A",{href:!0,title:!0,class:!0});var p=v(r);A(f.$$.fragment,p),p.forEach(_),c=J(t),i=T(t,"A",{href:!0,title:!0,class:!0});var y=v(i);A(a.$$.fragment,y),y.forEach(_),this.h()},h(){u(s,"href","https://www.github.com/SawyerClick"),u(s,"title","Github"),u(s,"class","svelte-1l8u3xf"),u(r,"href","https://www.twitter.com/sawyerdabear"),u(r,"title","Twitter"),u(r,"class","svelte-1l8u3xf"),u(i,"href","mailto:sawyer@hey.com?Subject=Hi%20Sawyer"),u(i,"title","Email"),u(i,"class","svelte-1l8u3xf")},m(t,h){d(t,s,h),H(e,s,null),d(t,n,h),d(t,r,h),H(f,r,null),d(t,c,h),d(t,i,h),H(a,i,null),m=!0},p(t,[h]){const p=h&1?b(g,[g[0],q(t[0])]):{};e.$set(p);const y=h&1?b(l,[l[0],q(t[0])]):{};f.$set(y);const X=h&1?b(k,[k[0],q(t[0])]):{};a.$set(X)},i(t){m||(C(e.$$.fragment,t),C(f.$$.fragment,t),C(a.$$.fragment,t),m=!0)},o(t){L(e.$$.fragment,t),L(f.$$.fragment,t),L(a.$$.fragment,t),m=!1},d(t){t&&_(s),M(e),t&&_(n),t&&_(r),M(f),t&&_(c),t&&_(i),M(a)}}}const V="1.5rem",te="2px",se="var(--blue)";function ne(o){return[{width:V,height:V,strokeWidth:te,stroke:se}]}class re extends z{constructor(s){super();B(this,s,ne,ee,G,{})}}export{re as I,O as a};