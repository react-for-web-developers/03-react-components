import { useState } from "react";

import InputFeed from "./InputFeed";
import Posts from "./Posts";

function Feed() {
  const [posts] = useState([{
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }, {
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }, {
    title: "Title 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }, {
    title: "Title 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }, {
      title: "Title 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }]);

  return (
    <div className="App-feed">
      <InputFeed />
      <Posts posts={posts} />
    </div>
  )
}

export default Feed;
