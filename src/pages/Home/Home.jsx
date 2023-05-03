import React, { useEffect, useState } from "react";
import Banner from "../../assets/banner.jpg";
import ChefCard from "../../shared/ChefCard/ChefCard";
import RecipeContent from "../../shared/RecipeContent/RecipeContent";
import Category from "../../shared/Category/Category";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://foodie-frenzy-server-rinku-ahamed.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      {/* Banner area */}
      <section
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="md:w-3/6 py-24 md:py-40">
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Taste the world with our expert
              <span className="text-red-600"> chefs</span>
            </h2>
            <p className="text-slate-200 mt-6">
              Delight your taste buds with our extensive collection of
              mouth-watering recipes crafted by top chefs from around the world.
            </p>
          </div>
        </div>
      </section>
      {/* Category area */}
      <Category></Category>

      {/* Main content */}
      <section className="container mx-auto px-6 md:px-10 mt-20">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Get to Know Our Talented Chefs
        </h2>
        <p className="text-center mt-4 md:px-36">
          Discover the masterminds behind our delicious recipes. Our team of
          talented chefs are passionate about creating mouth-watering dishes
          that are sure to impress. From classic comfort foods to exotic
          cuisine, explore their profiles.
        </p>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </section>
      {/* Our Most popular recipes area */}
      <RecipeContent></RecipeContent>
    </div>
  );
};

export default Home;
