import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <h1>Users:</h1>

    <section className="container">
      <User name="Pasha" job="UI Dev" location="Hyderabad" />
      <User name="Jabeen" job="Engineer" location="Ongole" />
      <User name="Uma" job="Frontend Develop" location="Vijayawada" />
    </section>
  </div>
}


function User(props) {
  return <div className="user">
    <h3>{props.name}</h3>
    <p>Job: {props.job}</p>
    <p>Location: {props.location}</p>
  </div>
}

export default App;
