import AllPosts from "@/components/posts/all-posts";
import Head from "next/head";

import {getAllOrFeaturedPosts} from "@/helpers/all-posts";

function AllPostsPage({posts}) {

  return (
      <>
        <Head>
          <title>Posts page</title>
          <meta name="descritpion" content="A list of my posts" />
        </Head>
        <AllPosts posts={posts} />
      </>
  )
}

export function getStaticProps() {
  const posts = getAllOrFeaturedPosts();

  return {
    props: {posts: posts}
  }
}

export default AllPostsPage;