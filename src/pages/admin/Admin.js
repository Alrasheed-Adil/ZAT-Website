import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import { getScholars, updateScholarStatus } from "../../utils/apiService";

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");
  const [filterMajor, setFilterMajor] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getScholars();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const filteredRequests = requests
    .filter(
      (req) =>
        (!filterCountry || req.country === filterCountry) &&
        (!filterMajor || req.major === filterMajor)
    )
    .sort((a, b) => {const statusOrder = { New: 0, Processing: 1, Processed: 2 };
    return statusOrder[a.status] - statusOrder[b.status];}); // New first, then others

  const handleStatusChange = async (id, newStatus) => {
    try {
      const updatedRequest = await updateScholarStatus(id, newStatus);
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id === id ? { ...req, status: updatedRequest.status } : req
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">لوحة تحكم المسؤول</h2>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="countryFilter" className="form-label fw-bold">
              فلترة حسب الدولة:
            </label>
            <select
              id="countryFilter"
              className="form-select"
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
            >
              <option value="">جميع الدول</option>
              {Array.from(new Set(requests.map((req) => req.country))).map(
                (country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="majorFilter" className="form-label fw-bold">
              فلترة حسب التخصص:
            </label>
            <select
              id="majorFilter"
              className="form-select"
              value={filterMajor}
              onChange={(e) => setFilterMajor(e.target.value)}
            >
              <option value="">جميع التخصصات</option>
              {Array.from(new Set(requests.map((req) => req.major))).map(
                (major, index) => (
                  <option key={index} value={major}>
                    {major}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Requests Table */}
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>الاسم</th>
              <th>البريد الإلكتروني</th>
              <th>رقم الهاتف</th>
              <th>الدولة</th>
              <th>التخصص</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req._id}>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td style={{ direction: "ltr",textAlign: "right" }}>{req.phone}</td>
                <td>{req.country}</td>
                <td>{req.major}</td>
                <td>
                  <select
                    className={`form-select ${
                      req.status === "New"
                        ? "bg-danger text-white"
                        : req.status === "Processing"
                        ? "bg-primary text-white"
                        : "bg-success text-white"
                    }`}
                    value={req.status}
                    onChange={(e) => handleStatusChange(req._id, e.target.value)}
                  >
                    <option value="New">جديد</option>
                    <option value="Processing">قيد المعالجة</option>
                    <option value="Processed">تمت المعالجة</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
