import "./search-panel.scss";

function SearchPanel({setSearchPhrase}){
    const handleInput = e => {
        setSearchPhrase(e.target.value)
    }
    return (
        <div className="search-panel">
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Find an employee"
                onChange={handleInput}
                />
        </div>
    )
}

export default SearchPanel;