import fs from "fs";
import path from "path";

function getAllPosts() {

  const postsDirectory = path.join(process.cwd() + "posts");

  const getPostDetail = (fileName) => {

    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, "utf-8");

  }

  const postFiles = fs.readdirSync(postsDirectory);


  return (
      <div>
        
      </div>
  );
};

export default getAllPosts;