import React from "react";
import CatImg1 from "../../assets/c1.jpg";
import CatImg2 from "../../assets/c2.jpg";
import CatImg3 from "../../assets/c3.jpg";
import CatImg4 from "../../assets/c4.jpg";
import CatImg5 from "../../assets/c4.jpg";
const Category = () => {
  return (
    <section className="container mx-auto px-6 md:px-10 mt-16">
      <h2 className="text-3xl md:text-5xl text-center font-bold">
        Recipe Categories
      </h2>
      <p className="text-center mt-4 md:px-36">
        Welcome to our Recipes Category, where you can explore an extensive
        collection of mouth-watering dishes from around the world. We have
        organized our recipes into categories to make it easy for you to find
        the perfect dish for any occasion.
      </p>

      <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="text-center">
          <img src={CatImg1} alt="" className="rounded-full" />
          <h3 className="mt-2 font-semibold text-xl">Appetizers</h3>
        </div>
        <div className="text-center">
          <img src={CatImg2} alt="" className="rounded-full" />
          <h3 className="mt-2 font-semibold text-xl">Beef</h3>
        </div>
        <div className="text-center">
          <img src={CatImg3} alt="" className="rounded-full" />
          <h3 className="mt-2 font-semibold text-xl">Chicken</h3>
        </div>
        <div className="text-center">
          <img src={CatImg4} alt="" className="rounded-full" />
          <h3 className="mt-2 font-semibold text-xl">Vegetarian</h3>
        </div>
        <div className="text-center">
          <img src={CatImg5} alt="" className="rounded-full" />
          <h3 className="mt-2 font-semibold text-xl">Desserts</h3>
        </div>
      </div>
    </section>
  );
};

export default Category;
