import './App.css';

//the name of component we can change, its not necesary to use the same name that function
import MyComponent from './components/greet'

function App() {
  return (
    <div className="App">
      {/* Other way to print in display */}
      {/* <MyComponent /> */}
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
