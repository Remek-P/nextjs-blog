import fs from "fs";
import path from "path";

import PostContent from "@/components/posts/post-detail/post-content";

import { getPost } from "@/helpers/all-posts";

function PostDetailPage({ post }) {

  return <PostContent post={post} />
}

export function getStaticProps(context) {

  const { params } = context;
  const { slug } = params;

  const post = getPost(slug)

  return {
    props: {
      post: post
    }
  }
}

export function getStaticPaths() {

  //TODO: refactor to lib=>post-util
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const allPosts = fs.readdirSync(postsDirectory);
  const slugs = allPosts.map(slugName => slugName.replace(/\.js$/, ""));


  return {
    paths: slugs.map(slug => ({ params: {slug: slug}})),
    fallback: "blocking"
  }
}

export default PostDetailPage;