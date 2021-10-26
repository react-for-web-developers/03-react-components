import Channel from "./Channel";

function MainPage() {
  return (
    <div className="channel-container">
      <div className="spotlight">
        <Channel />
      </div>
      <div className="container">
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
      </div>
    </div>
  );
}

export default MainPage;
