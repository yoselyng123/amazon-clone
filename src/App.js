import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Shop from './components/Shop';

function App() {
    return (
        <div className='app'>
            {/* Nav */}
            <Nav />
            <div className='content'>
                {/* SideBar */}
                <Sidebar />
                {/* Content */}
                <Shop />
            </div>
        </div>
    );
}

export default App;
