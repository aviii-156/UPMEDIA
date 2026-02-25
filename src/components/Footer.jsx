import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer section-shell">
      <div>
        <h3>UPEVIN MEDIA</h3>
        <p>Creators. Influencers. Businesses. Brands. One premium visual standard.</p>
      </div>
      <div className="footer-links">
        <a href="#">Portfolio</a>
        <a href="#">Services</a>
        <a href="#">Client Success</a>
        <a href="#">About Us</a>
      </div>
      <div className="socials">
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>
    </footer>
  );
}

export default Footer;