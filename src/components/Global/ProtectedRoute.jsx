import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../context/store';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuth && !loading) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
