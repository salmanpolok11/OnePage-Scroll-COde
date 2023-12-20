import HomeC from "./HomeC";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div>
       This Home
        <div id="home">
           <HomeC/>
        </div>
        <div id="login">
        <Login></Login>
      </div>
      <div id="register">
        <Register />
      </div>
     
    </div>
  );
};

export default Home;
