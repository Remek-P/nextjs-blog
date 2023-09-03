import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

import {donateNearby} from "@/content/posts/donateNearby";
import {donateNearby2} from "@/content/posts/donateNearby2";

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

  const allPosts = [donateNearby, donateNearby2];

  return { props: { posts: allPosts }}
}

export default HomePage;