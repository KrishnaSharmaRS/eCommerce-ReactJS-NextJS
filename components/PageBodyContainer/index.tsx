import React, { ReactNode } from "react";

import Sidenav from "./components/Sidenav";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

const PageBodyContainer = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div id="loader-container" className="loader-hide">
                <div className="loader-image" />
            </div>
            <div id="app-root" className="app-root">
                <div className="QSWpx" data-reactroot>
                    <div id="header_border" className="_3OcXT">
                        <div className="_1wYz0" style={{ color: "inherit" }} />
                    </div>
                    <div className="_3RKHL" style={{ color: "inherit" }}>
                        <div className="jCSXh">
                            <Header />
                            <Sidenav />
                            {children}
                        </div>
                    </div>
                    <Footer />
                    <div className="_1XTvr">
                        <div className="_2jsqo">
                            <p className="TndtH">
                                We use cookies to enhance your browsing experience and to allow us to improve our website usefulness. By continuing, we assume you accept such use. Learn more about
                                cookies and how to change your consent by visiting our <span>privacy policy.</span>
                            </p>
                        </div>
                        <button className="_1FEMw _1F0ow _2zsvO bp2Y3 _2ZSVP">
                            <span className="CPL8O">
                                <span className="_2DBxJ">OK</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="legacy-browsers">
                <p className="legacy-browsers__title">
                    Unfortunately, the browser you use is outdated and does not allow you to display the site correctly. Please install any of the modern browsers, for example:
                </p>
                <a className="legacy-browsers__link" href="https://www.google.com/chrome/browser/desktop/">
                    Google Chrome
                </a>
                <a className="legacy-browsers__link" href="https://www.mozilla.org/en/firefox/new/">
                    Firefox
                </a>
                <a className="legacy-browsers__link" href="http://www.opera.com/en">
                    Opera
                </a>
            </div>
        </>
    );
};

export default PageBodyContainer;