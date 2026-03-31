import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy">
      <div className="container">
        <Link to="/" className="privacy__back">&larr; Back to Home</Link>

        <h1>Privacy Policy for Relentless Games</h1>
        <p className="privacy__updated">Last updated: January 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Relentless Games. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>2. Data We Collect</h2>
        <p>
          We do not collect any personal data from our visitors. When you visit our website, you can browse without having to provide any personal information.
        </p>

        <h2>3. Use of Cookies and Tracking</h2>
        <p>
          Our website does not use cookies or any form of tracking technologies that collect personal information about visitors.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We have put in place suitable security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. However, as we do not collect personal data, the risk to your personal data is minimal.
        </p>

        <h2>6. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, such as the right to request access, correction, erasure, or transfer of your personal data. Since we do not collect any personal data, these rights may not be applicable.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{' '}
          <a href="mailto:hello@relentless.games">hello@relentless.games</a>.
        </p>
      </div>
    </div>
  );
}
