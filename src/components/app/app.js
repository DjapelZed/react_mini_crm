import { useState } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../employees-add-form/employees-add-form";
import "./app.scss";

const db = [
    {name: "Foo Barovich", salary: 500, increase: true, promotion: true, id: 1},
    {name: "Boo Rarov", salary: 900, increase: true, promotion: false, id: 2},
    {name: "Doo Taroven", salary: 900,  increase: false, promotion: false, id: 3}
]

function App(){
    const [data, setData] = useState(db);
    
    const onDelete = id => {
        const updatedData = data.filter(item =>  item.id !== id);
        setData(updatedData);
    };
    
    const addEmployee = employee => {
        const id = data[data.length-1].id + 1;
        const updatedData = data.slice();
        updatedData.push({id: id, ...employee})
        console.log(updatedData);
        setData(updatedData);
    };

    const onToggleIncrease = id => {
        const updatedData = data.map(item => {
            if (item.id === id){
                item.increase = !item.increase
            }
            return item;
        });
        setData(updatedData);
    };

    const onTogglePromotion = id => {
        const updatedData = data.map(item => {
            if (item.id === id){
                item.promotion = !item.promotion
            }
            return item;
        });
        setData(updatedData);
    };

    return (
        <div className="app">
            <AppInfo/>
            <SearchPanel/>
            <AppFilter/>
            <EmployeesList 
                onToggleIncrease={onToggleIncrease}
                onTogglePromotion={onTogglePromotion}
                onDelete={id => onDelete(id)} 
                data={data}

            />
            <AddForm addEmployee={employee => addEmployee(employee)}/>
        </div>
    )
}


export default App;