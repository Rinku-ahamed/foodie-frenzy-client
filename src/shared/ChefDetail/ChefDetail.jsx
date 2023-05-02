import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../assets/page-banner.jpg";
import ExperienceImg from "../../assets/rating.png";
import LikesImg from "../../assets/like.png";
import Recipes from "../../assets/mixing.png";
const ChefDetail = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const {
    chef_profile,
    likes,
    name,
    description,
    experience,
    number_of_recipes,
  } = singleData;
  return (
    <div>
      <div className="relative">
        <img src={Banner} alt="" />
        <h2 className="absolute top-[46%] text-5xl text-white text-center w-full">
          Chef Details
        </h2>
      </div>
      <section className="container mx-auto px-10 my-20">
        <div className="w-[750px] mx-auto md:flex items-center gap-10 shadow-xl rounded-xl">
          <img
            src={chef_profile}
            alt=""
            className="md:w-80 h-80 rounded-s-xl"
          />
          <div className="pe-10">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="mt-2">{description}</p>
            <p className="flex gap-2 items-center mt-4">
              <img src={ExperienceImg} alt="" className="w-4 h-4" />
              Experience {""}
              {experience}
            </p>
            <p className="flex gap-2 items-center mt-2">
              <img src={LikesImg} alt="" className="w-4 h-4" /> Likes {likes}
            </p>
            <p className="flex gap-2 items-center mt-2">
              <img src={Recipes} alt="" className="w-4 h-4" /> Number of Recipes
              {number_of_recipes}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetail;
