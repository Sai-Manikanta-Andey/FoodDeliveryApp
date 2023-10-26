import RestaurentCard from "../Card/Card";
import { GET_RES_API_URL } from "../../utils/mockData";
import { useEffect, useState } from "react";
import "./Body.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
   const [filteredRestaurant, setfilteredRestaurant] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(GET_RES_API_URL);
    const json = await res.json();
    
      console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    
  };
  if (resList.length === 0) {
    return <Shimmer />;
  }
  


  return (
    <div className="body paddings">
      <div className="filter ">
        <div className="search">
          <input
            type="text"
            placeholder="Search Items"
            className="search-input"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="btn"
            onClick={() => {
              const filteredRestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() =>
            setfilteredRestaurant((res) =>
              res.filter((item) => item.info.avgRating >= 4)
            )
          }
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((eachRes) => (
          <Link to={"/restaurants/" + eachRes.info.id} key={eachRes.info.id} className="Link">
            <RestaurentCard res={eachRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
