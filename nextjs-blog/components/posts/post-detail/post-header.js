import classes from "./post-header.module.css";
import Image from "next/image";

function PostHeader({ title, image, webpage }) {
  return (
      <header className={classes.header}>
        <h1>
          <a href={webpage} target="_blank" rel="noopener noreferrer">{ title }</a>
        </h1>
        <a target="_blank" rel="noopener noreferrer">
          <Image
              src={image}
              alt={title}
              // sizes="100vw"
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
              width={400}
              height={300}
          />
        </a>
      </header>
  );
}

export default PostHeader;