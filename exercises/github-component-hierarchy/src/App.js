import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Repos from "./components/Repos";
import ContributionList from "./components/ContributionList";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Bio />
			<Repos />
			<ContributionList />
			<Footer />
		</div>
	);
};

export default App;
