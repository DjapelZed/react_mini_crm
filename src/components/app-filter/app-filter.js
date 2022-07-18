import "./app-filter.scss"

function AppFilter({setFilter, currentFilter}){
    const handleClick = e => {
        setFilter(e);
    }
    
    const buttons = [
        {name: "All", filter: "all"},
        {name: "Promotion", filter: "promo"},
        {name: "Salary >1000$", filter: "salary"},
    ].map(({name, filter}) => (
        <button onClick={handleClick} 
                data-filter={filter} 
                className={`btn ${currentFilter === filter ? "btn-light" : "btn-outline-light"}`}
                key={name}
                >{name}</button>
    ));

    return (
        <div className="app-filter">
            <div className="btn-group">
                {buttons}
            </div>
        </div>
    )
}

export default AppFilter;