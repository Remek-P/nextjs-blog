import classes from "./post-header.module.css";
import Image from "next/image";
function PostHeader({ title, image }) {
  return (
      <header className={classes.header}>
        <h1>{title}</h1>
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
      </header>
  );
}

export default PostHeader;