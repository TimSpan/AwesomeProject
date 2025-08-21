import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { AMapSdk } from 'react-native-amap3d';
import { Platform } from 'react-native';
AppRegistry.registerComponent(appName, () => App);
AMapSdk.init(
  Platform.select({
    android: '931f546ff41304c6ef2bbe4e787e3993',
  }),
);
