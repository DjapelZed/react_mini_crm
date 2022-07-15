import "./app-info.scss";

function AppInfo(){
    return (
        <div className="app-info">
            <h1 className="text-center">Employees list of OOO "Roga i Kopyta"</h1>
            <hr />
            <div className="info">
                <div className="info__count">
                    Employees count:
                </div>
                <div className="info__bonus">
                    Bonus salary: 
                </div>
            </div>
        </div>
    )
}

export default AppInfo;