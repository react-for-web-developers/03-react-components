function Post({ title, content }) {
  return (
    <div className="post">
      <h4>This is the Post Component</h4>
      <h4>{title}: {content}</h4>
    </div>
  )
}

export default Post;
