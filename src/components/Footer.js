import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundColor: "var(--primary-color)"}}>
      <p>© {currentYear} ZAT للاستشارات والخدمات التعليمية. جميع الحقوق محفوظة.</p>
    </footer>
  );
};

export default Footer;
