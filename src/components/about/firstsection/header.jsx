import "./header.css";

export default function Header() {
  return (
    <section className="HeaderSection">
      <div className="container abHeader">
        <div className="row abHRow">
          <div className="col-md-8">
            <p className="abHP">About Us</p>
            <h5 className="abHH5">
              We are a supportive housing service in the Bay Area based on the
              premise that people are empowered through the efforts of the
              village.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
