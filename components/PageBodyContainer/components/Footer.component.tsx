import React, { useCallback, useEffect, useState } from "react";

const Footer = () => {
  const [mobileView, setMobileView] = useState(false);

  const updateMobileView = useCallback(() => {
    if (mobileView && document.body.offsetWidth > 1023) setMobileView(false);
    else if (!mobileView && document.body.offsetWidth <= 1023) setMobileView(true);
  }, [mobileView]);

  useEffect(() => {
    window.addEventListener("resize", updateMobileView);

    return () => window.removeEventListener("resize", updateMobileView);
  }, [updateMobileView]);

  useEffect(() => setMobileView(document.body.offsetWidth > 1023), []);

  return (
    <div className="_3MZwm" style={{ color: "inherit", paddingBottom: mobileView ? "95px" : "110px" }}>
      <footer className="_39VI9">
        <div className="_1-dbD" style={{ paddingBottom: 0 }}>
          <div className="_2ezKP" style={{ textAlign: "center", width: "100%" }}>
            <h2>
              <pre className="ks6Od">Developed by: Krishna Sharma | Full Stack Developer | GitHub Username: KrishnaSharmaRS</pre>
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
