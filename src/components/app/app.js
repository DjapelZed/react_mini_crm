import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import AddForm from "../employees-add-form/employees-add-form";
import "./app.scss";

const data = [
    {name: "Foo Barovich", salary: 500, promotion: true, id: 1},
    {name: "Boo Rarov", salary: 900, promotion: true, id: 2},
    {name: "Doo Taroven", salary: 900,  promotion: false, id: 3}
]

function App(){
    return (
        <div className="app">
            <AppInfo/>
            <SearchPanel/>
            <AppFilter/>
            <EmployeesList data={data}/>
            <AddForm/>
        </div>
    )
}

export default App;