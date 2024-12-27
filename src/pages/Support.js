import React, { useState } from "react";
import { submitSupportQuestion } from "../utils/apiService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await submitSupportQuestion(formData);
      setSuccessMessage("تم إرسال سؤالك بنجاح!");
      setFormData({ name: "", email: "", phone: "", question: "" }); // Reset form
    } catch (error) {
      setErrorMessage("حدث خطأ أثناء إرسال سؤالك. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div>
        <Navbar/>
    <div
      className="py-5 position-relative"
      style={{
        background: "linear-gradient(to bottom right, rgba(0, 123, 255, 0.1), rgba(0, 0, 0, 0.05))",
        minHeight: "100vh",
        color: "black",
        direction: "rtl",
        overflow: "hidden",
      }}
    >    
      {/* Animated Floating Objects */}
      <div
        className="floating-circle"
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          backgroundColor: "var(--primary-color)",
          borderRadius: "50%",
          animation: "floating 6s infinite ease-in-out",
          opacity: 0.4,
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "120px",
          height: "120px",
          backgroundColor: "var(--secondary-color)",
          borderRadius: "50%",
          animation: "floating 8s infinite ease-in-out reverse",
          opacity: 0.4,
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          position: "absolute",
          top: "5%",
          right: "20%",
          width: "80px",
          height: "80px",
          backgroundColor: "var(--tertiary-color)",
          borderRadius: "50%",
          animation: "floating 10s infinite ease-in-out",
          opacity: 0.4,
        }}
      ></div>

      <div className="container mb-5">
        <h2
          className="text-center mb-3"
          style={{ color: "var(--primary-color)", fontWeight: "bold" }}
        >
          دعم العملاء
        </h2>
        <p
          className="text-center mb-5 lead"
          style={{
            color: "black",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            fontSize: "1.4rem",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          لا تتردد في التواصل معنا بمشكلتك وسنقوم بالرد عليك في أسرع وقت ممكن.
        </p>

        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className=" p-4 rounded shadow-sm mb-5"
          style={{ maxWidth: "600px", margin: "0 auto" ,backgroundColor:"white" }}
        >
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              الاسم:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="اكتب اسمك الكامل"
              style={{
                borderRadius: "10px",
                border: "2px solid var(--primary-color)",
                padding: "10px",
              }}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              البريد الإلكتروني:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: "2px solid var(--primary-color)",
                padding: "10px",
              }}
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">
              رقم الهاتف:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="+249 912345678"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ direction: "ltr", textAlign: "right" ,borderRadius: "10px",
                border: "2px solid var(--primary-color)",
                padding: "10px",}}
            />
          </div>

          {/* Question */}
          <div className="mb-3">
            <label htmlFor="question" className="form-label fw-bold">
              السؤال:
            </label>
            <textarea
              id="question"
              name="question"
              className="form-control"
              rows="4"
              placeholder="اكتب سؤالك هنا"
              value={formData.question}
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: "2px solid var(--primary-color)",
                padding: "10px",
              }}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-5 py-2"
              style={{
                borderRadius: "50px",
                backgroundColor: "var(--primary-color)",
                color: "white",
              }}
            >
              إرسال
            </button>
          </div>
        </form>
        {/* whatsapp icon */}

      <a
      href="http://wa.me/201275777144" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
      </div>
      <Footer />
      {/* Floating Animation Keyframes */}
      <style>
        {`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        `}
      </style>
    </div>
    </div>
  );
};

export default SupportPage;
