import { donateNearby } from "@/content/posts/donate-nearby";
import { homeBudget } from "@/content/posts/home-budget";

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