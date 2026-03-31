import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <img src="/images/Relentless_Games_Logo.png" alt="Relentless Games" />
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Relentless Games. All rights reserved.</p>
        <div className="footer__links">
          <Link to="/privacy">Privacy Policy &amp; Terms</Link>
        </div>
      </div>
    </footer>
  );
}
