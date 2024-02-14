import { useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("State changed: count is now", count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      console.log("State changed: count is now", count - 1);
    }
  };

  return { handleAdd, handleSubtract,count };
};

export default useCounter;
