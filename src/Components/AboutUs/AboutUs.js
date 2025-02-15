import React from "react";
import Wallet from "../../images/walleticon.png";
import Change from "../../images/changeicon.png";
import Pocket from "../../images/bitcoinpocketicon.png";
import Bitchain from "../../images/bitchain.png";
import "./style/aboutus.css"
import {ThemeContext} from "../../Context/ThemeContext"
export default function AboutUs() {

  const {theme} = React.useContext(ThemeContext);

  const ShowLinks = {
    "firstItem":"first",
    "secondItem":"second",
    "thirthItem":"thirth"
  }
  const [currentLink,setCurrentLink] = React.useState(ShowLinks.firstItem)

  return (
    <section className={`about-us${theme === "dark" ? "" : " bg-second"}`}>
      <div className="container-lg">
        <div className="about-cards">
        <div className={`card-main-header${theme === "dark" ? "" : " bg-light"}`}>
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-4">
              <div className="d-flex icon-flex justify-content-center ">
                <img className="card-icon " src={Wallet} alt="" />
                <div className="card-info">
                  <h3 className={`card-main${theme === "dark" ? "" : " text-main-dark"}`}>Download Bitcoin Wallet</h3>
                  <p className={theme === "dark" ? "" : " text-second-dark"}>
                    Get it on PC or Mobile to create, send and receive bitcoins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex icon-flex justify-content-center ">
                <img className="card-icon" src={Change} alt="" />
                <div className="card-info">
                  <h3 className={`card-main${theme === "dark" ? "" : " text-main-dark"}`}>Buy/Sell with Wallet</h3>
                  <p className={theme === "dark" ? "" : " text-second-dark"}>Enter receiver's address, specify the amount and send.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex icon-flex justify-content-center ">
                <img className="card-icon" src={Pocket} alt="" />
                <div className="card-info">
                  <h3 className={`card-main${theme === "dark" ? "" : " text-main-dark"}`}>Add coins to your Wallet</h3>
                  <p className={theme === "dark" ? "" : " text-main-dark"}>
                    Add bitcoins you’ve created or exchanged via credit card.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="about-us-main">
          <div className="col-md-12">
            <h2 className={`about-header my-4${theme === "dark" ? "" : " text-main-dark"}`}>
              ABOUT <span>US</span>
            </h2>
            <div className="d-flex justify-content-center align-items-center ">
              <span className="line "></span>
              <p className={`about-title${theme === "dark" ? "" : " text-second-dark"}`}>
                A COMMERCIAL WEBSITE THAT LISTS WALLETS, EXCHANGES AND OTHER
                BITCOIN RELATED INFO
              </p>
              <span className="line"></span>
            </div>
          </div>
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <img className="img-fluid my-2" src={Bitchain} alt="" />
            </div>
            <div className="col-lg-6 we-are-area">
              <h3 className={`about-inner-header${theme === "dark" ? "" : " text-main-dark"}`}>WE ARE BAYYA</h3>
              <p className={`about-inner-text${theme === "dark" ? "" : " text-second-dark"}`}>
                A place for everyone who wants to simply buy and sell Bitcoins.
                Deposit funds using your Visa/MasterCard or bank transfer.
                Instant buy/sell of Bitcoins at fair price is guaranteed.
                Nothing extra. Join over 700,000 users from all over the world
                satisfied with our services.
              </p>
              <div className="our-info my-2">
                <h4 
                role="button" 
                onClick={()=> setCurrentLink(ShowLinks.firstItem)}
                className={currentLink === ShowLinks.firstItem ? "element-header elementselect": "element-header" }>
                
                OUR MISSION
                </h4>
                <h4 role="button" onClick={()=> setCurrentLink(ShowLinks.secondItem)} className={currentLink === ShowLinks.secondItem ? "element-header elementselect": "element-header" }>
                  OUR ADVANTAGES{" "}
                </h4>
                <h4 role="button" onClick={()=> setCurrentLink(ShowLinks.thirthItem)} className={currentLink === ShowLinks.thirthItem ? "element-header elementselect": "element-header" }>
                  OUR GUARANTEES
                </h4>
              </div>
              <div className={`element-result${theme === "dark" ? "" : " text-second-dark"}`}>
                <p className={currentLink === ShowLinks.firstItem ? "element-result-text result-title in" : "element-result-text"}>
                  Bitcoin is based on a protocol known as the blockchain, which
                  allows to create, transfer and verify ultra-secure financial
                  data without interference of third parties.
                </p>
                <p className={currentLink === ShowLinks.secondItem ? "element-result-text result-title in" : "element-result-text"}>
                  Our mission as an official partner of Bitcoin Foundation is to
                  help you enter and better understand the world of #1
                  cryptocurrency and avoid any issues you may encounter.
                </p>
                <p className={currentLink === ShowLinks.thirthItem ? "element-result-text result-title in" : "element-result-text"}>
                  We are here because we are passionate about open, transparent
                  markets and aim to be a major driving force in widespread
                  adoption, we are the first and the best in cryptocurrency.
                </p>
              </div>
              <button className="about-button my-3">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
