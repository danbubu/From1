import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';
function App() {
  const[mainRole, setmainRole] = useState('Developer')
  const showEmployees = true;
  return (
    <div className="App">
      {console.log("Show Empathy!")}
      {showEmployees ? (
        <>
        <input type='text' onChange={(e)=>{
          console.log(e.target.value)
          setmainRole(e.target.value);
        }} /> 
          <Employee Name="Caleb" role="Intern"/>
          <Employee Name="Bubu" role="Intern"/>
          <Employee Name="Albert" role={mainRole}/>
          <Employee Name="Edward" role="Teacher"/>
          <Employee Name="Jacob" role="CEO"/>
          <Employee Name="Mariam"/>
          <Employee Name="Edwin" role="Student"/>
          <Employee Name="Rose"/>
        </>
      ) : (
        <p>You cannot see the list of employees</p>
      )}
      ;
    </div>
  );
}

export default App;
