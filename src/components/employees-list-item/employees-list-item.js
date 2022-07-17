import {useState} from "react";
import "./employees-list-item.scss";

function EmployeesListItem({name, salary, promotion, onDelete}){
    const [promo, setPromotion] = useState(promotion);
    const [like, setLike] = useState(false);

    const className = `${promo ? "promotion" : ""} 
                        ${like ? "like" : ""} 
                        list-group-item d-flex justify-content-between`
    return (
        <li className={className}>
            <span onClick={() => setLike(!like)} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+"$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => setPromotion(!promo)} className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button onClick={onDelete} className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;