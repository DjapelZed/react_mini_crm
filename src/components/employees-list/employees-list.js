import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

function EmployeesList({data, onDelete, onToggleIncrease, onTogglePromotion}){
    const employeesList = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
            key={id}
            onToggleIncrease={() => onToggleIncrease(id)}
            onTogglePromotion={() => onTogglePromotion(id)}
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