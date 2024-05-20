import React from "react";
import Iphone from "../../images/iphone.jpg";
import Shirt from "../../images/shirt.jpg";
import MacBook from "../../images/MacBook.jpg";
import Bicycle from "../../json_data/prd_images/Bicycle.jpg";
import Canon from "../../json_data/prd_images/Canon.jpg";
import CofferMaker from "../../json_data/prd_images/Coffee maker.jpg";
import Coke from "../../json_data/prd_images/Coke.jpg";
import ColorFountain from "../../json_data/prd_images/Color fountain.jpg";
import DinningTable from "../../json_data/prd_images/Dinning table.jpg";
import GiftCard from "../../json_data/prd_images/Gift card.jpg";
import Glass from "../../json_data/prd_images/Glass.jpg";
import HandBag from "../../json_data/prd_images/Hand Bag.jpg";
import IronBox from "../../json_data/prd_images/Iron box.jpg";
import Lipstick from "../../json_data/prd_images/Lipstick.jpg";
import MakeupBrush from "../../json_data/prd_images/Make up brush.jpg";
import MakeupBrushes from "../../json_data/prd_images/Makeup brushes.jpg";
import SewingMachine from "../../json_data/prd_images/Sewing machine.jpg";
import "./styles.css";

const FrontPage = () => {
  return (
    <div className="FrontPage">
      <div className="Banner1">
        <span className="Banner1Content">
          Here we gonna show some product for promotion which will appear
          directly to impress the customer
        </span>
        <img
          src={Iphone}
          alt="Iphone Promotion Banner"
          className="IphoneBanner"
        />
      </div>
      <div className="BestDeals">
        <h2>Deals of the day</h2>
      </div>

      <div className="ProductDemo">
        <ul>
          <li>
            <img src={MacBook} alt="MacBook" />
            <span className="PrdName">MacBook</span>
            <span className="PrdName">₹ 1,36,000</span>
          </li>
          <li>
            <img src={Bicycle} alt="Bicycle" />
            <span className="PrdName">Bicycle</span>
            <span className="PrdName">₹ 36,000</span>
          </li>
          <li>
            <img src={Canon} alt="Canon" />
            <span className="PrdName">Canon</span>
            <span className="PrdName">₹ 1,06,000</span>
          </li>
          <li>
            <img src={CofferMaker} alt="CofferMaker" />
            <span className="PrdName">CofferMaker</span>
            <span className="PrdName">₹ 6,000</span>
          </li>
          <li>
            <img src={Coke} alt="Coke" />
            <span className="PrdName">Coke</span>
            <span className="PrdName">₹ 36</span>
          </li>
        </ul>
        <div className="ProductDemo">
          <ul>
            <li>
              <img src={ColorFountain} alt="ColorFountain" />
              <span className="PrdName">ColorFountain</span>
              <span className="PrdName">₹ 2000</span>
            </li>
            <li>
              <img src={DinningTable} alt="DinningTable" />
              <span className="PrdName">DinningTable</span>
              <span className="PrdName">₹ 3000</span>
            </li>
            <li>
              <img src={GiftCard} alt="GiftCard" />
              <span className="PrdName">GiftCard</span>
              <span className="PrdName">₹ 50</span>
            </li>
            <li>
              <img src={Glass} alt="Glass" />
              <span className="PrdName">Glass</span>
              <span className="PrdName">₹ 120</span>
            </li>
            <li>
              <img src={HandBag} alt="HandBag" />
              <span className="PrdName">HandBag</span>
              <span className="PrdName">₹ 1600</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="Banner2">
        <img src={Shirt} alt="Shirt Promotion Banner" className="ShirtBanner" />
        <span className="Banner2Content">
          Here we gonna show some product for promotion which will appear
          directly to impress the customer
        </span>
      </div>
      <div className="BestDeals">
        <h2>Based on your interest</h2>
      </div>
      <div className="ProductDemo">
        <ul>
          <li>
            <img src={IronBox} alt="IronBox" />
            <span className="PrdName">IronBox</span>
            <span className="PrdName">₹ 1000</span>
          </li>
          <li>
            <img src={Lipstick} alt="Lipstick" />
            <span className="PrdName">Lipstick</span>
            <span className="PrdName">₹ 180</span>
          </li>
          <li>
            <img src={MakeupBrush} alt="MakeupBrush" />
            <span className="PrdName">MakeupBrush</span>
            <span className="PrdName">₹ 400</span>
          </li>
          <li>
            <img src={MakeupBrushes} alt="MakeupBrushes" />
            <span className="PrdName">MakeupBrushes</span>
            <span className="PrdName">₹ 1500</span>
          </li>
          <li>
            <img src={SewingMachine} alt="SewingMachine" />
            <span className="PrdName">SewingMachine</span>
            <span className="PrdName">₹ 28,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontPage;
