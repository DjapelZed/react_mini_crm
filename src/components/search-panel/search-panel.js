import "./search-panel.scss";

function SearchPanel(){
    return (
        <div className="search-panel">
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Find an employee"/>
        </div>
    )
}

export default SearchPanel;