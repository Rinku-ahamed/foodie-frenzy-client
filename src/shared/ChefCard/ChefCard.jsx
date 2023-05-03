import React from "react";
import { Link } from "react-router-dom";
import ExperienceImg from "../../assets/rating.png";
import LikesImg from "../../assets/like.png";
import CommonBtn from "../CommonBtn/CommonBtn";
import LazyLoad from "react-lazy-load";
const ChefCard = ({ chef }) => {
  const { chef_profile, likes, name, id, description, experience } = chef;
  return (
    <div className="card shadow-lg">
      <figure className="px-6 pt-10">
        <LazyLoad height={340}>
          <img src={chef_profile} className="rounded-t" />
        </LazyLoad>
      </figure>
      <div className="card-body pt-5 items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{description.slice(0, 80)}...</p>
        <div className="flex gap-4">
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
