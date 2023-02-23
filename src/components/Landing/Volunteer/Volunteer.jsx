import "./vol.css";

export default function Volunteer() {
  return (
    <section className="volunteer">
      <div className="container text-center">
        <h3>Get Involved</h3>
        <h1>Be a Volunteer!</h1>
        <br />
        {/*Row Start */}
        <div className="row">
          {/*Col Start */}
          <div className="col-md-6">
            <div className="iframe-container">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d810614.9085363843!2d-122.149613!3d37.473364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc9fc8298749%3A0x6d9926bc340f6422!2s2399%20Menalto%20Ave%2C%20East%20Palo%20Alto%2C%20CA%2094303!5e0!3m2!1sen!2sus!4v1674778968955!5m2!1sen!2sus"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/*Col End */}
          {/*Col Start */}
          <div className="col-md-6">
            <form className="volForm">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
                required
              />
              <textarea
                placeholder="Message"
                className="form-control"
                required
              />
              <button
                className="btn "
                style={{ backgroundColor: "#5b67da", color: "#fff" }}
              >
                Send!
              </button>
            </form>
          </div>
        </div>
        {/*Row End */}
        {/*Row Start*/}
        <div className="row volInfo">
          {/*Col Start*/}
          <div className="col-md-4">
            <a
              href="https://goo.gl/maps/uarWfyMdnxRY7KRz8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/rtvImages/asset39.jpg" alt="" className="volpic" />
            </a>
            <p className="about-title">
              <b>Visit Us</b>
            </p>
            <p className="pinfo">
              <a
                href="https://goo.gl/maps/uarWfyMdnxRY7KRz8"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#376fd8" }}
              >
                <b>2399 Menalto Avenue, East Palo Alto, CA 94303</b>
              </a>
            </p>
            <p className="purpleline"></p>
          </div>
          {/*Col End*/}
          {/*Col Start */}
          <div className="col-md-4">
            <img src="/rtvImages/asset40.jpg" alt="email" className="volpic" />
            <p className="about-title">
              <b>Call Us</b>
            </p>
            <p className="pinfo">
              <b>650-461-0433</b>
            </p>
            <p className="purpleline"></p>
          </div>
          {/*Col End*/}
          {/*Col Start*/}
          <div className="col-md-4">
            <a
              href="mailto:halleycrumb@retrainingthevillage.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/rtvImages/asset41.jpg"
                alt="phone"
                className="volpic"
              />
            </a>
            <p className="about-title">
              <b>Email Us</b>
            </p>
            <p className="pinfo">
              <a
                href="mailto:halleycrumb@retrainingthevillage.org"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#376fd8" }}
              >
                <b>halleycrumb@retrainingthevillage.org</b>
              </a>
            </p>
            <p className="purpleline"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
