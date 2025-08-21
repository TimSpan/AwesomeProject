import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ShowComponents({}) {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'file:///android_asset/amap.html' }} // Android 本地 assets
        // iOS 要用 require("./amap.html")
        onMessage={event => {
          const data = JSON.parse(event.nativeEvent.data);
          console.log('地图点击坐标:', data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300 },
});

// import { BackHandler, StyleSheet, View } from 'react-native';
// import { api } from '../api/request';
// import { useEffect, useState } from 'react';
// import { MapView, MapType } from 'react-native-amap3d';

// export default function ShowComponents({ route, navigation }: any) {
//   useEffect(() => {
//     const unsubscribe = navigation.addListener(
//       'beforeRemove',
//       (e: { preventDefault: () => void }) => {
//         e.preventDefault();
//         navigation.goBack();
//       },
//     );

//     return unsubscribe;
//   }, [navigation]);
//   useEffect(() => {
//     const backAction = () => {
//       if (navigation.canGoBack()) {
//         navigation.goBack(); // 返回上一页
//         return true; // 阻止默认行为（退出应用）
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, [navigation]);
//   return (
//     <View style={styles.container}>
//       <MapView
//         mapType={MapType.Standard}
//         initialCameraPosition={{
//           target: {
//             latitude: 28.24,
//             longitude: 112.82,
//           },
//           zoom: 12,
//         }}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });
