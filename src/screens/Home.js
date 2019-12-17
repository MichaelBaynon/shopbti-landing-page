import React from "react";

import Building1 from "../imgs/building1.jpg";
import ChamberOfCommerce from '../imgs/042616-miami-chamber-of-commerce.jpg'

const HomeScreen = props => {
  return (
    <main style={{ marginTop: "64px", height: "100%" }}>
      <div className="container">
        <h1 className="welcomeMSG">Welcome</h1>
        <img className="building1img" src={Building1} width={400} />
        <div className="text-area">
          <p>Corporate Office: </p>
          <p>11924 Forest Hill Blvd Bay # 22 </p>
          <p>Wellington, FL 33414</p>
        </div>
      </div>
      <div className="container">
        <div className="text-area">
          <h3 className="title">Government/Nonprofit Organization?</h3>
          <p className="phone-number">
            Call: <a href="tel:954-804-2568"> (954)-804-2568</a>
          </p>
          <p className="or-statement">or</p>
          <a className="email" href="mailto:tere@shopbti.com">
            Email Our Sales Department
          </a>
        </div>
      </div>
      <div className="container">
        <div className="text-area">
          <h3 className="title">International Sales</h3>
          <p className="phone-number">
            Call: <a href="tel:561-793-3963"> (561)-793-3963</a>
          </p>
          <p className="or-statement">or</p>
          <a className="email" href="mailto:tere@shopbti.com">
            Email Our Sales Department
          </a>
        </div>
      </div>
      <div className="container">
        <div className="text-area">
          <h3 className="title">More You Should Know</h3>
          <p className="languages-spoken">English, Spanish & French Spoken.</p>

          <p className="languages-spoken">
            We employ people from 6 different <br></br> countries & honor all
            religions' Holidays.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-area">
          <h3 className="title">Se Habla Espanol</h3>
          <p>Para pedir una cotizacion en Espanol, escribenos</p>
          <a className="email" href="mailto:tere@shopbti.com">
            Email Ventas
          </a>
        </div>
      </div>
      <img className="chamber-of-commerce-img" src={ChamberOfCommerce} width={400} />
    </main>
  );
};

export default HomeScreen;
