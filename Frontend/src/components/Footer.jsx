import React from "react";

function Footer() {
  return (

    <footer style={{ backgroundColor: '#754C24', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px', fontSize: '14px' }}>
        <a href="#Terms" style={{ color: 'white', textDecoration: 'none' }}>Terms & Condition</a>
        <a href="#Policies" style={{ color: 'white', textDecoration: 'none' }}>Website Policies</a>
        <a href="#Help" style={{ color: 'white', textDecoration: 'none' }}>Help</a>
        <a href="#Feedback" style={{ color: 'white', textDecoration: 'none' }}>Feedback</a>
        <a href="#WebInfo" style={{ color: 'white', textDecoration: 'none' }}>Web Information Manager</a>
        <a href="#Yeild" style={{ color: 'white', textDecoration: 'none' }}>Yeild Predection</a>

        <a href="#Contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
      </div>
      <div style={{ textAlign: 'center', fontSize: '12px' }}>
        <p>Website Content Owned & Managed by Agro-Help </p>
        <p>Designed and Developed by Divyanshu, Aqdas, Junaid & Shahil , Under Professor Surajit Das MSIT Kolkata, India.</p>
        <p>Last Updated On: 5 Apr 2025</p>
        {/* <p>Visitors: </p> */}
      </div>
    </footer>
  );
}

export default Footer;
