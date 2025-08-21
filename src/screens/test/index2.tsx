import { BackHandler, StyleSheet, View } from 'react-native';

import { useEffect, useState } from 'react';
import { MapView, MapType } from 'react-native-amap3d';
export function Index2({ route, navigation }: any) {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <MapView
        mapType={MapType.Standard}
        initialCameraPosition={{
          target: {
            latitude: 28.24,
            longitude: 112.82,
          },
          zoom: 12,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  preview: { width: 200, height: 200, marginTop: 20 },
  h: {
    height: 300,
  },
});
