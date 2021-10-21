import { useHistory } from 'react-router';
import './Homepage.css';

function Homepage() {
  const history = useHistory();

  return (
    <div className="App">
      <header>
      <nav>
        <ul className='homeNav'>
          <a href='/home'>Home</a>
          <a href='/'>About Us</a>
          <a href='/signup'>Sign Up</a>
          <a href='/login'>Log In</a>
        </ul>
      </nav>
      </header>
      <div className='bgImage'>
      <div className='mainHome'>
        <h1>African Market Place</h1>
        <div className='homeButtons'>
          <button onClick={ () => history.push('/signup')}>Sign up</button>
          <button onClick={ () => history.push('/login')}>Log In</button>
        </div>
      </div>
      </div>
      
     
    </div>
  );
}

export default Homepage;
