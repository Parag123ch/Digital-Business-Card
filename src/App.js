import logo from './logo.svg';
import './App.css';
import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Info></Info>
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

export default App;
