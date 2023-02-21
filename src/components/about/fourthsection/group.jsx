import "./group.css";

export default function Group() {
  return (
    <section className="grosec">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              src="/rtvImages/asset51.png"
              className="groImg purpleBorder movingImg"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <h3 className="groh3">
              Retraining the Village began in the heart of its Founder, Halley
              Irene Crumb, in 2014
            </h3>
            <br />
            <p style={{ textAlign: "left" }}>
              As a Medical Technologist for the Department of Veterans Affairs,
              Halley had the opportunity to work closely with homeless veterans
              for over 10 years. During her time at the VA, she recognized that
              many of the veterans whom she was serving were not only facing
              dual-diagnosis, but also homelessness. Halley noticed that their
              will to live and desire for a better lifestyle had gone to the
              wayside.
              <br />
              <br />
              This attitude was similar to the one that she had witnessed among
              homeless individuals in her own community. Halley founded
              Retraining the Village in 2014 to serve as the bridge between
              homelessness and permanent housing for veterans, the homeless,
              formerly incarcerated individuals, and their families. The
              organization{" "}
              <span className="blue-text">
                transitional housing, career training, and mental & behavioral
                health support
              </span>{" "}
              for people in the community, guiding individuals to reach
              milestones and thrive.
              <br />
              <br />
              Halley believes that helping all homeless individuals should begin
              with genuine concern and a kind gesture. The organization is
              centered around rekindling the feeling of{" "}
              <span className="blue-text">hoping for the best,</span>
              and inviting
              <span className="blue-text">hope for a brighter future.</span>
              Through Retraining the Village's actions of caring and support,
              seeds of hope were emerging in the community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
