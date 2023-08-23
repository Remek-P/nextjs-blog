import classes from "./post-content.module.css";
import PostHeader from "@/components/posts/post-detail/post-header";

const DUMMY_POST = {
  title: "Getting started with nextjs 1",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2023-08-23",
  slug: "getting-started-with-nextjs1",
}
function PostContent() {

  const slug = DUMMY_POST.slug;
  const image = DUMMY_POST.image;
  const title = DUMMY_POST.title;
  const content = DUMMY_POST.content;

  const imagePath = `/images/posts/${slug}/${image}`

  return (
      <article className={classes.content}>
        <PostHeader title={title} image={imagePath}/>
        <h1>{ content }</h1>
      </article>
  );
}

export default PostContent;