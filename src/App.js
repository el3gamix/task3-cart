import logo from './logo.svg';
import './App.css';
import C001 from './components/C001';
import C002 from './components/C002';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, We are in React App !!!</h1>

        {/* <C001 /> */}
        {/* <C002 /> */}

        <Todo />
        
      </header>
    </div>
  );
}

export default App;
