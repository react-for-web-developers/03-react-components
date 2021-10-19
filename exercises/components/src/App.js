import NavMenu from "./components/NavMenu";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <NavMenu />
      <section>
        <Sidebar />
        <Main />
      </section>
    </>
  );
};

export default App;
