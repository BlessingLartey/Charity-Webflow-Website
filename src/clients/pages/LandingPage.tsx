import AboutUsMain from "../components/AboutUs/AboutUsMain";
import BannerContent from "../components/Banner/BannerContent";
import Causes from "../components/Causes/Causes";
import Events from "../components/Events/Events";
import HowWeHelp from "../components/HowWeHelp/HowWeHelp";
import Projects from "../components/Project/Projects";
// import Projects from "../clients/components/Project/Projects";


function LandingPage() {
  return (
    <>
      <BannerContent />
      <AboutUsMain />
      <Causes />
      <HowWeHelp />
      <div>
        <div>
          <p>What We Do</p>
          <h3>We do it for people in need</h3>
        </div>

        <div>
          <div>
            <span>icon</span>
            <h4>Medical Help</h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
          <div>
            <span>icon</span>
            <h4>Water Delivery</h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
          <div>
            <span>icon</span>
            <h4>We Care About </h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
          <div>
            <span>icon</span>
            <h4>Food Delivery</h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
          <div>
            <span>icon</span>
            <h4>Spread The Word</h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
          <div>
            <span>icon</span>
            <h4>Learn Education</h4>
            <p>
              Centuries but also the leap into electronic typesetting, remaining
              specimen book.
            </p>
          </div>
        </div>
      </div>
      <Projects />

      <div style={{ height: 700 }}>
        <span>
          <h2>Testimonial</h2>
          <h1>What People Say About Us</h1>
        </span>
        <div>
          <div>card 1</div>
          <div>card 2</div>
        </div>
        <hr />
        <div>
          <h1>Clients</h1>
        </div>
        <hr />
      </div>

      <div style={{ height: 500, backgroundColor: "gray" }}>
        <h1>Team</h1>
        <h1>Meet Our team</h1>
      </div>

      <Events />

      <div className="aUM">
        <div className="aUMbox1">1</div>
        <div className="aUMbox2">2</div>
      </div>
    </>
  );
}

export default LandingPage;
