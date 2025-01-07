import React from "react";
import "./index.css";
import logo from "../../assets/images/logo192.png";
export function Footer() {
  return (
    <div>
      <div className="custom-footer">
        <div className="d-flex align-items-center p-5">
          <div className="custom-footer-logo overflow-hidden" style={{width:'48px', height:'100%'}}>
            <img src={logo} alt="" className="w-100 h-100 objectfit-cover" />
          </div>
          <div className="ps-0 ps-md-5 d-flex flex-wrap gap-4 custom-div-right-footer w-100 ">
            <a href="">Liars Bar</a>
            <a href="">Chill Guy Meme</a>
            <a href="">Atlyss</a>
            <a href="">New Arc Line</a>
            <a href="">Miside</a>
          </div>
          <div className="custom-div-left-footer text-end">
            <span className="custom-p-left-footer">
              © 2024 ElonHash
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
