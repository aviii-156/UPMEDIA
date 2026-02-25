import { FaWhatsapp } from 'react-icons/fa';

const menuItems = ['Portfolio', 'Services', 'Client Success', 'About Us'];

function Navbar() {
  return (
    <header className="top-nav-wrap">
      <nav className="top-nav section-shell">
        <a href="#" className="logo" aria-label="UPEVIN MEDIA">
          <span className="logo-main">UPEVIN</span>
          <span className="logo-accent">MEDIA</span>
        </a>

        <ul className="menu-pill">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
          <li>
            <a href="#" className="whatsapp-link" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#" className="btn btn-outline">Get In Touch</a>
          <a href="#" className="btn btn-filled">Book a call</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;