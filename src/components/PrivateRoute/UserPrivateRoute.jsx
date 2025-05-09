"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetVerifyQuery } from '../Redux/services/AuthenticationApi/AuthenticationApi';
import { setLocalStorage } from '../shared/LocalStorage/LocalStorage';

const UserPrivateRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { token} = useSelector((state) => state.auth);
  const { data, isSuccess, isLoading, isError } = useGetVerifyQuery();
  
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {

    if (!token) {
      setLocalStorage("redirectPath", pathname);
      router.replace('/login');
    } else if (isSuccess && data?.data?.role) {
      const userRole = data.data.role;
      if (userRole === 'admin' || userRole === 'user') {
        setIsAuthorized(true);
      } else {
        router.push('/login'); 
      }
    }
  }, [router, isSuccess, data, token, pathname]);

  if (isLoading || !isAuthorized) {
    return null; // Or a loading spinner while verifying
  }

  return <>{children}</>;
};

export default UserPrivateRoute;
