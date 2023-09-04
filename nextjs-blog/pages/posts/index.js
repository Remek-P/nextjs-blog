import AllPosts from "@/components/posts/all-posts";

import { getAllOrFeaturedPosts } from "@/helpers/all-posts";

function AllPostsPage({ posts }) {

  return (
      <AllPosts posts={posts} />
  )
}

export function getStaticProps() {
  const posts = getAllOrFeaturedPosts();

  return {
    props: { posts: posts }
  }
}

export default AllPostsPage;