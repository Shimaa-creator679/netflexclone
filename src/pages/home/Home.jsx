import React from "react";
import Navbar from "../../components/navbar/Navbar";
import hero from "/hero_banner.jpg";
import herotitle from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";
import "./Home.css";
import Titlecard from "../../components/Titlecard/Titlecard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero} className="banner-image"></img>
        <div className="hero-caption">
          <img src={herotitle} className="caption-img"></img>

          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            qui sit ex.
          </h2>

          <div className="btns">
            <button className="btn">
              <img src={playicon}></img>play
            </button>
            <button className="btn btn-dark">
              <img src={infoicon}></img>more info
            </button>
          </div>

         
        </div>
      </div>
      <div className="morecards">
      <Titlecard title="popular on netflex " />
      <Titlecard title="bio movies" category={"top_rated"}  />
      <Titlecard title="only on netflecx" category={"popular"} />
      <Titlecard title="upcoming" category={"upcoming"}/>
      <Titlecard title="top pics for you" category={"now_playing"}/>
      </div>
<Footer/>
    </div>
  );
};

export default Home;
