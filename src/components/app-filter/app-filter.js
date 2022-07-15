import "./app-filter.scss"

function AppFilter(){
    return (
        <div className="app-filter">
            <div className="btn-group">
                <button className="btn btn-light">All</button>
                <button className="btn btn-outline-light">Promotion</button>
                <button className="btn btn-outline-light">Salary >1000$</button>
            </div>
        </div>
    )
}

export default AppFilter;