import '../App.css';
import '@fontsource/roboto/400.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Feed from './Feed';

const App = () => {
    return (
        <div className='App'>
            {/* <Banner /> */}
            <Navbar />
            <Feed />
        </div>
    );
};

export default App;
