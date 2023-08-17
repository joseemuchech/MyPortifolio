import "./about.css";
import me from "../../img/me.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="../../img/mee.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will make me the best for the job.
        </p>
        <p className="a-desc">
        I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. well versed in technology and writing code to create system that are reliable and user friendly.
        In my five years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer lead for three projects with First Technology
        Thus, I understand that a major part of this role with your firm focuses on leading mobile development teams, which my previous experience has certainly prepared me for.

        </p>
        <div className="a-award">
          <img src={me} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">My Curriculum Vitae</h4>
            <p className="a-award-desc">
              <a href="/" target="" rel="noopener noreferrer">
               <button> Download </button>
               </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
