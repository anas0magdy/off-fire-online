import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // يرفع الصفحة لأعلى عند تغيير المسار (Path)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;