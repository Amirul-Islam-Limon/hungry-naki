import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Hungry Naki</h1>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
