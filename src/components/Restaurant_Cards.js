import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt="No Preview"
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRatingString}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    );
};

export default RestaurantCard;

