import "./WWD.css";

export default function WhatWeDo() {
  return (
    <section className="services">
      <div className="container text-center">
        <h1 className="h1Services">What We Do</h1>
        <div className="purpleline"></div>
        <br />
        <div className="row serviceRow" id="center">
          <div className="col-md-3 movingImg" id="serviceCard">
            <img
              src="/rtvSvgs/asset1.svg"
              alt="carton doctors"
              className="service-img"
            />
            <h4 className="blue-text h4Card">Healthy Living</h4>
            <p className="p-card">Providing a clean, stable living space</p>
          </div>
          <div className="col-md-3 movingImg" id="serviceCard">
            <img src="/rtvSvgs/asset2.svg" className="service-img" alt="" />
            <h4 className="h4Card blue-text">Housing</h4>
            <p className="p-card">
              Retraining the Village is a transitional housing program for
              veterans and men
            </p>
          </div>
          <div className="col-md-3 movingImg" id="serviceCard">
            <img src="/rtvSvgs/asset3.svg" className="service-img" alt="" />
            <h4 className="h4Card blue-text">Mental & Behavioral Health</h4>
            <p className="p-card">
              Providing support to Help Our Men Excel (H.O.M.E.)
            </p>
          </div>
          <div className="col-md-3 movingImg" id="serviceCard">
            <img src="/rtvSvgs/asset4.svg" alt="" className="service-img" />
            <h4 className="h4Card blue-text">Job Training</h4>
            <p className="p-card">
              Support for career certification, increased income, and
              independence. Referrals to our local JobTrain and NOVA Job Center
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <br />
              <a href="/newsletter" target="_blank" rel="noopener noreferrer">
                <button
                  className="btn btn-lg "
                  style={{ backgroundColor: "#5b67da", color: "#fff" }}
                >
                  Read Our Aug 23rd, 2022 newsletter on RTV's grand re-opening!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
