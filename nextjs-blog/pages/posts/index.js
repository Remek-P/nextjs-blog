import AllPosts from "@/components/posts/all-posts";

import { donateNearby } from "@/content/posts/donateNearby";
import { donateNearby2 } from "@/content/posts/donateNearby2";

function AllPostsPage({ posts }) {

  return (
      <AllPosts posts={posts} />
  )
}

export function getStaticProps() {

  const allPosts = [donateNearby, donateNearby2];

    return { props: { posts: allPosts }}
}

export default AllPostsPage;