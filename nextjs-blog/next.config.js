/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")



module.exports = (phase) =>{

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const nextConfig = {
      reactStrictMode: true,
      env: {
        mongodb_username: "remek",
        mongodb_password: "vzGLvFHZr5FSXHIw",
        mongodb_cluster: "tutorials",
        mongodb_database: "u0jzjy9",
        mongodb_collection: "messages-dev"
      }
    }

    return nextConfig
  }

  const nextConfig = {
    reactStrictMode: true,
    env: {
      mongodb_username: "remek",
      mongodb_password: "vzGLvFHZr5FSXHIw",
      mongodb_cluster: "tutorials",
      mongodb_database: "u0jzjy9",
      mongodb_collection: "messages"
    }
  }

  return nextConfig
}