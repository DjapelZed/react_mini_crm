import {useState} from "react";
import "./add-form.scss";

function AddForm({addEmployee}){
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    
    const onValueChange = ({target}) => {
        if (target.name === "name") setName(target.value);
        if (target.name === "salary"){
            const salary = parseInt(target.value);
            if (salary >= 0) setSalary(salary);
        } 
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {target: {name, salary}} = e;
        if (name.value && salary.value){
            const employee = {
                name: name.value,
                salary: salary.value,
                promotion: false,
            }
            addEmployee(employee);
        }
    }

    return (
        <div className="app-add-form">
        <h3>New employee</h3>
        <form onSubmit={e => handleSubmit(e)} className="add-form d-flex">
            <input required type="text"
                className="form-control new-post-label"
                placeholder="Name"
                onChange={e => onValueChange(e)}
                name="name" 
                value={name || ""} // useState with empty string causes warning (change uncontrolled to controlled input) 
                />
            <input required type="number"
                className="form-control new-post-label"
                placeholder="Salary"
                onChange={e => onValueChange(e)}
                name="salary" 
                value={salary || ""} // don't display default value "0"
                />
            <button disabled={!(name && salary)} type="submit"
                    className="btn btn-outline-light">Add</button>
        </form>
    </div>
    )
}

export default AddForm;