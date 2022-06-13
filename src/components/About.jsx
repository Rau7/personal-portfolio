import "../css/about.css";
import about_pic from "../images/martin-tupy.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <img src={about_pic} alt="Alp Toker" width={400} height={700} />
          </div>
          <div className="col-md-6">
            <div className="about-writing">
              <div className="about-section-header">About Me</div>
              Hello, my name is <span className="red-text">Alp</span>. I have
              been working as a{" "}
              <span className="red-text">Full-Stack Developer</span> for about 3
              years. I like to learn new things and now I am trying to improve
              myself in the <span className="red-text">Front-End</span> field.{" "}
              <div className="break-div"></div>
              Apart from technology, I think I would like to learn to play the
              guitar the most. After learning it, the first song I will probably
              play will be from <span className="red-text">Opeth</span>! 🎸{" "}
              <div className="break-div"></div>
              In the past, when it comes to games, I used to only play{" "}
              <span className="red-text">DOTA 2</span>. Now I'm playing{" "}
              <span className="red-text">Battlefield 1</span> with my friends.
              🎮 <div className="break-div"></div>I like watching TV series and
              movies. <span className="red-text">Nordic Noir</span> series have
              always fascinated me. 🍿
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
