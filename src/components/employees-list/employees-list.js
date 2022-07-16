import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

function EmployeesList({data}){
    const employeesList = data.map(item => <EmployeesListItem {...item}/>)
    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;