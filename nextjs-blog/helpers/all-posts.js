import { donateNearby } from "@/content/posts/donateNearby";
import { homeBudget } from "@/content/posts/homeBudget";

const allPosts = [donateNearby, homeBudget];

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
