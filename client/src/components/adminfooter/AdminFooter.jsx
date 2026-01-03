import React from "react";

const AdminFooter = () => {
  return (
    <footer
      className="text-center mt-auto py-2 border-top  shadow-sm "
      style={{ position: "absolute", right: 0, width: "100%", bottom: 0 }}
    >
      <div className="container">
        <small className="text-muted">
          © {new Date().getFullYear()} Job Portal Admin Panel | Developed by
          Mustafa Raza Khan
        </small>
      </div>
    </footer>
  );
};

export default AdminFooter;
