import React from "react";

const ItemList = ({ item, handleRemove, index }) => {
  return (
    <li className="mb-2">
      <div className="flex justify-between items-center text-gray-900 gap-2">
        <p className=" text-lg font-medium">{item}</p>
        <button
          className=" border-2 py-1 px-3 rounded hover:bg-slate-300"
          onClick={() => handleRemove(index)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default ItemList;
