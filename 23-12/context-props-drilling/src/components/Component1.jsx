import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  const values = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
