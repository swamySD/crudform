
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails';


function App() {
return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="/employee/create" element={<CreateEmployee/>}/>
        <Route path="/employee/details/:empid" element={<EmployeeDetails/>}/>
        <Route path="/employee/edit/:empid" element={<EditEmployee/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;





