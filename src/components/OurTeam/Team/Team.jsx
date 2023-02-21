import "./team.css";

export default function Team() {
  return (
    <section className="team">
      <div className="container" style={{ textAlign: "left" }}>
        <div className="row teamRow">
          <div className="col-md-6">
            <div className="col-md-12 purpleBorder colTeam">
              <img
                src="/rtvImages/asset52.jpg"
                alt=""
                className="purpleSurroundingCircle"
                id="imgTeam"
              />
              <p>
                <span className="blue-text teamName">Halley Crumb</span>
                <br />
                <span className="tealTextBright">
                  <b>Founder and CEO</b>
                </span>
              </p>
              <p>
                Longtime resident of East Palo Alto and San Mateo, Halley
                founded RTV in 2014 after retiring from the Department of
                Veterans Affairs.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 tealBorder colTeam">
              <img
                src="/rtvImages/asset53.png"
                alt=""
                className="tealSurroundingCircle"
                id="imgTeam"
              />
              <p>
                <span className="tealTextBright teamName">Emma Bigge</span>
                <br />
                <span className="blue-text">
                  <b>Treasurer</b>
                </span>
              </p>
              <p>
                Emma is the VP of Community Lending and Diverse Markets at Bank
                of the West Northern CA.
              </p>
            </div>
          </div>
        </div>
        <div className="row teamRow">
          <div className="col-md-6">
            <div className="col-md-12 tealBorder colTeam">
              <img
                src="/rtvImages/asset54.png"
                alt=""
                className="tealSurroundCirce"
                id="imgTeam"
              />
              <p>
                <span className="tealTextBright teamName">Theresa Johnson</span>
                <br />
                <span className="blue-text">
                  <b>Secretary</b>
                </span>
              </p>
              <p>
                Theresa is a CCAPP drug counselor and a Mental Health Specialist
                who has over 20 years of experience in counseling.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 purpleBorder colTeam">
              <img
                src="/rtvImages/asset55.jpeg"
                alt=""
                className="purpleSurroundCircle"
                id="imgTeam"
              />
              <p>
                <span className="blue-text teamName">Audrey Ha</span>
                <br />
                <span className="tealTextBright">
                  <b>Head of Tech, Lead Web Developer</b>
                </span>
              </p>
              <p>
                Audrey is a Computer Science student at the Massachussetts
                Institute of Technology (Class of 2026). She's an avid web and
                app developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
