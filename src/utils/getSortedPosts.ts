import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"posts">[]) => {
  return posts
    .filter(({ data }: CollectionEntry<"posts">) => {
      return !data.draft;
    })
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDate).getTime() / 1000)
    );
};

export default getSortedPosts;
