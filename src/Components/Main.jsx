import { Outlet } from "react-router-dom";
import Headers from "./Headers";

const Main = () => {
  return (
    <div>
       <Headers/>
       <Outlet/>
    </div>
  );
};

export default Main;