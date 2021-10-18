import './Homepage.css';

function Homepage() {
  return (
    <div className="App">
      <header>
      <nav>
        <ul className='homeNav'>
          <a>Home</a>
          <a>About Us</a>
          <a>Sign Up</a>
          <a>Log In</a>
        </ul>
      </nav>
      </header>
      <div className='bgImage'>
      <div className='mainHome'>
        <h1>African Market Place</h1>
        <div className='homeButtons'>
          <button>Sign up</button>
          <button>Log In</button>
        </div>
      </div>
      </div>
      
     
    </div>
  );
}

export default Homepage;
