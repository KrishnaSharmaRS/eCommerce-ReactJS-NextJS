import Image from "next/image";

import LinkCustom from "../components/LinkCustom";

function Home() {
  return (
    <>
      <main className="-HZDs">
        <span className="_2Zs7Z">
          <div className="_2ezKP _1HLrt _3AP5M">
            <div className="_3AGud">
              <div className="_2D-kM">
                <div
                  className="_12cr2 _1RybJ _31IMi wBHJF"
                  style={{
                    backgroundImage: `url("/assets/images/Hero_Homepage_Louise.jpg")`,
                  }}
                >
                  <div className="iUm2H" />
                  <Image className="_3YlSt" src={"/assets/images/Hero_Homepage_Louise.jpg"} alt={"Discover"} layout="fill" />
                </div>
              </div>
              <div className="_24xW3" />
              <div className="_397HO _3aHOU">
                <h1 className="_2xiBd">Discover Products</h1>
                <p className="_267lc">Shop New Arrivals</p>
              </div>
            </div>
          </div>
        </span>
        <div>
          <div className="nvEqf">
            <div className="_2ezKP _3AP5M">
              <div className="_3tNF_">
                {/* <BannerContainerOne messageId="home.bathTT" defaultMessage="Bath TT" imageUrl="/assets/images/Homepage_NewArrivals_Bergamo.jpg" />
              <BannerContainerOne messageId="home.handTT" defaultMessage="Hand TT" imageUrl="/assets/images/Hover_Bath_MilagroRug.jpg" /> */}
                {/* <BannerContainerTwo /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="_2ezKP _2AP1H _3AP5M">
          <h3 className="_1wCCt">Custom Design and Monograms</h3>
          {/* <CardsContainer /> */}
        </div>
        <div className="_1jkpR">
          <div className="_2ezKP GNbw6 _3p_Oe _3AP5M">
            <div className="_2LfTI">
              <div className="_2JQO6">
                <video className="_1dA_2" src="https://d3rv2fuz9136t1.cloudfront.net/home_pages/videos/000/000/001/original/Matouk-The-Senses.mp4?1566822827" loop playsInline />
                <div className="_1wJl0">
                  <button type="button" className="_1apA1 _2yYC4">
                    <svg width={20} height={30} viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg" className="_3asWp">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20 15L0 30V0L20 15Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="KUKo1">
              <p className="_2dnw3">
                {/* <FormattedMessage
                id="home.description"
                defaultMessage="Shared moments with those you love are the moments we value most, and the ones we can help you create."
              /> */}
              </p>
              <div className="fK9n3">
                <LinkCustom className="_27Bm6" to="/about">
                  ABOUT
                </LinkCustom>
              </div>
            </div>
          </div>
        </div>
        <div
          className="_2ezKP _2iysM _3AP5M"
          style={{
            maxWidth: "100%",
          }}
        >
          {/* <BigCard
          link="/news"
          imageUrl="/assets/images/Journal.jpg"
          title={"TT 101"}
          description={<FormattedMessage id="app.readOurArticles" defaultMessage="Read Our Articles" />}
          wide
        /> */}
        </div>
        {/* <ConnectWithUs /> */}
      </main>
    </>
  );
}

export default Home;
