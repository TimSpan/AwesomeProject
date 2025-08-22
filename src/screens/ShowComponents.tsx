// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { WebView } from 'react-native-webview';

// export default function ShowComponents({}) {
//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: 'file:///android_asset/amap.html' }} // Android 本地 assets
//         // iOS 要用 require("./amap.html")
//         onMessage={event => {
//           const data = JSON.parse(event.nativeEvent.data);
//           console.log('地图点击坐标:', data);
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { height: 300 },
// });

import { BackHandler, Platform, StyleSheet, View } from 'react-native';
import { api } from '../api/request';
import { useEffect, useState } from 'react';
import { MapView, MapType, AMapSdk } from 'react-native-amap3d';
import { Map } from '@/components/AMap/index';
export default function ShowComponents({ route, navigation }: any) {
  // useEffect(() => {
  //   AMapSdk.init(
  //     Platform.select({
  //       android: '931f546ff41304c6ef2bbe4e787e3993',
  //       ios: '931f546ff41304c6ef2bbe4e787e3993',
  //     }),
  //   );
  // }, []);
  const [center, setCenter] = useState(void 0);
  return (
    <View style={{ height: 500 }}>
      {/* <Map center={center} /> */}
    </View>
    // <View style={styles.container}>
    //   <MapView
    //     mapType={MapType.Standard}
    //     initialCameraPosition={{
    //       target: {
    //         latitude: 28.24,
    //         longitude: 112.82,
    //       },
    //       zoom: 12,
    //     }}
    //   />
    // </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
