import React from "react";
import Header from "../Header";
import "./Page.css";

const Page = () => {
  return (
    <div className="page-container">
      <Header title="ReactFacts" text="React Course - Project 1" />
      {/* <img
        className="img-logo"
        src="../../media/logo-big.png"
        alt="big-logo"
      ></img> */}
      <div className="page-content">
        <div className="page-content-title">Fun facts about React</div>
        <div className="page-content-text">
          <ul>
            <li>
              <span>Was first released in 2013</span>
            </li>
            <li>
              <span>Was originally created by Jordan Walke</span>
            </li>
            <li>
              <span>Has well over 100K stars on GitHub</span>
            </li>
            <li>
              <span>Is maintained by Facebook</span>
            </li>
            <li>
              <span>
                Powers thousands of enterprise apps, including mobile apps
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
