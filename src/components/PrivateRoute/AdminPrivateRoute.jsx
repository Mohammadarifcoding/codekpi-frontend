"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setLocalStorage } from '../shared/LocalStorage/LocalStorage';
import { useGetVerifyQuery } from '../Redux/services/AuthenticationApi/AuthenticationApi';

const AdminPrivateRoute = ({ children }) => {
  const router = useRouter();
  const { token} = useSelector((state) => state.auth);
  const pathname = usePathname();
  const { data, isSuccess, isLoading, isError } = useGetVerifyQuery();
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    if (!token) {
      setLocalStorage("redirectPath", pathname);
      router.replace('/login');
    } else if (isSuccess && data?.data?.role) {
      const userRole = data.data.role;

      // Check if the role is 'admin'
      if (userRole === 'admin') {
        setIsAuthorized(true);
      } else {
        router.push('/login'); 
      }
    }
  }, [router, isSuccess, data, token, pathname]);

  if (isLoading || !isAuthorized) {
    return null; 
  }

  return <>{children}</>;
};

export default AdminPrivateRoute;
