import './index.css';
import Employee from './Components/Employee';
import EditEmployee from './Components/editEmployee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const[mainRole, setmainRole] = useState('Developer')
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Intern",
      img: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg",
    },
    {
      id: 2,
      name: "Mariam",
      role: "Secretary",
      img: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Bryan",
      role: "Intern",
      img: "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Kojo",
      role: "Manager",
      img: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Kingsley",
      role: "CEO",
      img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Albert",
      role: "Developer",
      img: "https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      name: "Michelle",
      role: "Lawyer",
      img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      name: "Maureen",
      role: "Accountant",
      img: "https://images.pexels.com/photos/4350216/pexels-photo-4350216.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 9,
      name: "Stacy",
      role: "Desk Help",
      img: "https://images.pexels.com/photos/3860628/pexels-photo-3860628.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 10,
      name: "Daisy",
      role: "Intern",
      img: "https://images.pexels.com/photos/7491622/pexels-photo-7491622.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 11,
      name: "Lucia",
      role: "Developer",
      img: "https://images.pexels.com/photos/4467859/pexels-photo-4467859.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 12,
      name: "Bubu",
      role: "Developer",
      img: "https://media.istockphoto.com/id/1372138855/photo/cheerful-black-manager-with-digital-tablet-walking-by-office.jpg?s=612x612&w=is&k=20&c=bJ8G7w778mWfd3MecwsZq0bl09q2ym5MAFXW94xYt38=",
    },
  ]);

function updateEmployee(id, newName, newRole){
  const updatedEmployees = employees.map((employee)=>{
    if (id == employee.id){
      return{...employee, name: newName, role:newRole}
    }
    return employee
  });
  setEmployees(updatedEmployees);
}

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setmainRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee)=>{
              return(<Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />);
            })};
          </div>
        </>
      ) : (
        <p>No Role</p>
      )}
      ;
    </div>
  );
}

export default App;
