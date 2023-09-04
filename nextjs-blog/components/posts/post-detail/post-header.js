import classes from "./post-header.module.css";
import Image from "next/image";
import Link from "next/link";
function PostHeader({ title, image, webpage }) {
  return (
      <header className={classes.header}>
        <h1><Link href={webpage}>{ title }</Link></h1>
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