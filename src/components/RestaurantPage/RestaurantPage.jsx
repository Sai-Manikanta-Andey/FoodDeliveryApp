import React, { useState } from "react";
import "./RestaurantPage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { MENU_API_URL } from "../../utils/mockData";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL+resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  
  if (resInfo === null) return <Shimmer />; 

  const { name, cuisines, costForTwoMessage, avgRating,city } =
    resInfo.cards[0]?.card?.card?.info;

  
  const {itemCards} = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
 


  return (
    <section className="restaurant-page-wrapper maxWidth">
      <div className="restaurant-page-container paddings">
        <h2> {name} </h2>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {costForTwoMessage} </h4>
        <h5> Rating : {avgRating} ★ </h5>
        <h5> Location : {city} </h5>

        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price/100}$
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RestaurantPage;
