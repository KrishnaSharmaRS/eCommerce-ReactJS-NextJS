import SearchIcon from "../../../SearchIcon";
import HideSidenavButton from "./HideSidenavButton.component";

const SearchForm = () => (
  <form id="searchInput" className="lMsyv _2cJPm">
    <div className="_17c4H">
      {document.body.offsetWidth < 1024 ? <HideSidenavButton /> : null}
      <input type="search" autoComplete="off" placeholder="Search" className="OuPeI" />
      <button className={`_12W9d${document.body.offsetWidth > 1023 ? " _2itao" : ""}`}>
        <SearchIcon />
      </button>
      <button type="reset" className="_3iG0t">
        <svg width={7} height={5} viewBox="0 0 7 5" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#FFF" fill="none" fillRule="evenodd" strokeLinecap="square">
            <path d="M1.2.2l4.6 4.6" />
            <path d="M5.8.2L1.2 4.8" />
          </g>
        </svg>
      </button>
    </div>
    {document.body.offsetWidth > 1023 ? (
      <div className="CZCSk _1a3vA">
        <div className="_1kxI9" aria-disabled="false" style={{ position: "relative" }}>
          <div className="_KEde">
            <div>
              <div className="_3ge_S">
                <svg width={26} height={20} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="_1L59q">
                  <path
                    d="M23.9 3.188h-4.219L17.156.638s-.012-.013-.018-.013l-.013-.012A2.044 2.044 0 0015.669 0h-5.25C9.806 0 9.262.263 8.88.681v.006l-2.469 2.5H2.1C.937 3.188 0 4.1 0 5.264v12.63C0 19.057.938 20 2.1 20h21.8c1.156 0 2.1-.944 2.1-2.106V5.263c0-1.163-.944-2.075-2.1-2.075zM13 16.843c-3.181 0-5.775-2.6-5.775-5.788C7.225 7.863 9.819 5.27 13 5.27c3.188 0 5.775 2.593 5.775 5.787 0 3.188-2.587 5.788-5.775 5.788z"
                    fill="#fff"
                  />
                  <path d="M13 6.681a4.365 4.365 0 00-4.362 4.375A4.37 4.37 0 0013 15.431a4.37 4.37 0 004.363-4.375A4.37 4.37 0 0013 6.681z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
          <input
            accept="image/jpg, image/jpeg, image/png"
            type="file"
            autoComplete="off"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: "1e-05",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    ) : (
      <div className="CZCSk _1wwV- _1a3vA">
        <p className="m_AMV">
          <span className="_3z2qD">New</span>Search by image
        </p>
        <p className="_16OJh">Try dragging an image here to find similar styles and products.</p>
        <div className="_1kxI9" aria-disabled="false" style={{ position: "relative" }}>
          <div className="_KEde">
            <div>
              <div className="_3ge_S">
                <svg width={26} height={20} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="_1L59q">
                  <path
                    d="M23.9 3.188h-4.219L17.156.638s-.012-.013-.018-.013l-.013-.012A2.044 2.044 0 0015.669 0h-5.25C9.806 0 9.262.263 8.88.681v.006l-2.469 2.5H2.1C.937 3.188 0 4.1 0 5.264v12.63C0 19.057.938 20 2.1 20h21.8c1.156 0 2.1-.944 2.1-2.106V5.263c0-1.163-.944-2.075-2.1-2.075zM13 16.843c-3.181 0-5.775-2.6-5.775-5.788C7.225 7.863 9.819 5.27 13 5.27c3.188 0 5.775 2.593 5.775 5.787 0 3.188-2.587 5.788-5.775 5.788z"
                    fill="#fff"
                  />
                  <path d="M13 6.681a4.365 4.365 0 00-4.362 4.375A4.37 4.37 0 0013 15.431a4.37 4.37 0 004.363-4.375A4.37 4.37 0 0013 6.681z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
          <input
            accept="image/jpg, image/jpeg, image/png"
            type="file"
            autoComplete="off"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: "1e-05",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    )}
  </form>
);

export default function SearchSection() {
  return document.body.offsetWidth > 1023 ? (
    <div className="_2XjFc _1HjpN">
      {/* <SearchHeader /> */}
      <div className="WqkCN">
        <div className="_3-N7g">
          <span>
            <div className="_1TWW0 _38sDk">
              <div className="_1iZH5">
                <SearchForm />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="_1My8p _2cU6z">
      <div className="_3_W49 _38orv _2yl_o">
        <div className="_24jPQ">
          <div className="_1iZH5 _2ylwC">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}
