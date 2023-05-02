import React, { useEffect, useState } from "react";
import Banner from "../../assets/banner.jpg";
import ChefCard from "../../shared/ChefCard/ChefCard";
const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
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
        <div className="container mx-auto px-10">
          <div className="md:w-3/6 py-40">
            <h2 className="text-7xl font-bold text-white">
              Taste the world with our expert{" "}
              <span className="text-orange-600">chefs</span>
            </h2>
            <p className="text-slate-200 mt-6">
              Delight your taste buds with our extensive collection of
              mouth-watering recipes crafted by top chefs from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      {/* <section className="container mx-auto px-10 mt-10">
        <h2 className="text-4xl text-center font-bold">
          Get to Know Our Talented Chefs
        </h2>
        <p className="text-center mt-4 px-36">
          Discover the masterminds behind our delicious recipes. Our team of
          talented chefs are passionate about creating mouth-watering dishes
          that are sure to impress. From classic comfort foods to exotic
          cuisine, explore their profiles.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Home;
