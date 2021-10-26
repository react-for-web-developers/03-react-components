import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
