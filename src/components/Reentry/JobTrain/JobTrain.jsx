import "./job.css";

export default function JobTrain() {
  document.title = "Re-Entry";
  return (
    <section>
      <div className="container">
        <div className="row jobRow">
          <div className="col-md-12">
            <div className="col-md-12 tealLineLeftThick jobCol">
              <p className="jobP">
                “We are thrilled to be a part of this innovative opportunity to
                transform the lives of individuals returning from Bay Area
                prisons and county jails (AB 109). This letter demonstrates my
                full support of the RTV Reentry Program and commitment to
                continue supporting the achievement of the proposed outcomes.”
              </p>
              <img src="/rtvImages/asset60.png" alt="" className="jobImg" />
              <p className="clientName">
                <b>Art Taylor</b>
                <br style={{ margin: 0, padding: 0 }} />
                <span className="jobP">Chief Program Officer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
