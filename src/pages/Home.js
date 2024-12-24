import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/hero-image.png";
import backgroundImage from "../assets/hero-background.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <Navbar />

     {/* Hero Section */}
<section
  className="hero-section d-flex align-items-center section"
  style={{
    background: "var(--background-color)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "130vh",
    color: "black",
    position: "relative",
    overflow: "hidden",
    direction: "rtl",
  }}
>
  {/* Animated Floating Shapes */}
  <div
    className="floating-circle"
    style={{
      position: "absolute",
      top: "5%",
      left: "15%",
      width: "120px",
      height: "120px",
      backgroundColor: "var(--primary-color)",
      borderRadius: "50%",
      animation: "floating 6s infinite ease-in-out",
      opacity: "0.8",
    }}
  ></div>
  <div
    className="floating-circle"
    style={{
      position: "absolute",
      bottom: "15%",
      left: "5%",
      width: "150px",
      height: "150px",
      backgroundColor: "var(--secondary-color)",
      borderRadius: "50%",
      animation: "floating 8s infinite ease-in-out reverse",
      opacity: "0.6",
    }}
  ></div>
  <div
    className="floating-circle"
    style={{
      position: "absolute",
      top: "10%",
      right: "10%",
      width: "100px",
      height: "100px",
      backgroundColor: "var(--tertiary-color)",
      borderRadius: "50%",
      animation: "floating 10s infinite ease-in-out",
      opacity: "0.6",
    }}
  ></div>

  <div className="container">
    <div className="row align-items-center">
      {/* Left Section: Text */}
      <div className="col-md-6 text-center text-md-start animate__animated animate__fadeInLeft">
        <h1
          className="fw-bold mb-4"
          style={{ fontSize: "4rem", lineHeight: "1.2" }}
        >
<span style={{ color: "var(--primary-color)" }}>ابدأ</span> رحلة تعليمك اليوم <br />
مع <span style={{ color: "var(--primary-color)" }}>ذات</span>
        </h1>
        <p
          className="mb-4 lead"
          style={{
            fontSize: "1.4rem",
            maxWidth: "600px",
            color: "var(--primary-color)",
            textAlign: "center",
            fontweight: "bold",
          }}
        >
