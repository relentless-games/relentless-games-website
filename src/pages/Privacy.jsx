import { Link } from 'react-router-dom';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="privacy">
      <div className="container">
        <Link to="/" className="privacy__back">&larr; Back to Home</Link>

        <h1>Privacy Policy &amp; Terms of Service</h1>
        <p className="privacy__updated">Last updated: March 31, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to the Relentless Games website. This Privacy Policy explains how we collect, 
          use, and protect your personal information when you visit our website or interact with our services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information you provide directly, such as your name and email address 
          when you contact us. We also automatically collect certain technical data including 
          browser type, IP address, and pages visited.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use collected information to operate and improve our website, communicate with you, 
          and ensure the security of our services.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          Our website may contain embedded content (e.g., YouTube videos) that is served by 
          third parties. These services may collect data about you according to their own privacy policies.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We take reasonable measures to protect your information. However, no method of 
          transmission over the internet is 100% secure.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions about this policy, please contact us at{' '}
          <a href="mailto:g@relentless.games">g@relentless.games</a>.
        </p>

        <h2>7. Terms of Service</h2>
        <p>
          By using this website, you agree to these terms. We reserve the right to update 
          these terms at any time. Continued use of the site constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
