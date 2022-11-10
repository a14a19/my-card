import './App.css';
import Profile from './components/profile';
import Contact from './components/contact';
import Connect from './components/connect';

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-lt">
            <a href="https://a14a19.github.io/">
              Anas Ahmed
            </a>
        </div>
        <div className="nav-rt">
            <div>
                <a href="https://a14a19.github.io/" title="Home">
                    <i className="fa-solid fa-house"></i>
                </a>
            </div>
        </div>
      </header>
      <Profile />
      <Contact />
      <Connect />
    </div>
  );
}

export default App;
