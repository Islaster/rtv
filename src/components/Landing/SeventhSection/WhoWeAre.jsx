import "./styles.css";

export default function WhoWeAre() {
  return (
    <section className="whoweare">
      <div className="container">
        <h1 className="text-center">Our Client Testimonials</h1>
        <p className="purpleline"></p>
        {/*Row Start*/}
        <div className="row" id="WWArow">
          {/*Col Start*/}
          <div className="movingImg col-md-6" id="COL">
            <div className="col-md-12 tealBorder whiteBackground WWAcol">
              <p className="testPara">
                “Thank you for housing me, I aged out of my drug program and I
                did not want to live in the streets. Thank you Retraining the
                Village for sheltering me while I was working on getting
                permanent housing.”
              </p>
              <img
                src="/rtvImages/asset36.jpeg"
                alt="couple"
                className="sevTestPic"
              />
              <p className="clientName">
                <b style={{ fontWeight: "bolder" }}>Ricki</b>
              </p>
            </div>
          </div>
          {/*Col End*/}
          {/*Col Start*/}
          <div className="movingImg col-md-6" id="COL">
            <div className="col-md-12 whiteBackground WWAcol purpleBorder">
              <p className="testPara">
                “On 09/27/2019 I got to meet the Santa Cruz Warriors Head Coach,
                Aaron Miles, and sit and talk with him. Thank you, Retraining
                the Village, especially Halley Crumb, for this God sent
                opportunity to speak with Coach Miles, meet E-40, and get a job
                at the local Garden Supermarket.”
                <br />
                <br />
                <a
                  href="https://www.nbcbayarea.com/news/local/former-prison-inmate-gets-a-shot-with-warriors-farm-team/205265/"
                  className="darkBlueText"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#376fd8" }}
                >
                  Harry's Story
                </a>
              </p>
              <img
                src="/rtvImages/asset37.jpeg"
                alt="ballPlayer"
                className="sevTestPic"
              />
              <p className="clientName">
                <b style={{ fontWeight: "bolder" }}>Harry</b>
              </p>
            </div>
          </div>
          {/*Col End */}
        </div>
        {/*Row End */}
        {/*Row Start */}
        <div className="row" id="WWArow">
          {/*Col Start */}
          <div className="movingImg col-md-6" id="COL">
            <div className="col-md-12 lightPurpleBorder WWAcol whiteBackground">
              <p className="testPara">
                “Thank you Halley for coming to get me out of a garage before
                the home was foreclosed on, without you I would not have my own
                place. I had been living in a shared environment for over 20
                years, did not have my full benefits from the Department of
                Veterans Affairs, and now retire with full benefits.
                <br />
                <br />
                You changed my life and now I am in North Carolina for the first
                time in 40 years. When my father died you was there, it was nice
                to come back for the 4th of July after 4 years of living
                independent in my very first apartment. Thank you Retraining the
                Village!”
              </p>
              <img
                src="/rtvImages/asset38.jpeg"
                alt="sitting in chair"
                className="sevTestPic"
              />
              <p className="clientName">
                <b style={{ fontWeight: "bolder" }}>Richard, Veteran</b>
              </p>
            </div>
          </div>
          {/*Col End */}
          {/*Col Start */}
          <div className="movingImg col-md-6" id="COL">
            <div className="col-md-12 tealBorder whiteBackground WWAcol">
              <p className="testPara">
                “I was incarcerated in 2018 and released October 2020. With
                prayer, faith, and just trying to do everything I can to better
                myself and please God and not man, Retraining the Village with
                Halley Crumb 100% came through for me. RTV got me to one of
                their homes in East Palo Alto and the rooms were furnished.
                Everything was supplied for us: food, clothes, you name it.
                <br />
                <br />I got employed immediately, less than a month after I was
                released from prison. I was going to Church every Sunday. A
                little after six months later, I was eligible for probation
                release! I just wanted to share that with you all because what
                Halley Crumb is doing here with Retraining the Village is
                nothing short of complete blessings.”
              </p>
              <video
                src="https://retrainingthevillage.org/images/Salo_testimonial.mp4"
                controls
                className="testVid"
              />
              <p className="clientName">
                <b style={{ fontWeight: "bolder" }}>Salo</b>
              </p>
            </div>
          </div>
        </div>
        {/*Row End */}
      </div>
    </section>
  );
}
