import React from "react";
import { Link } from "react-router-dom";
import ExperienceImg from "../../assets/rating.png";
import LikesImg from "../../assets/like.png";
const ChefCard = ({ chef }) => {
  console.log(chef);
  const { chef_profile, likes, name, id, description, experience } = chef;
  return (
    <div className="card shadow-lg">
      <figure className="px-6 pt-10">
        <img src={chef_profile} className="rounded-xl w-full h-80" />
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
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
