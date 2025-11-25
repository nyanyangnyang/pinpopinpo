import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { User } from '../types';
import { STORAGE_KEYS } from '../constants';

/**
 * 사용자 인증 관련 커스텀 훅
 */
export function useAuth() {
  const [user, setUser, removeUser] = useLocalStorage<User | null>(
    STORAGE_KEYS.USER,
    null
  );

  const login = useCallback((userData: User) => {
    setUser(userData);
  }, [setUser]);

  const logout = useCallback(() => {
    removeUser();
    // 관련 데이터도 삭제
    window.localStorage.removeItem(STORAGE_KEYS.USER_SCORES);
    window.localStorage.removeItem(STORAGE_KEYS.ANALYSIS_DATA);
  }, [removeUser]);

  const isLoggedIn = Boolean(user);

  return {
    user,
    login,
    logout,
    isLoggedIn,
  };
}

