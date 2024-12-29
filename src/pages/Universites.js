import React, { useState } from "react";
import chinaUniversities from "../data/chinaUniversities";
import rwandaUniversities from "../data/rwandaUniversities";
import mastersPrograms from "../data/mastersUniversities";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import china from "../assets/china-university.png";
import rwanda from "../assets/rwanda-university.png";
import masters from "../assets/masters-university.png";
const UniversitiesPage = () => {
  const [activeTab, setActiveTab] = useState("china");

  const renderHeaderImage = () => {
    let imageUrl = "";
    let altText = "";

    switch (activeTab) {
      case "china":
        imageUrl = china; // Replace with the actual path
        altText = "الجامعات الصينية";
        break;
      case "rwanda":
        imageUrl = rwanda; // Replace with the actual path
        altText = "جامعات رواندا";
        break;
      case "masters":
        imageUrl = masters; // Replace with the actual path
        altText = "برامج الماجستير";
        break;
      default:
        break;
    }

    return (
      <div
        className="mb-5"
        style={{
          position: "relative",
          height: "350px",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px 30px",
            borderRadius: "10px",
          }}
        >
          <h1 className="fw-bold display-4">{altText}</h1>
        </div>
      </div>
    );
  };

  const renderChinaUniversities = () =>
    chinaUniversities.map((city, index) => (
      <div key={index} className="mb-5">
        <h3
          className="fw-bold mb-4 text-center"
          style={{ color: "var(--primary-color)" }}
        >
          مدينة  {city.city}
        </h3>
        <div className="row">
          {city.universities.map((university, uniIndex) => (
            <div key={uniIndex} className="col-md-6 col-lg-4 mb-4">
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="card-header text-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "var(--primary-color)",
                    fontSize: "1.2rem",
                  }}
                >
                  {university.name}
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {university.nearbyAreas.map((area, areaIndex) => (
                      <li
                        key={areaIndex}
                        className="list-group-item d-flex flex-column"
                        style={{ borderBottom: "1px solid #f1f1f1" }}
                      >
                        <span className="fw-bold" style={{ color: "var(--primary-color)" }}>
                          {area.name}:
                        </span>
                        <span>{area.description}</span>
                        <small className="text-muted">
                          متوسط الإيجار: {area.avgRent}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));

  const renderRwandaUniversities = () =>
    rwandaUniversities.map((university, index) => (
      <div key={index} className="col-md-6 col-lg-4 mb-4">
        <div
          className="card h-100 shadow-sm border-0"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            className="card-header text-center"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "white",
              backgroundColor: "var(--primary-color)",
            }}
          >
            {university.name}
          </div>
          <div className="card-body d-flex flex-column">
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: "var(--primary-color)" }}>
                مدة الدراسة:
              </h6>
              <p className="mb-1 text-secondary">{university.duration}</p>
            </div>
            <div>
              <h6 className="fw-bold mb-2" style={{ color: "var(--primary-color)" }}>
                البرامج والرسوم:
              </h6>
              <ul className="list-group list-group-flush">
                {university.tuition.map((program, programIndex) => (
                  <li
                    key={programIndex}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{
                      borderBottom: "5px solid #e9ecef",
                    }}
                  >
                    <span>{program.program}</span>
                    <span className="badge text-white" style={{ backgroundColor: "var(--primary-color)" }}>
                      {program.fee}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));

  const renderMastersPrograms = () =>
    mastersPrograms.map((program, index) => (
        
      <div key={index} className="col-md-6 col-lg-4 mb-4">
        <div
          className="card h-100 shadow-sm border-0"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            className="card-header text-center"
            style={{
              color: "white",
              backgroundColor: "var(--primary-color)",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {program.university}
          </div>
          <div className="card-body">
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: "var(--primary-color)" }}>
                الكلية:
              </h6>
              <p className="mb-1 text-secondary">{program.faculty}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: "var(--primary-color)" }}>
                الموقع:
              </h6>
              <p className="mb-1 text-secondary">{program.country}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: "var(--primary-color)" }}>
                رسوم الدراسة:
              </h6>
              <p className="mb-1 text-secondary">{program.tuition}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <Navbar />
      <div className="container py-5">
  {renderHeaderImage()}

  <ul className="nav nav-tabs justify-content-center mb-4" style={{gap: "1rem"}}>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === "china" ? "active" : ""}`}
        onClick={() => setActiveTab("china")}
        style={{
          color: activeTab === "china" ? "white" : "var(--primary-color)",
          backgroundColor: activeTab === "china" ? "var(--primary-color)" : "white",
          border: "2px solid var(--primary-color)",
          borderRadius: "25px",
          padding: "10px 20px",
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          boxShadow: activeTab === "china" ? "0 4px 8px rgba(0, 123, 255, 0.2)" : "none",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--primary-color)", e.target.style.color = "white")}
        onMouseLeave={(e) => {
          if (activeTab !== "china") {e.target.style.backgroundColor = "white"; e.target.style.color = "var(--primary-color)"}
        }}
      >
        الجامعات الصينية
      </button>
    </li>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === "rwanda" ? "active" : ""}`}
        onClick={() => setActiveTab("rwanda")}
        style={{
          color: activeTab === "rwanda" ? "white" : "var(--primary-color)",
          backgroundColor: activeTab === "rwanda" ? "var(--primary-color)" : "white",
          border: "2px solid var(--primary-color)",
          borderRadius: "25px",
          padding: "10px 20px",
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          boxShadow: activeTab === "rwanda" ? "0 4px 8px rgba(0, 123, 255, 0.2)" : "none",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--primary-color)", e.target.style.color = "white")}
        onMouseLeave={(e) => {
          if (activeTab !== "rwanda") {e.target.style.backgroundColor = "white"; e.target.style.color = "var(--primary-color)"}
        }}
      >
        جامعات رواندا
      </button>
    </li>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === "masters" ? "active" : ""}`}
        onClick={() => setActiveTab("masters")}
        style={{
          color: activeTab === "masters" ? "white" : "var(--primary-color)",
          backgroundColor: activeTab === "masters" ? "var(--primary-color)" : "white",
          border: "2px solid var(--primary-color)",
          borderRadius: "25px",
          padding: "10px 20px",
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          boxShadow: activeTab === "masters" ? "0 4px 8px rgba(0, 123, 255, 0.2)" : "none",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--primary-color)", e.target.style.color = "white")}
        onMouseLeave={(e) => {
          if (activeTab !== "masters") {e.target.style.backgroundColor = "white"; e.target.style.color = "var(--primary-color)"}
        }}
      >
        برامج الماجستير
      </button>
    </li>
  </ul>

  <div className="row">
    {activeTab === "china" && renderChinaUniversities()}
    {activeTab === "rwanda" && renderRwandaUniversities()}
    {activeTab === "masters" && renderMastersPrograms()}
  </div>
</div>

      <Footer />
    </div>
  );
};

export default UniversitiesPage;
