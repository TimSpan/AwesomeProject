import { useAuthStore } from '@/stores/auth';
import * as React from 'react';
export const AuthContext = React.createContext<any>(null);
export const SignInContext = React.createContext<boolean>(false);
// const SignInContext = React.createContext();
export const useIsSignedIn = () => {
  const state = useAuthStore.getState();
  console.log('_________________________ ~ useIsSignedIn ~ state:', state);
  return !!state.token;
};

export const useIsSignedOut = () => !useIsSignedIn();
