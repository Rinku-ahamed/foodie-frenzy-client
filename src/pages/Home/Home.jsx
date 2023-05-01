import React from "react";
import Banner from "../../assets/banner.jpg";
const Home = () => {
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
            <h2 className="text-6xl font-bold text-white">
              It is even better than an expensive cookery book
            </h2>
            <p className="text-slate-200 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              unde facere autem fuga? Cupiditate esse perferendis at suscipit
              laudantium doloremque nam sit mollitia et, alias quaerat eligendi
              exercitationem ab, ea iusto corporis nobis tenetur repudiandae
              numquam id! Voluptate impedit sed illo optio sapiente alias fuga,
            </p>
          </div>
        </div>
      </section>
      <h2>Home page</h2>
    </div>
  );
};

export default Home;
