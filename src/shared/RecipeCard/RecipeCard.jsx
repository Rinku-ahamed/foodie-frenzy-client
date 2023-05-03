import React, { useState } from "react";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
const RecipeCard = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { cookingMethod, ingredients, rating, recipeName } = recipe;
  const showFavoriteMessage = () => {
    toast("Successfully add into favorite!!");
    setDisable(true);
  };
  return (
    <div className="flex flex-col border shadow-md rounded px-4 py-6">
      <h2 className="text-xl">
        <b>Recipe Name:</b> {recipeName}
      </h2>

      <h3 className="font-semibold text-xl mt-3 mb-2">Ingredients:</h3>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}

      <p className="mt-4 mb-4">{cookingMethod}</p>

      <div className="flex justify-between items-center gap-4 mt-auto">
        <div className="border flex gap-2 justify-center w-full py-2 text-center">
          <Rating
            style={{ maxWidth: 90 }}
            value={Math.round(rating)}
            readOnly
          />
          {rating}
        </div>
        <button
          onClick={showFavoriteMessage}
          disabled={disable ? true : ""}
          className={`${
            disable ? "bg-red-300" : "bg-red-600"
          } text-white w-full py-2 rounded-sm font-semibold`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
