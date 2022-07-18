import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

function EmployeesList({data, onDelete, onToggleProp}){
    const employeesList = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
            key={id}
            onToggleProp={e => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            onDelete={() => onDelete(id)} 
            {...itemProps}

        />
    })
    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;