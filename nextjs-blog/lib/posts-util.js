import fs from 'fs'
import path from "path";

const postsDirectory = path.join(process.cwd(), "content", 'posts');

export function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  return fs.readFileSync(filePath, "utf-8");
}

export function postNames() {
  return fs.readdirSync(postsDirectory)
}