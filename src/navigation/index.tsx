import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/screens/SplashScreen';
import { useAuthStore } from '@/stores/auth';
import { MainTabs } from './MainTabs';
import LoginScreen from '@/screens/LoginScreen';
import { createStaticNavigation } from '@react-navigation/native';
export const RootStack = createNativeStackNavigator({
  screens: {
    Splash: {
      screen: SplashScreen,
      options: { headerShown: false },
    },
    SignIn: {
      if: () => !useAuthStore.getState().token, // 登录状态控制
      screen: LoginScreen,
      options: { title: '登录' },
    },
    MainTabs: {
      if: () => !!useAuthStore.getState().token,
      screen: MainTabs, // 这里放 Tab 容器
    },
  },
});

// ✅ 导出静态导航
export const Navigation = createStaticNavigation(RootStack);
