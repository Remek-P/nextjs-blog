import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with nextjs 1",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur assumenda at consectetur dicta earum eveniet explicabo",
    date: "2023-08-23",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting started with nextjs 2",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur assumenda at consectetur dicta earum eveniet explicabo",
    date: "2023-07-23",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with nextjs 3",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur assumenda at consectetur dicta earum eveniet explicabo",
    date: "2023-06-23",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with nextjs 4",
    image: "getting-started-nextjs.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur assumenda at consectetur dicta earum eveniet explicabo",
    date: "2023-05-23",
    slug: "getting-started-with-nextjs4",
  },
]

function HomePage() {
  return (
      <>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
      </>
  )
}

export default HomePage;