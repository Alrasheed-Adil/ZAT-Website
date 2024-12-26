import React, { useEffect, useState } from "react";
import { utils, writeFile } from "xlsx"; // Import xlsx utilities
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import {
  getAllSupportInquiries,
  updateSupportInquiryStatus,
} from "../../utils/apiService";

const AdminSupport = () => {
  const [supportInquiries, setSupportInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupportInquiries = async () => {
      try {
        const inquiries = await getAllSupportInquiries();
        setSupportInquiries(inquiries);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch support inquiries.");
        setLoading(false);
      }
    };

    fetchSupportInquiries();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateSupportInquiryStatus(id, status);
      setSupportInquiries((prev) =>
        prev.map((inquiry) =>
          inquiry._id === id ? { ...inquiry, status } : inquiry
        )
      );
    } catch (err) {
      console.error("Error updating inquiry status:", err);
    }
  };

  // Function to export the table data to an Excel file
  const exportToExcel = () => {
    const dataToExport = supportInquiries.map((inquiry) => ({
      الاسم: inquiry.name,
      البريد_الإلكتروني: inquiry.email,
      رقم_الهاتف: inquiry.phone,
      السؤال: inquiry.question,
      الحالة:
        inquiry.status === "New"
          ? "جديد"
          : inquiry.status === "In Progress"
          ? "قيد المعالجة"
          : "تم الحل",
    }));

    const worksheet = utils.json_to_sheet(dataToExport);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Support Inquiries");

    writeFile(workbook, "Support_Inquiries.xlsx");
  };

  return (
    <div>
      <AdminNavbar />
      <div
        className="container py-5"
        style={{
          backgroundColor: "var(--background-light-color)",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            color: "var(--primary-color)",
            fontWeight: "bold",
          }}
        >
          أسئلة الدعم
        </h2>

        {/* Export to Excel Button */}
        <div className="text-end mb-3">
          <button
            className="btn btn-success"
            onClick={exportToExcel}
            style={{ borderRadius: "10px" }}
          >
            تصدير إلى Excel
          </button>
        </div>

        {loading && <p className="text-center">جاري التحميل...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && (
          <div className="table-responsive">
            <table className="table table-striped table-hover shadow-sm">
              <thead
                className="table-dark"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <tr>
                  <th>الاسم</th>
                  <th>البريد الإلكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>السؤال</th>
                  <th>الحالة</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {supportInquiries.map((inquiry) => (
                  <tr key={inquiry._id}>
                    <td>{inquiry.name}</td>
                    <td>{inquiry.email}</td>
                    <td>{inquiry.phone}</td>
                    <td
                      style={{
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        maxWidth: "300px",
                        overflowWrap: "break-word",
                      }}
                    >
                      {inquiry.question}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          inquiry.status === "New"
                            ? "bg-warning"
                            : inquiry.status === "In Progress"
                            ? "bg-info"
                            : "bg-success"
                        }`}
                        style={{ fontSize: "1rem" }}
                      >
                        {inquiry.status === "New"
                          ? "جديد"
                          : inquiry.status === "In Progress"
                          ? "قيد المعالجة"
                          : "تم الحل"}
                      </span>
                    </td>
                    <td>
                      {inquiry.status !== "Resolved" && (
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() =>
                            handleStatusChange(inquiry._id, "In Progress")
                          }
                          style={{
                            backgroundColor: "var(--primary-color)",
                            border: "none",
                          }}
                        >
                          قيد المعالجة
                        </button>
                      )}
                      {inquiry.status !== "Resolved" && (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() =>
                            handleStatusChange(inquiry._id, "Resolved")
                          }
                          style={{ border: "none" }}
                        >
                          تم الحل
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminSupport;
