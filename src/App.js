import './App.css';
import Counter from './components/Counter';
import FakeCounter from './components/FakeCounter';


function App() {
  return (
    <div className="App">
     <h2>App component</h2>
     <FakeCounter />

     <Counter />

    </div>
  );
}

export default App;
