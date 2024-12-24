import React, { useEffect, useState } from "react";
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
        <p
          className="text-center text-muted"
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          لا تتردد في التواصل معنا لحل مشاكلك أو استفساراتك، هنا يمكنك رؤية جميع
          أسئلة الدعم التي تم إرسالها.
        </p>

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
            onClick={() => handleStatusChange(inquiry._id, "In Progress")}
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
            onClick={() => handleStatusChange(inquiry._id, "Resolved")}
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
