import classes from "./post-content.module.css";
import PostHeader from "@/components/posts/post-detail/post-header";
import {Lister} from "@/components/posts/post-detail/lister";

function PostContent({ post }) {

  const { title, image, description, tech, otherInfo, slug, webpage, shoutout } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
      <article className={classes.content}>
        <PostHeader title={title} image={imagePath} webpage={webpage} />
        <div>{ description }</div>
        <p>
          <h2>Technology used</h2>
          <ul><Lister list={tech} /></ul>
        </p>
        <p>
          <h2>Additional info</h2>
          <div>
            <h3>Form</h3>
            <ul><Lister list={otherInfo.form} /></ul>
          </div>
          <div>
            <h3>Register</h3>
            <ul><Lister list={otherInfo.register} /></ul>
          </div>
          <div>
            <h3>Other</h3>
            <ul><Lister list={otherInfo.other} /></ul>
          </div>
          <div>
            <h3>Caveat</h3>
            <ul><Lister list={otherInfo.caveat} /></ul>
          </div>
        </p>
        <div>{ shoutout }</div>
      </article>
  );
}

export default PostContent;