import React from "react";
import Recipe1 from "../../assets/r1.webp";
import Recipe2 from "../../assets/r2.webp";
import Recipe3 from "../../assets/r3.webp";
import Recipe4 from "../../assets/r4.webp";
const RecipeContent = () => {
  return (
    <section className="container mx-auto px-10 mt-20 mb-16">
      <h2 className="text-3xl md:text-5xl text-center font-bold">
        Most Popular Recipes
      </h2>
      <p className="text-center mt-4 md:px-36">
        Welcome to our Most Recipes section, where you can find an incredible
        selection of our most popular dishes from around the world. From classic
        comfort foods to exotic cuisines, we've got something to satisfy every
        craving.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-8">
        <div className="shadow-xl">
          <img src={Recipe1} alt="" className="rounded-md" />
          <h3 className="text-lg font-semibold mt-3 px-4 pb-4">
            Mexican chipotle wings with creamed corn
          </h3>
        </div>
        <div className="shadow-xl">
          <img src={Recipe2} alt="" className="rounded-md" />
          <h3 className="text-lg font-semibold mt-3 px-4 pb-4">
            Roast plantain burrito with Mexican rice and mixed beans
          </h3>
        </div>
        <div className="shadow-xl">
          <img src={Recipe3} alt="" className="rounded-md" />
          <h3 className="text-lg font-semibold mt-3 px-4 pb-4">
            Quorn Mexican lasagne
          </h3>
        </div>
        <div className="shadow-xl">
          <img src={Recipe4} alt="" className="rounded-md" />
          <h3 className="text-lg font-semibold mt-3 px-4 pb-4">
            Cordero a la barbacoa en adobo – Mexican slow-cooked lamb
          </h3>
        </div>
      </div>
    </section>
  );
};

export default RecipeContent;
