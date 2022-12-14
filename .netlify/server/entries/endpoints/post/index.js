import pMap from "p-map";
import { basename } from "path";
async function get() {
  const modules = Object.entries({});
  const posts = await pMap(modules, async ([filename, module]) => {
    const { metadata } = await module();
    return {
      ...metadata,
      slug: basename(filename, ".svelte.md")
    };
  });
  posts.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
  return {
    body: { posts }
  };
}
export { get };
