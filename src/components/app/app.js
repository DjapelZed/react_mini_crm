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
    {name: "Doo Taroven", salary: 1200,  increase: false, promotion: false, id: 3}
]

function App(){
    const [data, setData] = useState(db);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [filterType, setFilterType] = useState("all");

    const onDelete = id => {
        const updatedData = data.filter(item =>  item.id !== id);
        setData(updatedData);
    };
    
    const addEmployee = employee => {
        const id = data[data.length-1].id + 1;
        const updatedData = data.slice();
        updatedData.push({id: id, ...employee})
        setData(updatedData);
    };

    const onToggleProp = (id, prop) => {
        const updatedData = data.map(item => {
            if (item.id === id){
                item[prop] = !item[prop];
            }
            return item;
        });
        setData(updatedData);
    };
    
    const getBonusSalariesCount = () => {
        return data.filter(item => item.increase).length;
    }
    
    const getSearchItems = (items, searchPhrase) => {
        return items.filter(item => item.name.indexOf(searchPhrase) > -1);
    }

    const setFilter = e => {
        setFilterType(e.target.getAttribute("data-filter"));
    }

    const getFilterItems = (items, filterType) => {
        if (filterType === "all") return items;
        if (filterType === "promo") return items.filter(item => item.promotion);
        if (filterType === "salary") return items.filter(item => item.salary >= 1000);
        return items;
    }
    const visibleData = getFilterItems(getSearchItems(data, searchPhrase), filterType);

    return (
        <div className="app">
            <AppInfo employeesCount={data.length} bonusSalaryCount={getBonusSalariesCount()}/>
            <SearchPanel setSearchPhrase={setSearchPhrase}/>
            <AppFilter setFilter={setFilter} currentFilter={filterType}/>
            <EmployeesList 
                onToggleProp={onToggleProp}
                onDelete={id => onDelete(id)} 
                data={visibleData}
            />
            <AddForm addEmployee={employee => addEmployee(employee)}/>
        </div>
    )
}


export default App;