import "./employees-list-item.scss";

function EmployeesListItem({name, salary, promotion}){
    const className = `${promotion ? "promotion" : ""} list-group-item d-flex justify-content-between`
    return (
        <li className={className}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+"$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;