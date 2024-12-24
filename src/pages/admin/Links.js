import React from "react";
import AdminNavbar from "../../components/AdminNavbar"; // Ensure this matches your Navbar import
import Footer from "../../components/Footer"; // Ensure this matches your Footer import
import { FaLink } from "react-icons/fa"; // Install react-icons if not already

const LinksPage = () => {
  const links = [
    {
      title: "سيناريو الدراسات العليا في مصر",
      url: "https://docs.google.com/document/d/1zA9ZwhWLhqHrzEk311u6IaVhGe5npXwv4pZ8fuId4PU/edit?usp=drive_link",
    },
    {
      title: "سيناريو الصين",
      url: "https://docs.google.com/document/d/1zYBG7DtSqH9JT_YGYN4uXgsncVTeB7aKmcqZ8yCXetk/edit?usp=drive_link",
    },
    {
      title: "سيناريو رواندا",
      url: "https://docs.google.com/document/d/1JMJdOSyXbU7iKyYCSCNF72LQk5STtGm__m0uLw2cRYk/edit?usp=drive_link",
    },
    {
      title: "عن اوزبكستان",
      url: "https://docs.google.com/document/d/1zA9ZwhWLhqHrzEk311u6IaVhGe5npXwv4pZ8fuId4PU/edit?usp=drive_link",
    },
  ];

  return (
    <div>
      <AdminNavbar />
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold" style={{color: "var(--primary-color)"}}>روابط المستندات</h2>
        <div className="row g-4">
          {links.map((link, index) => (
            <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            <div className="col-md-6" key={index}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  background: "var(--primary-color)",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                <div className="card-body d-flex align-items-center">
                  <FaLink
                    style={{
                      fontSize: "2rem",
                      marginRight: "15px",
                      color: "white",
                    }}
                  />
                  <div>
                    <h5 className="card-title mb-2 fw-bold">{link.title}</h5>
                    
                      عرض المستند
                    
                  </div>
                </div>
                
              </div>
            </div>

            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinksPage;
