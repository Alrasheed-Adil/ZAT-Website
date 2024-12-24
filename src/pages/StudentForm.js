import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createScholar } from "../utils/apiService"; // Import the API service

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    major: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      // Call the API to create a scholar
      await createScholar(formData);
      setSuccessMessage("تم إرسال النموذج بنجاح!");
      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        major: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Student Form Section */}
<div
  className="application-form-section"
  style={{
    backgroundImage: `linear-gradient(to bottom right, rgba(0, 123, 255, 0.1), rgba(0, 0, 0, 0.05))`,
    position: "relative",
    padding: "80px 0",
    overflow: "hidden",
  }}
>
  {/* Animated Background Elements */}
  <div
    style={{
      position: "absolute",
      top: "15%",
      left: "10%",
      width: "150px",
      height: "150px",
      backgroundColor: "var(--secondary-color)",
      borderRadius: "50%",
      opacity:0.3,
      zIndex: 1,
      animation: "float 6s infinite ease-in-out",
    }}
  ></div>
  <div
    style={{
      position: "absolute",
      bottom: "15%",
      right: "10%",
      width: "200px",
      height: "200px",
      backgroundColor: "var(--primary-color)",
      opacity: 0.3,
      borderRadius: "50%",
      zIndex: 1,
      animation: "floatReverse 8s infinite ease-in-out",
    }}
  ></div>
  

  {/* Form Section */}
  <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
    <h2 className="text-center form-title mb-4" style={{ color: "var(--primary-color)", fontWeight: "bold" }}>
      استمارة تقديم الطالب
    </h2>

    {/* Success Message */}
    {successMessage && (
      <div className="alert alert-success text-center" role="alert">
        {successMessage}
      </div>
    )}

    {/* Error Message */}
    {errorMessage && (
      <div className="alert alert-danger text-center" role="alert">
        {errorMessage}
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="p-4 rounded shadow-sm"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      {/* Student Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold" style={{ fontSize: "1.1rem", color: "var(--primary-color)" }}>
          اسم الطالب :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="اكتب اسمك الكامل"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "2px solid var(--primary-color)",
            padding: "10px",
          }}
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold" style={{ fontSize: "1.1rem", color: "var(--primary-color)" }}>
          البريد الالكتروني :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "2px solid var(--primary-color)",
            padding: "10px",
          }}
        />
      </div>

      {/* Phone Number */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label fw-bold" style={{ fontSize: "1.1rem", color: "var(--primary-color)" }}>
          رقم الهاتف :
        </label>
        <input
          style={{
            direction: "ltr",
            textAlign: "right",
            borderRadius: "10px",
            border: "2px solid var(--primary-color)",
            padding: "10px",
          }}
          type="text"
          id="phone"
          name="phone"
          className="form-control"
          placeholder="+249 912345678"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Country */}
      <div className="mb-3">
        <label htmlFor="country" className="form-label fw-bold" style={{ fontSize: "1.1rem", color: "var(--primary-color)" }}>
          الدولة التي يرغب بالتقديم لها :
        </label>
        <select
          id="country"
          name="country"
          className="form-select"
          value={formData.country}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "2px solid var(--primary-color)",
          }}
        >
          <option value="">اختر الدولة</option>
          <option value="الصين">الصين</option>
          <option value="ماليزيا">ماليزيا</option>
          <option value="تركيا">تركيا</option>
          <option value="روسيا">روسيا</option>
          <option value="الهند">الهند</option>
          <option value="قبرص">قبرص</option>
          <option value="جورجيا">جورجيا</option>
          <option value="الفلبين">الفلبين</option>
          <option value="مصر">مصر</option>
          <option value="رواندا">رواندا</option>
        </select>
      </div>

      {/* Major */}
      <div className="mb-3">
        <label htmlFor="major" className="form-label fw-bold" style={{ fontSize: "1.1rem", color: "var(--primary-color)" }}>
          التخصص :
        </label>
        <select
          id="major"
          name="major"
          className="form-select"
          value={formData.major}
          onChange={handleChange}
          required
          style={{
            borderRadius: "10px",
            border: "2px solid var(--primary-color)",
          }}
        >
          <option value="">اختر التخصص</option>
          <option value="الطب">الطب البشري</option>
          <option value="الهندسة">الهندسة</option>
          <option value="طب الأسنان">طب الأسنان</option>
          <option value="الصيدلة">الصيدلة</option>
          <option value="التمريض">التمريض</option>
          <option value="التخصصات الأدبية">التخصصات الأدبية</option>
          <option value="القانون">القانون</option>
          <option value="المحاسبة">المحاسبة</option>
          <option value="إدارة الأعمال">إدارة الأعمال</option>
          <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
          <option value="اللغات">اللغات</option>
          <option value="التسويق">التسويق</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary px-4 py-2"
          disabled={isSubmitting}
          style={{
            borderRadius: "50px",
            backgroundColor: "var(--primary-color)",
            color: "white",
            boxShadow: "0 8px 15px rgba(0, 123, 255, 0.3)",
            padding: "10px 20px",
          }}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        </button>
      </div>
    </form>
  </div>

  {/* Background Animations */}
  <style>
    {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes floatReverse {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(20px);
        }
      }
      @keyframes scalePulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
      }
    `}
  </style>
</div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentForm;
