import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import SubredditHeader from './components/SubredditHeader';
import MyButton from './components/MyButton';

function App() {
  const [posts] = useState([{
    title: 'Post 1',
  }, {
    title: 'Post 2',
  }]);
  return (
    <>
      <NavBar />
      <SubredditHeader
        title="JavaScript"
        url="/r/javascript"
        numberOfMembers={42}
      />
      <Posts posts={posts} />
      <MyButton icon="smile">Click Me</MyButton>
      <MyButton>Click Me Instead</MyButton>
      {/* <MyButton></MyButton> */}
    </>
  );
}

export default App;
