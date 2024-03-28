import './App.css';

import { name } from "./data";
import { User } from "./components/User"
import pageTitle, { SUB_TITLE as myOwnValue } from "./constants";
import UserContainer from './components/UserContainer';

function App() {
  return <div>
    <h1>{pageTitle}</h1>
    <h2>{myOwnValue}</h2>
    <UserContainer />
  </div>
}


export default App;
