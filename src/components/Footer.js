// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "15px 20px",
        marginTop: "40px",
        maxWidth: "1300px",   // rộng bằng phần nội dung
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <p style={{ margin: 0, color: "#000" }}>
          No 8 - Ton That Thuy - My Dinh, Nam Tu Liem, Ha Noi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
