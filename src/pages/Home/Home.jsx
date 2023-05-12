import Services from "./Services";
import About from "./About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div id="about">  <About />  </div>
      <Services/>
    </div>
  );
};

export default Home;