انطلق بخطى ثابتة نحو تحقيق أهدافك الأكاديمية.  
نحن هنا لنكون جسرًا بينك وبين أفضل الجامعات العالمية.
        </p>
        <div className="button-container">
          <Link to="student-form">
          <button
            className="btn btn-lg me-3 px-5 py-3 animate__animated animate__bounceIn"
            type="submit"
            style={{
              borderRadius: "50px",
              boxShadow: "0 8px 15px rgba(0, 123, 255, 0.3)",
              backgroundColor: "var(--primary-color)",
              color: "white",
              marginBottom: "10px",
            }}
          >
            <i className="bi bi-pencil-square"></i> سجل بياناتك الآن
          </button>
          </Link>
          <a href="#about-us">
          <button
            className="btn btn-outline-light btn-lg px-5 py-3 mr-3 animate__animated animate__bounceIn animate__delay-1s"
            style={{
              borderRadius: "50px",
              border: "2px solid var(--primary-color)",
              color: "var(--primary-color)",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <i className="bi bi-search"></i> اكتشف المزيد
          </button>
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="col-md-6 text-center animate__animated animate__zoomIn">
        <img
          src={heroImage}
          alt="Student"
          className="img-fluid rounded-circle shadow-lg"
          style={{
            maxWidth: "80%",
            border: "10px solid rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>
    </div>
  </div>

  {/* Floating Shape Animation */}
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
</section>


      {/* whatsapp icon */}

      <a
      href="http://wa.me/201275777144" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
      {/* who we are */}

      <section
  className="py-5 position-relative"
  style={{
    backgroundColor: "#2C627B",
    color: "white",
    textAlign: "center",
    direction: "rtl",
    overflow: "hidden", // Ensure shapes stay within the section
  }}
>
  {/* Moving Shapes */}
  <div
    className="moving-shape"
    style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: "80px",
      height: "80px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "50%",
      animation: "moveDiagonal 8s infinite linear",
    }}
  ></div>
  <div
    className="moving-shape"
    style={{
      position: "absolute",
      bottom: "15%",
      right: "10%",
      width: "120px",
      height: "120px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: "50%",
      animation: "moveVertical 6s infinite ease-in-out",
    }}
  ></div>
  <div
    className="moving-shape"
    style={{
      position: "absolute",
      top: "30%",
      right: "25%",
      width: "60px",
      height: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50%",
      animation: "moveHorizontal 10s infinite linear",
    }}
  ></div>

  {/* Content */}
  <div className="container section" id="about-us">
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: "#FFFFFF",
      }}
    >
      من نحن
    </h2>
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        padding: "2rem",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          marginBottom: "1rem",
          color: "#FFFFFF",
        }}
      >
        تأسست ZAT للاستشارات والخدمات التعليمية في عام 2015 في مصر برؤية واضحة
        لتسهيل رحلة الطلاب الطامحين للدراسة في الخارج. من خلال خبرتنا وشبكتنا
        العالمية المتنامية، أصبحت ZAT شريكاً موثوقاً لآلاف الطلاب، مما يساعدهم
        على تحقيق أحلامهم الأكاديمية في أفضل الوجهات التعليمية حول العالم.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          marginBottom: "1rem",
          color: "#FFFFFF",
        }}
      >
        نفتخر بربط الطلاب بفرص دراسية في الصين، الهند، ماليزيا، الفلبين، روسيا،
        جورجيا، أوكرانيا، إندونيسيا، رواندا، تركيا، ومصر.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#FFFFFF",
        }}
      >
        مع وجود فروع استراتيجية، تضمن ZAT مرافقة الطلاب في كل خطوة، من
        الاستشارة الأولى إلى وصولهم إلى جامعاتهم المنشودة.
      </p>
    </div>
  </div>

  {/* Animation Styles */}
  <style>
    {`
      @keyframes moveDiagonal {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(30px, 30px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
      @keyframes moveVertical {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-40px);
        }
        100% {
          transform: translateY(0);
        }
      }
      @keyframes moveHorizontal {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(50px);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}
  </style>
</section>


      {/* Why Choose Us Section */}
      <section
  className="py-5 section"
  style={{
    backgroundColor: "#f8f9fa",
    color: "#333",
    direction: "rtl",
  }}
>
  <div className="container">
    <h2
      className="text-center mb-4"
      style={{
        fontSize: "2.5rem",
        color: "var(--primary-color)",
        fontWeight: "bold",
      }}
    >
      لماذا تختارنا؟
    </h2>
    <div className="row gy-4">
      <div className="col-md-6 d-flex align-items-start">
        <div
          className="p-3 rounded shadow-sm"
          style={{
            backgroundColor: "var(--background-light-color)",
            width: "100%",
          }}
        >
          <h5
            className="fw-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            1. شبكة عالمية
          </h5>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            نوفر فرصًا دراسية في بعض من أرقى الجامعات حول العالم في دول متعددة.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-start">
        <div
          className="p-3 rounded shadow-sm"
          style={{
            backgroundColor: "var(--background-light-color)",
            width: "100%",
          }}
        >
          <h5
            className="fw-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            2. دعم متكامل
          </h5>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            من التقديم للجامعة إلى السكن، التأشيرات، والتأقلم مع الحياة بالخارج، ZAT تغطي كل شيء.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-start">
        <div
          className="p-3 rounded shadow-sm"
          style={{
            backgroundColor: "var(--background-light-color)",
            width: "100%",
          }}
        >
          <h5
            className="fw-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            3. خدمات مخصصة للطلاب
          </h5>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            نعتبر رحلة كل طالب فريدة ونقدم استشارات تتماشى مع أهدافه الأكاديمية والشخصية.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-start">
        <div
          className="p-3 rounded shadow-sm"
          style={{
            backgroundColor: "var(--background-light-color)",
            width: "100%",
          }}
        >
          <h5
            className="fw-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            4. فريق من الخبراء
          </h5>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            مستشارونا هم محترفون مدربون بخبرة في التعليم الدولي لضمان الدقة والكفاءة في كل مرحلة.
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-start">
        <div
          className="p-3 rounded shadow-sm"
          style={{
            backgroundColor: "var(--background-light-color)",
            width: "100%",
          }}
        >
          <h5
            className="fw-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            5. شراكات مع المؤسسات
          </h5>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            ZAT تتعاون مع الجامعات، الهيئات التعليمية، والشركاء المحليين الموثوقين لتقديم خدمات سلسة.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Our Services Section */}
<section
  className="services-section py-5 section"
  style={{
    backgroundColor: "var(--background-color)",
    color: "black",
    direction: "rtl",
    position: "relative",
  }}
>
  <div className="container text-center">
    <h2
      className="fw-bold mb-4"
      style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}
    >
      خدماتنا
    </h2>
    <p className="lead mb-5" style={{ color: "var(--text-secondary-color)" }}>
      نقدم حلولاً متكاملة مصممة خصيصاً لتلبية احتياجات وجهتك الدراسية وأهدافك المستقبلية.
    </p>
    <div className="row">
      {[
        {
          id: 1,
          title: "الاستشارات التعليمية المجانية",
          description:
            "إرشاد متخصص لمساعدتك في اختيار أفضل دولة، جامعة، وبرنامج.",
        },
        {
          id: 2,
          title: "ضمان القبول الجامعي",
          description: "مساعدتك في الحصول على قبول رسمي في أفضل الجامعات.",
        },
        {
          id: 3,
          title: "الاستقبال في المطار",
          description:
            "وصول سلس ومنظم مع خدمات استقبال ونقل منظم في المطار.",
        },
        {
          id: 4,
          title: "المساعدة في السكن",
          description: "مساعدتك في العثور على سكن مناسب وآمن بالقرب من الجامعة.",
        },
        {
          id: 5,
          title: "الدعم القانوني والأكاديمي",
          description:
            "• تسجيل دورات الجامعة. • فتح ملفات الدعم القانوني. • مساعدة في إصدار التأشيرات والإجراءات السكنية.",
        },
        {
          id: 6,
          title: "الدعم الصحي والسلامة",
          description: "• إصدار تأمين صحي. • توفير تغطية طبية شاملة.",
        },
        {
          id: 7,
          title: "خدمات المستندات",
          description:
            "• ترجمة الشهادات. • الحصول على مستندات معتمدة لطلبات الجامعات.",
        },
      ].map((service) => (
        <div key={service.id} className="col-md-6 mb-4">
          <div
            className="service-card p-4 shadow-sm rounded"
            style={{
              backgroundColor: "white",
              textAlign: "right",
              borderLeft: `4px solid var(--primary-color)`,
              position: "relative",
            }}
          >
            <h5
              className="fw-bold"
              style={{ color: "var(--primary-color)", fontSize: "1.5rem" }}
            >
              {service.title}
            </h5>
            <p
              className="mt-2"
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "var(--text-secondary-color)",
              }}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Background Animation */}
  <div
    className="floating-shape"
    style={{
      position: "absolute",
      bottom: "10%",
      left: "5%",
      width: "150px",
      height: "150px",
      backgroundColor: "var(--secondary-color)",
      borderRadius: "50%",
      opacity:0.3,
      animation: "floatingShape 6s infinite ease-in-out",
    }}
  ></div>
  <div
    className="floating-shape"
    style={{
      position: "absolute",
      top: "9%",
      right: "10%",
      width: "150px",
      height: "150px",
      backgroundColor: "var(--primary-color)",
      opacity:0.3,
      borderRadius: "50%",
      animation: "floatingShape 8s infinite ease-in-out reverse",
    }}
  ></div>
  <style>
    {`
    @keyframes floatingShape {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }
    `}
  </style>
</section>


      {/* Contact Section */}
      <section
  className="py-5 section"
  style={{ backgroundColor: "#f8f9fa", color: "#333", direction: "rtl" }}
>
  <div className="container">
    <h2
      className="text-center mb-4"
      style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}
    >
      تواصل معنا
    </h2>
    <div className="row">
      <div className="col-lg-6">
        <ul className="list-unstyled">
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem" , color: "var(--primary-color)"}}
            ></i>
            <strong className="me-2">الصين: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201273514666</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem" , color: "var(--primary-color)"}}
            ></i>
            <strong className="me-2">ماليزيا ورواندا: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201276977728</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem" , color: "var(--primary-color)"}}
            ></i>
            <strong className="me-2">الفلبين والهند: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201288886215</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem", color: "var(--primary-color)" }}
            ></i>
            <strong className="me-2">روسيا وجورجيا: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201288886213</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem", color: "var(--primary-color)" }}
            ></i>
            <strong className="me-2">تركيا وليبيا: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201206437496</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: "1.5rem", color: "var(--primary-color)", direction: "rtl" }}
            ></i>
            <strong className="me-2"> مصر: </strong> <span style={{direction: "ltr", marginRight: "5px"}}> +201273492666</span>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <p className="lead text-center mb-3">
          <i
            className="bi bi-globe text-primary me-2"
            style={{ fontSize: "1.5rem", marginLeft: "5px" }}
          ></i>
          <strong>وسائل التواصل الاجتماعي:</strong>
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="https://www.facebook.com/SSA0020?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ color: "#3b5998", fontSize: "1.5rem" }}
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com/zatstudyabroad?igsh=MXZhaDgxYnJnOXZrdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ color: "#E1306C", fontSize: "1.5rem" }}
          >
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@zat_study_in_egypt?_t=8sSyfmEKsB3&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ color: "#000000", fontSize: "1.5rem" }}
          >
            <i className="bi bi-tiktok"></i> TikTok
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ color: "#FF0000", fontSize: "1.5rem" }}
          >
            <i className="bi bi-youtube"></i> YouTube
          </a>
        </div>
        <hr className="my-4" />
        <p
          className="text-center mt-3"
          style={{
            fontStyle: "italic",
            color: "#666",
            fontSize: "1.2rem",
          }}
        >
          مع ZAT، رحلتك الأكاديمية أصبحت أسهل، أذكى، وخطوة أقرب لتحقيق النجاح!
        </p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default HomePage;
