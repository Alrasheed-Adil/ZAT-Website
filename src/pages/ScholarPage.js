import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rwanda from "../assets/flags/rwanda.png";
import india from "../assets/flags/india.png";
import china from "../assets/flags/china.png";
import malaysia from "../assets/flags/malaysia.png";

const scholarData = [
  {
    country: "الصين",
    university: "جامعة بكين",
    major: "الطب",
    price: "10,000 دولار",
    notes: "تشمل المنحة الإقامة والتأمين الطبي.",
    flag: china,
  },
  {
    country: "رواندا",
    university: "جامعة كيغالي",
    major: "الهندسة",
    price: "8,000 دولار",
    notes: "تغطية الرسوم الدراسية بالكامل.",
    flag: rwanda,
  },
  {
    country: "ماليزيا",
    university: "جامعة مالايا",
    major: "العلوم",
    price: "12,000 دولار",
    notes: "تأمين صحي وإقامة مجانية.",
    flag: malaysia,
  },
  {
    country: "الهند",
    university: "جامعة دلهي",
    major: "إدارة الأعمال",
    price: "9,000 دولار",
    notes: "تشمل المنحة مصاريف السفر.",
    flag: india,
  },
];

const ScholarPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [searchMajor, setSearchMajor] = useState("");

  const countries = [...new Set(scholarData.map((item) => item.country))];
  const majors = [...new Set(scholarData.map((item) => item.major))];

  const filteredData = scholarData.filter((item) => {
    return (
      (!selectedCountry || item.country === selectedCountry) &&
      (!selectedMajor || item.major === selectedMajor)
    );
  });

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="py-5 text-center"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "50px 20px",
          position: "relative",
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          المنح الدراسية
        </h1>
        <p style={{ fontSize: "1.3rem" ,color:"white"}}>
          استكشف أفضل الفرص الدراسية في مختلف الدول والتخصصات.
        </p>
        <div
    className="floating-circle"
    style={{
      position: "absolute",
      top: "15%",
      left: "5%",
      width: "100px",
      height: "100px",
      backgroundColor: "var(--background-color)",
      borderRadius: "50%",
      animation: "floating 8s infinite ease-in-out reverse",
      opacity: "0.4",
    }}
  ></div>
  <div
    className="floating-circle"
    style={{
      position: "absolute",
      bottom: "10%",
      right: "5%",
      width: "100px",
      height: "100px",
      backgroundColor: "var(--background-color)",
      borderRadius: "50%",
      animation: "floating 8s infinite ease-in-out reverse",
      opacity: "0.4",
    }}
  ></div>
      </div>

      {/* Filters Section */}
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="countryFilter" className="form-label fw-bold">
              اختر الدولة :
            </label>
            <select
              id="countryFilter"
              className="form-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">كل الدول</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="majorFilter" className="form-label fw-bold">
              اختر التخصص :
            </label>
            <input
              type="text"
              id="majorSearch"
              className="form-control mb-2"
              placeholder="اكتب للبحث عن تخصص"
              value={searchMajor}
              onChange={(e) => setSearchMajor(e.target.value)}
            />
            <select
              id="majorFilter"
              className="form-select"
              value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}
            >
              <option value="">كل التخصصات</option>
              {majors
                .filter((major) =>
                  major.toLowerCase().includes(searchMajor.toLowerCase())
                )
                .map((major, index) => (
                  <option key={index} value={major}>
                    {major}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Scholarships Display Section */}
        <div className="row">
  {filteredData.map((item, index) => (
    <div
      key={index}
      className="col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInUp"
    >
      <div
        className="card shadow-lg h-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "var(--background-light-color)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={item.flag}
          alt={item.country}
          className="card-img-top"
          style={{
            height: "150px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <div
          className="card-body"
          style={{
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          <h5
            className="card-title mb-3"
            style={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {item.university}
          </h5>
          <p
            className="card-text mb-2"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>الدولة:</strong> {item.country}
          </p>
          <p
            className="card-text mb-2"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>التخصص:</strong> {item.major}
          </p>
          <p
            className="card-text mb-3"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>التكلفة:</strong> {item.price}
          </p>
          <p
            className="card-text text-muted"
            style={{
              fontSize: "1rem",
            }}
          >
            {item.notes}
          </p>
          <a href="/student-form">
          <button
      className="btn btn-lg px-5 py-3"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "white",
        borderRadius: "50px",
        boxShadow: "0 5px 5px rgba(136, 137, 138, 0.3)",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      التقديم الان
    </button>
    </a>
        </div>
      </div>
    </div>
  ))}
  {filteredData.length === 0 && (
    <p className="text-center text-muted" style={{ fontSize: "1.3rem" }}>
      لا توجد منح مطابقة للبحث
    </p>
  )}
  
</div>
</div>


      <Footer />
    </div>
  );
};

export default ScholarPage;
