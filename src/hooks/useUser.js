import { useState, useEffect } from 'react';
import { getLocalStorage } from '@/components/shared/LocalStorage/LocalStorage'; // Assuming you already have this function

const useUser = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUser = getLocalStorage('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUserRole(parsedUser?.role);
    }
  }, []);

  return { user, userRole };
};

export default useUser;
