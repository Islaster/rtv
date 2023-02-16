import "./nav.css";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="navbar"
      >
        <div className="container">
          {/*RTV Logo*/}
          <a className="navbar-brand mr-4" href="/">
            <img
              src="/rtvLogoCircle.png"
              alt="nav logo"
              style={{ height: "70px" }}
            />
          </a>
          {/*Navbar toggler button*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <div className="navbar-nav mr-auto"></div>

            {/*right side*/}
            <div className="navbar-nav right">
              <li className="nav-item show">
                <a
                  className="nav-link"
                  id="nav-hover"
                  href="/"
                  style={{ fontWeight: "bold" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown show">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="nav-hover"
                  style={{ fontWeight: "bold" }}
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/about-us">
                      About RTV
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/transitionalHousing">
                      Transitional Housing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/reentry">
                      Re-entry
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/gallery">
                      Image Gallery
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item show">
                <a
                  className="nav-link"
                  href="/our-team"
                  id="nav-hover"
                  style={{ fontWeight: "bold" }}
                >
                  Our Team
                </a>
              </li>
              <li className="nav-item show">
                <a
                  className="nav-link"
                  href="https://computerlit.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  id="nav-hover"
                  style={{ fontWeight: "bold" }}
                >
                  Computer Courses
                </a>
              </li>
              <li className="nav-item show">
                <a
                  className="nav-link"
                  id="nav-hover"
                  href="https://www.backtobasicsrecovery.org/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "bold" }}
                >
                  Back to Basics
                </a>
              </li>
              <li className="nav-item show" style={{ fontWeight: "bold" }}>
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
