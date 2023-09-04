import { donateNearby } from "@/content/posts/donateNearby";
import { donateNearby2 } from "@/content/posts/donateNearby2";

const allPosts = [donateNearby, donateNearby2];

export const getAllOrFeaturedPosts = (boolean = false) => {
  if (boolean) {
    return allPosts.filter(post => (post.isFeatured === true));
  } else {
    return allPosts;
  }
}

export const getPost = (slug) => {
    return allPosts.find(post => (post.slug === slug));
}
