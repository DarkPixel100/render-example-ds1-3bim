import './App.css';
import Counter from './components/Counter';
import FakeCounter from './components/FakeCounter';
import ListOfThings from './components/ListOfThings';


function App() {
  return (
    <div className="App">
     <h2>App component</h2>
     <FakeCounter />

     <Counter />

     <ListOfThings />

    </div>
  );
}

export default App;
