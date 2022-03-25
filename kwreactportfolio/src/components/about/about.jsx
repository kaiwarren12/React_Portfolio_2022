import "./about.css"
import tech from "./img/tech.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left"></div>
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={tech} alt="" className="a-img"/>
            </div>
            <div className="a-right"></div>
        </div>

    )
}

export default About 