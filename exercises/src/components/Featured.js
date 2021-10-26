function Featured({ channelName }) {
  return (
    <section className="featured">
      <a href={channelName}>
        <img src="../../public/telegram.png" alt="Channel icon" />
      </a>
    </section>
  );
}

export default Featured;
