import "./intro.css";
import Me from "../intro/img/introimage.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Kai Warren</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Full Stack Web Developer </div>
              <div className="i-title-item">SASS Account Management </div>
              <div className="i-title-item">Email Specialist </div>
            </div>
          </div>
          <p className="i-description">
          I specialize in creating modern websites, web services, and online stores. I have a passion for empowering entrepreneurs 
          by developing a website that'll enable them to be there own boss. With my extensive background in sales and experience developing full-stack web applications,
          i'll be able to understand your vision and needs from a creative design and business revenue perspective. 
          </p>
        </div>
      </div>
      <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />  
      </div>
    </div>
  );
};

export default Intro;
