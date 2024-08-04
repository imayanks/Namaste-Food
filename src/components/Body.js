import React, { useState } from "react";
import RestaurantCard from './Restaurant_Cards';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
            info: {
                id: "151656",
                name: "Dev International",
                cloudinaryImageId: "enj3srsnhbltbom2ovvh",
                costForTwo: "₹100 for two",
                cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
                avgRating: 4.3,
                avgRatingString: "4.3",
                sla: { deliveryTime: 65 },
            },
        },
        {
            info: {
                id: "151518",
                name: "Bakery World",
                cloudinaryImageId: "mt2aggiscfl3yviatwng",
                costForTwo: "₹250 for two",
                cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
                avgRating: 4.4,
                avgRatingString: "4.4",
                sla: { deliveryTime: 79 },
            },
        },
        {
            info: {
                id: "496348",
                name: "Pizza Box",
                cloudinaryImageId: "n7wbtvlifwbw5y4a7rrv",
                costForTwo: "₹300 for two",
                cuisines: ["Pizzas", "Burgers", "Beverages"],
                avgRating: 4.3,
                avgRatingString: "4.3",
                sla: { deliveryTime: 78 },
            },
        },
    ]);

    const filterTopRated = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRatingString > "4.3"
        );
        setListOfRestaurants(filteredList);
    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterTopRated}>
                    Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
