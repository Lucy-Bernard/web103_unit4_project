import React from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ViewCars from "./pages/ViewCars";
import EditCar from "./pages/EditCar";
import CreateCar from "./pages/CreateCar";
import CarDetails from "./pages/CarDetails";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <CreateCar title="BOLT BUCKET | Customize" />,
    },
    {
      path: "/custom-items",
      element: <ViewCars title="BOLT BUCKET | Custom Cars" />,
    },
    {
      path: "/custom-items/:itemId",
      element: <CarDetails title="BOLT BUCKET | View" />,
    },
    {
      path: "/edit/:itemId",
      element: <EditCar title="BOLT BUCKET | Edit" />,
    },
  ]);

  return (
    <div className="app">
      <Navigation />

      {element}
    </div>
  );
};

export default App;
