/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = () => {
  const axiosPost = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const reqBody = {
        id: '1',
        firstName: 'John',
        lastName: 'Alvarez',
      };

      const res = await axios.post('/post-data', reqBody, config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My test fullstack app</p>
        <a className="App-link" onClick={() => axiosPost()}>
          Do an axios Post Call
        </a>
      </header>
    </div>
  );
};

export default App;
