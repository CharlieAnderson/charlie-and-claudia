import navbar from './components/NavigationBar.js'
import './App.scss';

function App() {
  return (
    <div className="App">
      <navbar className="navbar" />
      <div className="background-rotated"></div>
      <header className="App-header">
      </header>
        <div className="logo-container">
          <img className="App-logo"></img>
          {/* <div className="App-logo">            
            <div className="App-logo-border"></div>
          </div> */}
          <text className="App-logo-text" fontFamily='Heebo'>CHARLIE & CLAUDIA</text>
        </div>
    </div>
  );
}

export default App;
