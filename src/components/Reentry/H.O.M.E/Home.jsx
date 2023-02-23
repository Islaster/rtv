import "./home.css";

export default function Home() {
  return (
    <section>
      <div className="container" id="hoCont">
        <div className="row hoRow">
          <div className="col-md-6 darkPurpleBackground">
            <h3 className="hoH3">
              <span className="hoSpan lightPurpleText">
                Our H.O.M.E. Program
              </span>
              <br /> (Helping Our Men Excel) utilizes the <br /> 4 "Roots" of
              our life: School, Work, Home, and Church.
              <br />
            </h3>
            <img src="/rtvImages/asset59.jpg" alt="" className="hoImg" />
          </div>
          <div className="col-md-6 lightPurpleBackground hoCol">
            <p className="hoP purpleLineLeftThick">
              The H.O.M.E. program receives referrals from probation officers,
              treatment facilities, the Department of Corrections, San Mateo
              County of Health, and word of mouth.
              <br />
            </p>
            <h4>The recovery action plan includes:</h4>
            <br />
            <p>
              1. A financial management course
              <br />
            </p>
            <p>
              2. Faith-based community meetings and in-house small group
              <br />
            </p>
            <p>
              3. Finding a primary medical care provider and completing a
              Medicaid application
              <br />
            </p>
            <p>
              4. Substance use disorder treatment and long-term recovery
              supports
              <br />
            </p>
            <p>
              5. Mentorship with members of the community who have recovered
              from substance use
              <br />
            </p>
            <p>
              6. Communication with probation officers, bi-monthly meetings with
              probation officers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
