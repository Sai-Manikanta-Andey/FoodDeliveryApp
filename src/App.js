import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";





const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
