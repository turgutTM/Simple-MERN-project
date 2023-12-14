function AddUpdateVenue() {
    return (
        <div className="update-container">
            <div className="baslik-after">
                <h1>Yeni Mekan Ekle</h1>
            </div>
          <div className="update-components">
            <div className="input1">
              <strong>Mekan Adı</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input2">
              <strong>Mekan Adresi</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input3">
              <strong>Imkanlar</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input4">
              <strong>Enlem</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input5">
              <strong>Boylam</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}}></input>
            </div>
            <div className="input6">
              <strong>Günler-1</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input7">
              <strong>Açılış-1</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input8">
              <strong>Kapalı-1</strong>
              <input type="checkbox"></input>
            </div>
            <div className="input9">
              <strong>Kapanış-1</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input10">
              <strong>Günler-2</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}}></input>
            </div>
            <div className="input11">
              <strong>Açılış-2</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input12">
              <strong>Kapanış-2</strong>
              <input style={{border:"1px solid",borderColor:"gray",borderRadius:"5px"}} ></input>
            </div>
            <div className="input13">
              <strong>Kapalı-2</strong>
              <input  type="checkbox"></input>
            </div>
          </div>
          <button className="button-after" style={{marginLeft:"67%"}}>
            Mekanı Ekle
          </button>
        </div>
      );
    };
  
  export default AddUpdateVenue;
  