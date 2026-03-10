import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {

return (

<footer className="footer">

<div className="container footer-grid">

{/* BRAND */}

<div className="footer-brand">

<h3>RJ Atlas Jewellery</h3>

<p>
Luxury jewellery crafted with elegance, precision and timeless beauty.
Discover collections designed for every special moment.
</p>

<div className="footer-social">

<a href="#"><FaInstagram /></a>
<a href="#"><FaWhatsapp /></a>
<a href="#"><FaFacebookF /></a>

</div>

</div>


{/* QUICK LINKS */}

<div>

<h4>Quick Links</h4>

<ul className="footer-links">

<li>Home</li>
<li>Collections</li>
<li>Products</li>
<li>About Us</li>
<li>Contact</li>

</ul>

</div>


{/* CATEGORIES */}

<div>

<h4>Categories</h4>

<ul className="footer-links">

<li>Rings</li>
<li>Bangles</li>
<li>Earrings</li>
<li>Pendants</li>
<li>Bracelets</li>

</ul>

</div>


{/* CONTACT */}

<div>

<h4>Contact</h4>

<ul className="footer-contact">

<li><FaMapMarkerAlt /> Kannur, Kerala</li>
<li><FaPhoneAlt /> +91 98765 43210</li>
<li><FaWhatsapp /> WhatsApp Support</li>

</ul>

</div>

</div>


<div className="footer-bottom">

<p>© 2026 RJ Atlas Jewellery. All Rights Reserved.</p>

</div>

</footer>

);

}

export default Footer;