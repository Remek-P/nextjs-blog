import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

import { getAllOrFeaturedPosts } from "@/helpers/all-posts";

function HomePage({ posts }) {

  //TODO: conditional rendering if no posts
  if(!posts) {
    return <div>No Posts Yet</div>
  }

  return (
      <>
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