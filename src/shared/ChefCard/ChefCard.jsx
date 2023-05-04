import React from "react";
import { Link } from "react-router-dom";
import ExperienceImg from "../../assets/rating.png";
import LikesImg from "../../assets/like.png";
import CommonBtn from "../CommonBtn/CommonBtn";
import LazyLoad from "react-lazy-load";
const ChefCard = ({ chef }) => {
  const {
    chef_profile,
    likes,
    name,
    id,
    description,
    experience,
    number_of_recipes,
  } = chef;
  return (
    <div className="card shadow-lg">
      <figure className="sm:px-6 pt-10 relative">
        <LazyLoad>
          <img
            src={chef_profile}
            className="rounded-t w-full h-80 object-cover"
          />
        </LazyLoad>
        <span className="absolute bottom-0 z-10 bg-black text-white px-3 py-1 rounded-md text-[14px]">
          Available Recipes {number_of_recipes}
        </span>
      </figure>
      <div className="card-body pt-5 items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{description.slice(0, 80)}...</p>
        <div className="sm:flex gap-4">
          <span className="flex gap-2 items-center">
            <img src={ExperienceImg} alt="" className="w-4 h-4" />
            Experience {""}
            {experience}
          </span>
          <span className="flex gap-2 items-center">
            <img src={LikesImg} alt="" className="w-4 h-4" /> Likes {likes}
          </span>
        </div>
        <div className="card-actions mt-4">
          <Link to={`/chef/${id}`}>
            <CommonBtn>View Recipes</CommonBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
