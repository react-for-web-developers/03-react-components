function SubredditHeader({ title, url, numberOfMembers }) {
  return (
    <>
      <h2>{title}</h2>
      <h4>{url}</h4>
      <h5>{numberOfMembers}</h5>
    </>
  );
}

export default SubredditHeader;