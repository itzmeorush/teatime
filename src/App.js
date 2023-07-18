import "./styles/App.scss";
import "./styles/Intro.scss";
import "./styles/Section.scss";
import "./styles/footer.scss";
import "./styles/Misc.scss";
import "./styles/MediaQuery.scss";
import data from "./data/data.json";
import Intro from "./components/Intro";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Misc from "./components/Misc";
import FreshtopicImg from "./assets/academy.png";
import Freshtopic2Img from "./assets/story.png";
import tedtalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiwalaImg from "./assets/image3.png";
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = " #6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala
  } = data;

  const dotCursor = (e) =>{
    const cursor = document.querySelector('.cursor');
    cursor.style.top=`${e.pageY-14}px`;
    cursor.style.left=`${e.pageX-14}px`;

    const element = e.target;

    if(element.getAttribute('data-cursorpointer')){
      cursor.classList.add('cursorHover');
    }else if(element.getAttribute('data-cursorpointermini')){
      cursor.classList.add('cursorHoverMini');

    }
    else{
      cursor.classList.remove('cursorHover');
      cursor.classList.remove('cursorHoverMini');


    }

  }

  useEffect(()=>{
    window.addEventListener('mousemove',dotCursor);
    return () =>{
      window.removeEventListener('mousemove',dotCursor);
    }
  },[])

  return (
    <>
      <Intro />

      {/* Freshtopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={FreshtopicImg}
        imgSize="60%"
        bgColor={pink}
        headColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* Freshtopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic.btn}
        imgSrc={Freshtopic2Img}
        imgSize="30%"
        bgColor={pink}
        headColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* tedtalks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedtalksImg}
        imgSize="50%"
        bgColor={yellow}
        headColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        imgSize="60%"
        bgColor={white}
        headColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        btnTxt={map.btn}
        imgSrc={mapImg}
        imgSize="60%"
        bgColor={pink}
        headColor={yellow}
        textColor={yellow}
         hasBtn={false}  
        
      />
      {/* courecourses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize="30%"
        bgColor={yellow}
        headColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
        
      />
      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        imgSize="70%"
        bgColor={white}
        headColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
        
      />
      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        imgSize="40%"
        bgColor={pink}
        headColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
        
      />
      {/* barat */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        imgSize="50%"
        bgColor={white}
        headColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
        
      />

      <Footer/>
      <Misc/>
    </>
  );
}

export default App;
