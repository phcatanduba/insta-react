import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Main from './Main.js';
import NavMobile from './NavMobile';

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <NavMobile />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));
