import classes from "./post-content.module.css";

import PostHeader from "@/components/posts/post-detail/post-header";

import { Lister } from "@/components/posts/post-detail/lister";

import Image from "next/image";

import githubImage from "../../../public/images/other/github-mark.png"

function PostContent({ post }) {

  const { title, image, description, tech, otherInfo, caveat, slug, webpage, shoutout, git } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
      <article className={classes.content}>
        <PostHeader title={title} image={imagePath} webpage={webpage} />
        <div>{ description }</div>
        <div>
          <h3>Technology used</h3>
          <ul>
            <Lister list={tech} />
          </ul>
        </div>
        <div>
          <h3>Additional info</h3>
          <ul><Lister list={otherInfo} /></ul>
        </div>
        <div>
          <h3>Caveat</h3>
          <ul><Lister list={caveat} /></ul>
        </div>
        <div>
          <h3>Shout out to:</h3>
          <ul><Lister list={shoutout}/></ul>
        </div>
        <div style={{display: "flex"}}>
        <a style={{marginLeft: "auto"}} href={git} target="_blank" rel="noopener noreferrer">
          <Image
              src={githubImage}
              alt="GitHub Logo as a link"
              width={50}
              height={50}
          />
        </a>
        </div>
      </article>
  );
}

export default PostContent;