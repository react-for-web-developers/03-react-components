import Featured from "./Featured.js";

const channels = ["CodingGarden", "Riot", "OneComputerGuy"];

function SideBar() {
  return (
    <div className="sidebar">
      {channels.map((name) => {
        return (
          <Featured channelName={name} key={Date.now() + Math.random() * 13} />
        );
      })}
    </div>
  );
}

export default SideBar;
