import "./app-filter.scss"

function AppFilter({setFilter, currentFilter}){
    const buttonsData = [
        {name: "All", filter: "all"},
        {name: "Promotion", filter: "promo"},
        {name: "Salary >1000$", filter: "salary"},
    ]
    const buttons = buttonsData.map(({name, filter}) => {
        const clazz = currentFilter === filter ? "btn-light" : "btn-outline-light";
        return <button 
                    onClick={setFilter} 
                    data-filter={filter} 
                    className={`btn ${clazz}`}
                    key={name}>
                    {name}
                </button>
    });

    return (
        <div className="app-filter">
            <div className="btn-group">
                {buttons}
            </div>
        </div>
    )
}

export default AppFilter;