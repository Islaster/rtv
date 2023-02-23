import "./henry.css";

export default function Henry() {
  return (
    <section className="henry">
      <div className="container">
        <div className="row henRow">
          <div className="col-md-3">
            <img
              src="/rtvImages/asset37.jpeg"
              alt=""
              className="tealBorder movingImg henImg"
            />
          </div>
          <div className="col-md-9">
            <h4 className="henH4">
              Harry is one of our former re-entry clients!
              <br />
              <br />
              With the support of the RTV program, he was able to get a job at
              the
              <span className="darkPurpleText">local Garden Supermarket</span>
              and continues to pursue his passion of
              <span className="darkPurpleText">mentoring</span> and{" "}
              <span className="darkPurpleText">training</span> youth in
              basketball.
              <br />
              <br />
              <a
                href="https://www.nbcbayarea.com/news/local/former-prison-inmate-gets-a-shot-with-warriors-farm-team/205265/"
                target="_blank"
                rel="noopener noreferrer"
                className="henA"
              >
                NBC Bay Area article on Harry's Story
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
