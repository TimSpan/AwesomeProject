import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from '@/navigation/AppNavigation';
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}

// // App.tsx
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Entypo } from '@react-native-vector-icons/entypo';
// import { AntDesign } from '@react-native-vector-icons/ant-design';
// import HomeScreen from './screens/HomeScreen';
// import CameraScreen from './screens/CameraScreen';
// import VideoScreen from './screens/VideoScreen';
// import TestScreen from './screens/TestScreen';
// import LoginScreen from './screens/LoginScreen';
// import { useAuthStore } from './stores/auth';
// import SplashScreen from './screens/SplashScreen';
// import { useState, useEffect } from 'react';
// import { RootStackParamList } from './navigation/types';
// // const RootStack = createNativeStackNavigator<RootStackParamList>();

// const CameraStack = createNativeStackNavigator<RootStackParamList>();

// // ===== Stack 定义 =====
// // const HomeStack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (
//     <CameraStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <CameraStack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: '功能首页' }}
//       />

//       <CameraStack.Screen
//         name="Test"
//         component={TestScreen}
//         options={{ title: '测试' }}
//       />
//       <CameraStack.Screen
//         name="Camera"
//         component={CameraScreen}
//         options={{ title: '拍照' }}
//       />
//       <CameraStack.Screen
//         name="Video"
//         component={VideoScreen}
//         options={{ title: '录像' }}
//       />
//     </CameraStack.Navigator>
//   );
// }

// // const CameraStack = createNativeStackNavigator();
// function CameraStackScreen() {
//   return (
//     <CameraStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <CameraStack.Screen
//         name="Camera"
//         component={CameraScreen}
//         options={{ title: '拍照' }}
//       />
//     </CameraStack.Navigator>
//   );
// }

// const VideoStack = createNativeStackNavigator();
// function VideoStackScreen() {
//   return (
//     <VideoStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <VideoStack.Screen
//         name="Video"
//         component={VideoScreen}
//         options={{ title: '录像' }}
//       />
//     </VideoStack.Navigator>
//   );
// }

// const TestStack = createNativeStackNavigator();
// function TestStackScreen() {
//   return (
//     <TestStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <TestStack.Screen
//         name="TestMain"
//         component={TestScreen}
//         options={{ title: '测试' }}
//       />
//     </TestStack.Navigator>
//   );
// }

// // ===== Tabs 定义 =====
// const Tab = createBottomTabNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false, // 这里关掉 Tab 自带的头部，用各自 Stack 的
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: any = 'home';
//           if (route.name === 'HomeTab') iconName = 'home';
//           else if (route.name === 'CameraTab') iconName = 'camera';
//           else if (route.name === 'VideoTab') iconName = 'play-square';
//           else if (route.name === 'TestTab') iconName = 'java-script';
//           return <AntDesign name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#007bff',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeStackScreen}
//         options={{ title: '首页' }}
//       />
//       <Tab.Screen
//         name="CameraTab"
//         component={CameraStackScreen}
//         options={{ title: '拍照' }}
//       />
//       <Tab.Screen
//         name="VideoTab"
//         component={VideoStackScreen}
//         options={{ title: '录像' }}
//       />
//       <Tab.Screen
//         name="TestTab"
//         component={TestStackScreen}
//         options={{ title: '测试' }}
//       />
//     </Tab.Navigator>
//   );
// }

// // ===== App 主入口 =====
// const Stack = createNativeStackNavigator();

// export default function App() {
//   const { token, restoreToken } = useAuthStore();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     restoreToken().finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     // ✅ 恢复 token 期间只显示加载页（可替换成你的 SplashScreen）
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Splash"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {token ? (
//         <MainTabs /> // 登录后就是 Tabs
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// // App.tsx
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen.tsx';
// import CameraScreen from './screens/CameraScreen.tsx';
// import VideoScreen from './screens/VideoScreen.tsx';
// import TestScreen from './screens/TestScreen.tsx';
// import LoginScreen from './screens/LoginScreen.tsx';

// import SplashScreen from './screens/SplashScreen.tsx';

// import { RootStackParamList } from './navigation/types.ts';
// import { useAuthStore } from './stores/auth.ts';
// import { useEffect, useState } from 'react';
// import { StatusBar } from 'react-native';

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   const { token, restoreToken } = useAuthStore();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     console.log(111111111111111);
//     // App 启动时恢复 token
//     restoreToken().finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     // ✅ 恢复 token 期间只显示加载页（可替换成你的 SplashScreen）
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Splash"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {token ? (
//             // 已登录页面
//             <>
//               <Stack.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                   title: '功能首页',
//                   headerStyle: { backgroundColor: '#007bff' }, // 导航栏背景色
//                   headerTintColor: '#fff', // 标题和返回按钮颜色
//                 }}
//               />
//               <Stack.Screen
//                 name="Camera"
//                 component={CameraScreen}
//                 options={{
//                   title: '拍照',
//                   headerStyle: { backgroundColor: '#007bff' }, // 导航栏背景色
//                   headerTintColor: '#fff', // 标题和返回按钮颜色
//                 }}
//               />
//               <Stack.Screen
//                 name="Video"
//                 component={VideoScreen}
//                 options={{
//                   title: '录像',
//                   headerStyle: { backgroundColor: '#007bff' }, // 导航栏背景色
//                   headerTintColor: '#fff', // 标题和返回按钮颜色
//                 }}
//               />
//               <Stack.Screen
//                 name="Test"
//                 component={TestScreen}
//                 options={{
//                   title: '录像',
//                   headerStyle: { backgroundColor: '#007bff' }, // 导航栏背景色
//                   headerTintColor: '#fff', // 标题和返回按钮颜色
//                 }}
//               />
//             </>
//           ) : (
//             // 未登录页面
//             <Stack.Screen
//               name="Login"
//               component={LoginScreen}
//               options={{ headerShown: false }}
//             />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }
