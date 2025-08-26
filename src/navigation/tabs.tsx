// routes/tabs.ts
import HomeScreen from '@/screens/HomeScreen';
import { Index2 } from '@/screens/test/index2';
import { AntDesign } from '@react-native-vector-icons/ant-design';
export const tabs = {
  HomeTab: {
    screen: HomeScreen,
    options: {
      title: '首页',
      // @ts-ignore
      tabBarIcon: ({ color, size }) => (
        <AntDesign name={'home'} size={size} color={color} />
      ),
    },
  },
  SettingsTab: {
    screen: Index2,
    options: {
      title: '设置',
      // @ts-ignore
      tabBarIcon: ({ color, size }) => (
        <AntDesign name={'camera'} size={size} color={color} />
      ),
    },
  },
};
