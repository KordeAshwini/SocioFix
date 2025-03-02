import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Popup2 from "./components/Popup/popup2";
import Testimonials from "./pages/Testimonials";
import Service1 from "./pages/Service1";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [signInPopup, setSignInPopup] = React.useState(false);
  const [signUpPopup, setSignUpPopup] = React.useState(false);

  const handleSignInPopup = () => {
    setSignInPopup(!signInPopup);
  };
  const handleSignUpPopup = () => {
    setSignUpPopup(!signUpPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* Always render the Navbar */}
        <Navbar handleSignInPopup={handleSignInPopup} />

        {/* Define Routes for pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero handleSignInPopup={handleSignInPopup}/>
                <Banner />
                <Subscribe   />
                <Testimonials  />
                <Footer  />

                <Popup signInPopup={signInPopup} setSignInPopup={setSignInPopup}  setSignUpPopup={setSignUpPopup} />
                <Popup2 signUpPopup={signUpPopup} setSignUpPopup={setSignUpPopup} handleSignInPopup={setSignInPopup} />
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer /> {/* Include the Footer on About Page */}
                <Popup signInPopup={signInPopup} setSignInPopup={setSignInPopup}  setSignUpPopup={setSignUpPopup} />
                <Popup2 signUpPopup={signUpPopup} setSignUpPopup={setSignUpPopup} handleSignInPopup={setSignInPopup} />
              </>
            }
          />
          
          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer /> {/* Include the Footer on Contact Page */}
                <Popup signInPopup={signInPopup} setSignInPopup={setSignInPopup}  setSignUpPopup={setSignUpPopup} />
                <Popup2 signUpPopup={signUpPopup} setSignUpPopup={setSignUpPopup} handleSignInPopup={setSignInPopup} />
              </>
            }
          />

          {/* Testimonials Page */}
          <Route
            path="/testimonials"
            element={
              <>
                <Testimonials />
                <Footer  /> {/* Include the Footer on Testimonials Page */}
                <Popup signInPopup={signInPopup} setSignInPopup={setSignInPopup}  setSignUpPopup={setSignUpPopup} />
                <Popup2 signUpPopup={signUpPopup} setSignUpPopup={setSignUpPopup} handleSignInPopup={setSignInPopup} />
              </>
            }
          />

          {/*Service page*/}
          <Route
            path="/service1"
            element={
              <>
                <Service1 />
                <Footer  /> {/* Include the Footer on Testimonials Page */}
                <Popup signInPopup={signInPopup} setSignInPopup={setSignInPopup}  setSignUpPopup={setSignUpPopup} />
                <Popup2 signUpPopup={signUpPopup} setSignUpPopup={setSignUpPopup} handleSignInPopup={setSignInPopup} />
              </>
            }
          />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

