import { useState } from "react";
import ItemList from "./components/ItemList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [list, setList] = useState([]);
  const [value, setvalue] = useState("");
  const handleOnChange = (e) => {
    setvalue(e.target.value);
  };
  const handleAdd = () => {
    if (value.trim().length == 0) {
      return;
    }
    setList((prev) => [...prev, value]);
    setvalue("");
  };
  const handleRemove = (index) => {
    let data = [...list.slice(0, index), ...list.slice(index + 1)];
    setList(data);
  };
  return (
    <div className="flex items-center justify-center  h-screen bg-slate-50">
      <div className=" bg-white shadow-lg rounded-lg mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-semibold text-2xl">Item List</h1>
        </div>
        <form
          className="w-full max-w-sm mx-auto px-4 py-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div className="flex items-center border-b-2 border-blue-700 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add item"
              value={value}
              onChange={handleOnChange}
            />
            <button
              className="flex-shrink-0 bg-blue-700 hover:bg-blue-900 text-white py-1 px-3 rounded"
              type="button"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </form>
        <ul className="list-disc px-11">
          {list.map((item, index) => (
            <ItemList
              key={uuidv4()}
              index={index}
              item={item}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
