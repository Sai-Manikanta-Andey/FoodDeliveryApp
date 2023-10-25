import React, { useState } from "react";
import { restaurantList, IMG_CDN } from "../../utils/mockData";
import "./Card.css";

const RestaurentCard = ({res}) => {
  return (
    <div className="res-container">
      <div className="res-card" >
        <img
          src={IMG_CDN + res.info.cloudinaryImageId}
          alt="dd"
          className="resCard-img"
        />
        <div className="res-details">
          <div className="card-title">
            <h4> {res.info.name} </h4>
          </div>
          <div className="rating">
            <h5> {res.info.avgRating} </h5>
          </div>
          <div className="cuisines">
            <h5>{res.info.cuisines.slice(0, 2).join(", ")} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
