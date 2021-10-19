import Post from "./Post";

function Posts({ posts }) {
  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} title={post.title} content={post.content} />
      })}
    </>
  )
}

export default Posts;
