import React from "react";
import "../components/Update.css";
import Venue from "./Venue";
const Update = () => {
  return (
    <div className="update-container">
        <div className="baslik-after">
            <h1>Sinan Hocanın Odası Mekanını Güncelle</h1>
        </div>
      <div className="update-components">
        <div className="input1">
          <strong>Mekan Adı</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="Sinan Hocanın Odası"></input>
        </div>
        <div className="input2">
          <strong>Mekan Adresi</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="SDÜ Bilgisayar Mühendisliği"></input>
        </div>
        <div className="input3">
          <strong>Imkanlar</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="ASY. WEB TEKNOLOJILERI, YAZILIM MÜHENDİSLİĞİ"></input>
        </div>
        <div className="input4">
          <strong>Enlem</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="37.829955"></input>
        </div>
        <div className="input5">
          <strong>Boylam</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="30.52550489"></input>
        </div>
        <div className="input6">
          <strong>Günler-1</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="Pazartesi-Cuma"></input>
        </div>
        <div className="input7">
          <strong>Açılış-1</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="9.330"></input>
        </div>
        <div className="input8">
          <strong>Kapalı-1</strong>
          <input type="checkbox"></input>
        </div>
        <div className="input9">
          <strong>Kapanış-1</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="1700"></input>
        </div>
        <div className="input10">
          <strong>Günler-2</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}}defaultValue="Cumartesi-Pazar"></input>
        </div>
        <div className="input11">
          <strong>Açılış-2</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="9:00"></input>
        </div>
        <div className="input12">
          <strong>Kapanış-2</strong>
          <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} defaultValue="17:00"></input>
        </div>
        <div className="input13">
          <strong>Kapalı-2</strong>
          <input  type="checkbox"></input>
        </div>
      </div>
      <button className="button-after">
        Mekanı Güncelle
      </button>
    </div>
  );
};

export default Update;
