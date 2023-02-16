import "./WhiteHeader.css";

export default function WhiteHeader() {
  return (
    <section className="whSec" style={{ backgroundColor: "#fff" }}>
      <div className="container text-center">
        <h3>Trusted by the biggest brands</h3>
        <p className="purpleline"></p>
        <br />
      </div>
      <div className="container text-center">
        <h3>Platinum Donors</h3>
      </div>
      <div className="partnerRow">
        <img
          className="movingImg partnersImg"
          src="/rtvImages/asset11.jpeg"
          alt="lockhead martin"
        />
        <br />
        <br />
      </div>
      <div className="container text-center">
        <h3>partners</h3>
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset12.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset13.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset14.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset15.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset16.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset17.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset18.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset19.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset20.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset21.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset22.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset23.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset24.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset25.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset26.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset27.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset28.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset29.png"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset30.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset31.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <div className="partnerRow">
        <img
          src="/rtvImages/asset32.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset33.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
        <img
          src="/rtvImages/asset34.jpeg"
          alt="housing logo"
          className="movingImg partnersImg"
        />
      </div>
      <br />
      <div className="container">
        {/*row start*/}
        <div className="row testRow">
          <div className="col-md-12">
            <div
              className="col-md-12 tealLineLeftThick testCol"
              style={{ textAlign: "left" }}
            >
              <p className="testP">
                “We are thrilled to be a part of this innovative opportunity to
                transform the lives of individuals returning from Bay Area
                prisons and county jails (AB 109). This letter demonstrates my
                full support of the RTV Reentry Program and commitment to
                continue supporting the achievement of the proposed outcomes.”
              </p>
              <img
                src="/rtvImages/asset35.png"
                alt="Job train logo"
                className="testPic"
              />
              <p className="clientName">
                <b>Art Taylor</b>
                <br />
                <span className="testSpan">Chief Program Officer</span>
              </p>
            </div>
          </div>
        </div>
        {/*end row*/}
        {/*start row*/}
        <div className="row testRow">
          <div className="col-md-12">
            <div
              className="col-md-12 purpleLineLeftThick testCol"
              style={{ textAlign: "left" }}
            >
              <p className="testP">
                “I am truly inspired by the work you have done and your vision
                for the future of your program. I know that you will have a
                lasting impact on our community!”
              </p>
              <img
                src="/rtvImages/asset28.png"
                alt="VRC Logo"
                className="testPic"
              />
              <p className="clientName">
                <b>Jacob Kemnec</b>
                <br className="b" />
                <span className="testSpan">
                  Site Director, VRC - Menlo Park, CA
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
  );
}
