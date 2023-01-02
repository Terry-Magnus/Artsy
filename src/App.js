// import Homepage from './homepage.component';
import NavBar from './assets/components/navbar/navbar.component';
import MultiCarousel from './assets/components/multicarousel';
import './App.css';

function App() {
    return (
        <div className='app'>
            <NavBar />
            <MultiCarousel />
            Welcome to Artsy
        </div>
    );
}

export default App;
