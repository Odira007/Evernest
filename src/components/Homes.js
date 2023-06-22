import React from "react";
import { Link } from "react-router-dom";

const Homes = (props) => {

    return (
        <div className="hfs-container">
            <div className="card">
            <Link to={`/homedetails/${props.agency.id}`} >
                <img src={props.coverPhoto.url} alt="imagee" className="card-image"/>
            </Link>
                <div className="card-details">
                    <p className="price">د.إ{props.price}</p>
                    <p><strong>{props.rooms}</strong> bds | <strong>{props.baths}</strong> ba | <strong>{Math.round(props.area * 10.764)}</strong> sqft</p>
                    <p>10671 Braes Bend Dr, Houston, TX 77071</p>
                    <p className="small">{props.agency.name.toUpperCase()}</p>
                </div>
            </div>

        </div>
    )
}

export default Homes;