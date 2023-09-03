import classes from "./featured-posts.module.css";

import PostGrid from "@/components/posts/post-grid";

function FeaturedPosts({ posts }) {

  const featuredPosts = posts.filter(post => (post.isFeatured === true));

  return (
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={featuredPosts}/>
      </section>
  )
}

export default FeaturedPosts;