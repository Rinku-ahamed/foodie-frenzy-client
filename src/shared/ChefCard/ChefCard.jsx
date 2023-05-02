import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  console.log(chef);
  const { chef_profile, likes, name, id } = chef;
  return (
    <div className="card shadow-lg">
      <figure className="px-6 pt-10">
        <img src={chef_profile} className="rounded-xl" />
      </figure>
      <div className="card-body pt-5 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions mt-4">
          <Link to={`/chef/${id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
