// import { Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Provider, BottomNavigation } from 'react-native-paper';
// import { AntDesign } from '@react-native-vector-icons/ant-design';
// // import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// import {
//   CommonActions,
//   createStaticNavigation,
// } from '@react-navigation/native';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const MyTabs = createBottomTabNavigator({
//   screenOptions: {
//     animation: 'shift',
//   },
//   tabBar: ({ navigation, state, descriptors, insets }) => (
//     <BottomNavigation.Bar
//       navigationState={state}
//       safeAreaInsets={insets}
//       onTabPress={({ route, preventDefault }) => {
//         const event = navigation.emit({
//           type: 'tabPress',
//           target: route.key,
//           canPreventDefault: true,
//         });

//         if (event.defaultPrevented) {
//           preventDefault();
//         } else {
//           navigation.dispatch({
//             ...CommonActions.navigate(route.name, route.params),
//             target: state.key,
//           });
//         }
//       }}
//       renderIcon={({ route, focused, color }) =>
//         descriptors[route.key].options.tabBarIcon?.({
//           focused,
//           color,
//           size: 24,
//         }) || null
//       }
//       getLabelText={({ route }) => {
//         const { options } = descriptors[route.key];
//         const label =
//           typeof options.tabBarLabel === 'string'
//             ? options.tabBarLabel
//             : typeof options.title === 'string'
//             ? options.title
//             : route.name;

//         return label;
//       }}
//     />
//   ),
//   screens: {
//     Home: {
//       screen: HomeScreen,
//       options: {
//         tabBarIcon: ({ color }) => (
//           <AntDesign name="home" color={color} size={26} />
//         ),
//       },
//     },
//     Settings: {
//       screen: SettingsScreen,
//       options: {
//         tabBarIcon: ({ color }) => (
//           <AntDesign name="camera" color={color} size={26} />
//         ),
//       },
//     },
//   },
// });

// const Navigation = createStaticNavigation(MyTabs);

// export default function App() {
//   return (
//     <Provider>
//       <Navigation>
//         <MyTabs />
//       </Navigation>
//     </Provider>
//   );
// }

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import { useState } from 'react';
// import { View } from 'react-native';
// import { BottomNavigation, Text, Provider } from 'react-native-paper';
// import { RootStackParamList } from './types';
// import HomeScreen from '@/screens/HomeScreen';
// import { Index2 } from '@/screens/test/index2';
// import { Index3 } from '@/screens/test/index3';

// const RootStack = createNativeStackNavigator<RootStackParamList>();
// function HomeStackScreen() {
//   return (
//     <RootStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <RootStack.Screen
//         name="HomeMain"
//         component={HomeScreen}
//         options={{ title: '功能首页' }}
//       />
//     </RootStack.Navigator>
//   );
// }

// function Index2_() {
//   return (
//     <RootStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <RootStack.Screen
//         name="Index2"
//         component={Index2}
//         options={{ title: 'index2' }}
//       />
//     </RootStack.Navigator>
//   );
// }
// function Index3_() {
//   return (
//     <RootStack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#007bff' },
//         headerTintColor: '#fff',
//       }}
//     >
//       <RootStack.Screen
//         name="Index3"
//         component={Index3}
//         options={{ title: 'index3' }}
//       />
//     </RootStack.Navigator>
//   );
// }

// export default function MyComponent() {
//   const [index, setIndex] = useState(0);

//   const routes = [
//     { key: 'home', title: '首页', icon: 'home' },
//     { key: 'index2', title: 'index2', icon: 'cog' },
//     { key: 'index3', title: 'index3', icon: 'cog' },
//   ];
//   // @ts-ignore
//   const renderScene = ({ route }) => {
//     switch (route.key) {
//       case 'home':
//         return <HomeStackScreen />;
//       case 'index2':
//         return <Index2_ />;
//       case 'index3':
//         return <Index3_ />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Provider>
//       {renderScene({ route: routes[index] })}
//       <BottomNavigation.Bar
//         navigationState={{ index, routes }}
//         onTabPress={({ route }) => {
//           const newIndex = routes.findIndex(r => r.key === route.key);
//           if (newIndex !== -1) {
//             setIndex(newIndex);
//           }
//         }}
//         renderIcon={({ route, color }) => (
//           <Text>111</Text>
//           //   <Icon name={route.icon} size={24} color={color} />
//         )}
//         getLabelText={({ route }) => route.title}
//       />
//     </Provider>
//   );
// }
