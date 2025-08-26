import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabs } from './tabs';
export const MainTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: '#007bff',
  },
  screens: tabs,
});
