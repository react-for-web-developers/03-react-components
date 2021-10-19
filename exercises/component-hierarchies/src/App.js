import './App.css';
import Container from './components/Container';
import Navbar from './components/Global/Navbar';
import AccountSwitcherArea from './components/AccountSwitcherButton';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchBar from './components/Global/SearchBar';
import TrendingTopics from './components/TrendingSection';
import ReferralsSection from './components/ReferralsSection';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <header>
        <Navbar />
        <AccountSwitcherArea />
      </header>
      <main>
        <div className="primary-column">
          <Header />
          <Feed />
        </div>
        <div className="sidebar-column">
          <SearchBar />
          <TrendingTopics />
          <ReferralsSection />
          <Footer />
        </div>
      </main>
    </Container>
  );
}

export default App;
