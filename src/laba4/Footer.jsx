import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem('systemInfo', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Моє Портфоліо</p>
      {sysInfo && (
        <small>
          Платформа: {sysInfo.platform} | Браузер: {sysInfo.userAgent}
        </small>
      )}
    </footer>
  );
};

export default Footer;