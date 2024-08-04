HTML CODE -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <Title> Namaste Food </Title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    
    <div id="root"></div>
    <script type="module" src="./src/app.js"></script>
</body>
</html>




CSS CODE -->

.header{
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    
}

.logo{
    width: 150px;
} 

.nav-items > ul{

    font-size: 24px;
    display: flex;
    list-style-type: none;

}

.nav-items > ul >li{
    
    margin: 10px;
    padding: 10px ;

}

.res-container{
    display: flex;
    flex-wrap: wrap;
}
.res-card{
    margin: 5px;
    width: 200px;
    height: 390px;
    background-color: #f0f0f0;
    padding: 10px;
    /* font-size: 15px; */

}

.res-card:hover{
    cursor: pointer;
    border: 1px solid black;

}


.search{
    padding: 10px;
}

.res-logo{
    
    height: 50%;
    width: 70%;
}

.filter-btn{
    margin: 10px;
    cursor: pointer;
}



JS CODE -->

import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ LOGO_URL } />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    );
};

export default Header;

import RestaurantCard from "./Restaurant_Cards";
// import resList from "../utils/MockData";
import { useState } from "react/cjs/react.production.min";

const Body = () => {
    const[listOfRestaurants] = useState([
{
            "info": {
                   "id": "151656",
                   "name": "Dev International",
                   "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
                   "costForTwo": "₹100 for two",
                   "cuisines": [
                     "North Indian",
                     "Chinese",
                     "Fast Food",
                     "Beverages"
                   ],
                   "avgRating": 4.3,
                   "avgRatingString": "4.3",
                   "sla": {
                     "deliveryTime": 65,
                   },
                },
},
{
            "info": {
                    "id": "151518",
                    "name": "Bakery World",
                    "cloudinaryImageId": "mt2aggiscfl3yviatwng",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Bakery",
                        "Ice Cream",
                        "Snacks",
                        "Beverages"
                         ],
                        "avgRating": 4.4,
                        "avgRatingString": "4.4",
                        "sla": {
                              "deliveryTime": 79,
                            },
                        },
},
{
    "info": {
        "id": "496348",
        "name": "Pizza Box",
        "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.3,
        "avgRatingString": "4.3",
        "sla": {
          "deliveryTime": 78,
        },
    },
},
]);

return(
     <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={() =>{
                listOfRestaurants = listOfRestaurants.filter(
                    (res) =res.info.avgRatingString > 4
                );
                console.log(listOfRestaurants);
            }}
            >
                Top Rated restaurants </button>   
        </div> 
        
        
        <div className="res-container">
        {listOfRestaurants.map((Restaurant) => (
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
        </div>
     </div>
        
    );
};

export default Body; 

import { CDN_URL } from '../utils/constants';
// import resList from '../utils/MockData';


const RestaurantCard = (props) => {     //(resName,cuisine,ratings,deliveryTime)yeh bhee pass kar sakte h insted of props
    const {Restaurant} = props;             
    
    return (
        <div className="res-card">
            <img
            className="res-logo"
            src={ CDN_URL+ Restaurant.info.cloudinaryImageId}
            alt="No Preview" 
            />
            <h3>{Restaurant.info.name}</h3>
            <h4>{Restaurant.info.cuisines.join(", ")}</h4> 
            <h4>{Restaurant.info.avgRatingString}</h4>
            <h4>{Restaurant.info.sla.deliveryTime}</h4>
        </div>
        
    );
};

export default RestaurantCard;  

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>

            
        </div>
    );
 };


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);

 export const LOGO_URL = 
   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"


export const CDN_URL = 
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"