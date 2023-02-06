import "./Home.css";
import { Link } from "react-router-dom";
import SimplyCarousel from "./SimplyCarousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="mainHome">
      <section className="welcome">
        <div className="titleWrapper">
          <strong>
            <h1>
              Welcome to Friend Ferry, where companionship and social
              connections are just a click away. Our selection of local
              companions are perfect for walks, dates, and social events. Join
              us and make lasting memories today.
            </h1>
          </strong>
          <Link to="./signup">
            <button className="button">Join Now</button>
          </Link>
        </div>
      </section>

      {/* search bar */}
      <section className="compan">
        <SimplyCarousel />
        {/* <PictureSlider />; */}
      </section>
      <Footer />
    </main>
  );
};

export default Home;

// 1. Find package and install it
// 2. Create a new component for carousel
// 3. Figure out how to use based on documentation
// 4. Import into Home.js and use in jsx
