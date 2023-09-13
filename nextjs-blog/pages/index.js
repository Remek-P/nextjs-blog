import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Head from "next/head";

import { getAllOrFeaturedPosts } from "@/helpers/all-posts";

function HomePage({ posts }) {

  //TODO: conditional rendering if no posts
  if(!posts) {
    return <div>No Posts Yet</div>
  }

  return (
      <>
        <Head>
          <title>Remek's blog</title>
          <meta name="description" content="This is blog done for excercise prurposes" />
        </Head>
        <Hero />
        <FeaturedPosts posts={posts}/>
      </>
  )
}

export function getStaticProps() {

  const featuredPosts = getAllOrFeaturedPosts(true);

  return { props: { posts: featuredPosts }}
}

export default HomePage;