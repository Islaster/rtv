export default function Footer() {
  return (
    <section style={{ backgroundColor: "#347271", paddingTop: "50px" }}>
      <div
        style={{
          marginLeft: "189.6px",
          marginRight: "189.6px",
          paddingRight: "15px",
          paddingLeft: "15px",
          textAlign: "left",
          color: "#fff",
        }}
      >
        <img
          src="/rtvLogoCircle.png"
          alt="rtv logo"
          style={{
            width: "150px",
            marginBottom: "15px",
            borderStyle: "none",
          }}
        />
        {/*Row Start*/}
        <div
          style={{ display: "flex", flexWrap: "wrap", paddingBottom: "45px" }}
        >
          {/*Col Start*/}
          <div style={{ paddingRight: "15px", paddingLeft: "15px" }}>
            <h4
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                fontWeight: 500,
                lineHeight: 1.2,
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <b style={{ fontWeight: "bolder" }}>Retraining the Village</b>
            </h4>
            <br />
            <h5 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              About Us
            </h5>
            <p
              style={{
                fontSize: "15px",
                marginBottom: "1rem",
                lineHeight: 1.5,
                width: "350px",
              }}
            >
              We serve as the bridge between homelessness and permanent housing
              the Bay Area
            </p>
            <p style={{ fontSize: "15px", color: "#e6e8ff", width: "350px" }}>
              <b>RTV earned a 2021 GuideStar Gold Seal of Transparency!</b>
              <br />
              <br />
              <img
                src="/rtvImages/asset43.jpg"
                alt="gold star"
                style={{
                  width: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
            </p>
          </div>
          {/*Col End*/}
          {/*Col Start*/}
          <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <b>
              {/*Addresses*/}
              <div style={{ width: "357.188px", marginBottom: "30px" }}>
                <p style={{ marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1rem", color: "#e6e8ff" }}>
                    Re-entry (Main):{" "}
                  </span>
                  <a
                    href="https://goo.gl/maps/uarWfyMdnxRY7KRz8"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    2399 Menalto Avenue, East Palo Alto, CA 94303
                  </a>
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <span style={{ color: "#e6e8ff" }}>Re-entry (EPA): </span>
                  <a
                    href="https://goo.gl/maps/WK6DFnzzgNrs1Lgs6"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    2219 Menalto Avenue, East Palo Alto, CA 94303
                  </a>
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <span style={{ color: "#e6e8ff" }}>
                    Interim Housing (Madera):{" "}
                  </span>
                  <a
                    href="https://goo.gl/maps/3Y2y3RuJ9nLeZJhPA"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    16236 North Lake Street, Madera, CA 93638
                  </a>
                </p>
              </div>
              {/*Numbers*/}
              <div style={{ marginBottom: "15px" }}>
                <img
                  src="/rtvImages/callUsPurple.svg"
                  alt="phone logo"
                  style={{
                    width: "30px",
                    marginRight: "15px",
                    marginBottom: "10px",
                  }}
                />
                <span style={{ fontSize: "15px", marginBottom: "15px" }}>
                  <br />
                  650-461-0433 (Main)
                  <br />
                  650-800-7379 (EPA)
                  <br />
                  1-559-691-4488 (Madera)
                </span>
              </div>
              {/*email*/}
              <div style={{ marginBottom: "15px" }}>
                <a
                  href="mailto:halleycrumb@retrainingthevillage.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/rtvImages/emailUsPurple.svg"
                    alt="Email icon"
                    style={{
                      width: "30px",
                      marginRight: "15px",
                      marginBottom: 0,
                    }}
                  />
                </a>
                <a
                  href="mailto:halleycrumb@retrainingthevillage.org"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {" "}
                  halleycrumb
                  <wbr />
                  @retrainingthevillage.org{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/retrainingthevillage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/rtvImages/facebookPurple.svg"
                    alt="fb icon"
                    style={{
                      width: "30px",
                      marginRight: "15px",
                      marginBottom: 0,
                    }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/retrainingthevillage/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Our Facebook
                </a>
              </div>
            </b>
          </div>
        </div>
        {/*Row End*/}
      </div>
    </section>
  );
}
