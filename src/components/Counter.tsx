import React from "react";
import useCounter from "./useCounter";

const Counter: React.FC = () => {
  const { handleAdd, handleSubtract, count } = useCounter();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl text-center mb-4">{count}</h1>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleAdd}
        >
          Add(+)
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubtract}
        >
          Sub(-)
        </button>
      </div>
    </div>
  );
};

export default Counter;
