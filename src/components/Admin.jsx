import { useNavigate } from "react-router-dom";
import "../components/admin.css";
import AdminButton from "./AdminButton";
import { FaStar } from "react-icons/fa";
import InputWithLabel from "./InputWithLabel";
function Admin() {
  var navigate = useNavigate();
  const performClick = (evt) => {
    if (evt.target.name === "Mekan Ekle") {
      return navigate("/admin/addupdate");
    } if(evt.target.name === "Guncelle"){
      return navigate(`/admin/Update`)
    }
  };
  return (
    <div className="page">
      <div className="baslik-container">
        <div className="baslik-components">
          <h1 style={{ marginBottom: "40px" }}>MekanBul-Admin</h1>
          <p
            style={{
              marginLeft: "14px",
              color: "gray",
              fontSize: "22px",
              fontFamily: "revert-layer",
            }}
          >
            Mekanlari Yönetin
          </p>
        </div>
        <div className="center-container">
          <div className="center-components">
            <div className="up-center">
              <p style={{ color: "red" }}>Sinan Hocanın Odası</p>
              <FaStar
                style={{
                  fontSize: "17px",
                  marginBottom: "10px",
                  marginLeft: "8px",
                }}
              />
              <FaStar style={{ fontSize: "17px", marginBottom: "10px" }} />
              <FaStar style={{ fontSize: "17px", marginBottom: "10px" }} />
              <FaStar style={{ fontSize: "17px", marginBottom: "10px" }} />
              <FaStar style={{ fontSize: "17px", marginBottom: "10px" }} />
            </div>
            <p style={{ fontFamily: "cursive", fontSize: "16px" }}>
              SDÜ Bilgisayar Mühendisliği
            </p>
            <div className="up-center-bottom">
              <p
                style={{
                  backgroundColor: "green",
                  padding: "8px",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                ASY
              </p>
              <p
                style={{
                  backgroundColor: "green",
                  padding: "8px",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                Web Teknolojileri
              </p>
              <p
                style={{
                  backgroundColor: "green",
                  padding: "8px",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                Yazılım Mühendisliği
              </p>
            </div>
            <div className="buttons">
              <button
              onClick={performClick}
              name="Guncelle"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  
                }}
                className="button-1"
              >
                Mekan Güncelle
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                }}
                className="button-2"
              >
                Mekan Sil
              </button>
            </div>
          </div>
        </div>
        <div className="last-button">
          <AdminButton  name="Mekan Ekle" onClick={performClick}></AdminButton>
        </div>
      </div>
    </div>
  );
}

export default Admin;
