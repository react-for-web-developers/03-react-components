import Card from './Card';
import SearchBar from './SearchBar';

function Main() {
    return (
        <div>
            <h1>THIS IS THE MAIN COMPONENT</h1>
            <SearchBar />
            <div className="grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Main;