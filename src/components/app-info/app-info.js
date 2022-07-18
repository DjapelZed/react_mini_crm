import "./app-info.scss";

function AppInfo({employeesCount, bonusSalaryCount}){
    return (
        <div className="app-info">
            <h1 className="text-center">Employees List</h1>
            <hr />
            <div className="info">
                <div className="info__count">
                    Employees count: {employeesCount}
                </div>
                <div className="info__bonus">
                    Bonus salary: {bonusSalaryCount}
                </div>
            </div>
        </div>
    )
}

export default AppInfo;