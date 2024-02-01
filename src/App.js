import TaskList from "./Components/TaskList";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Login from "./Components/Login";
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const token = sessionStorage.getItem('token');
  const [isTokenPresent, setIsTokenPresent]  =useState(false);
  const [searchType, setSearchType] = useState('');
  const [searchVal, setSearchVal] = useState('');
  useEffect(() => {
    if(token) setIsTokenPresent(true);
  }, []);
  return (
    <div className="App">
      {isTokenPresent && (
        <>
          <Header />
          <SubHeader setSearchType={setSearchType} setSearchVal={setSearchVal}/>
          <TaskList searchType={searchType} searchVal={searchVal} />
        </>
      )} 
      {!isTokenPresent &&
      <div className="loginDiv">
        <Login setTokenPresent={setIsTokenPresent}/> 
      </div>}
    </div>
  );
}

export default App;
