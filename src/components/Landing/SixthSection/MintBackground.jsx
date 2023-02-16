import "./donate.css";

export default function Donate() {
  return (
    <section className="donate" style={{ backgroundColor: "#e6fcf8" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h4 style={{ textAlign: "center" }}>
          Your contributions make an immediate impact on the families we serve!
        </h4>
        <br />
        <img
          src="/rtvImages/donateButton_purple.jpg"
          alt="donatePurple"
          className="donateImg"
        />
      </div>
    </section>
  );
}
