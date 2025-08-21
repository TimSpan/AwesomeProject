// src/screens/HomeScreen.tsx
import React, { useState } from 'react';

import { Button as NButton } from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAuthStore } from '@/stores/auth';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const logout = useAuthStore(state => state.logout); // 必须在组件顶层调用
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View>
          <NButton
            mode="contained-tonal"
            onPress={() => {
              logout();
            }}
          >
            退出登录
          </NButton>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            // navigation.navigate('Test')
            navigation.getParent()?.navigate('Test', { params: 1111 });
          }}
        >
          <Text>测试页面</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            // navigation
            //   .getParent()
            //   ?.navigate('ShowComponents', { params: 1111 });

            navigation.navigate('ShowComponents', { params: 1111 });
          }}
        >
          <Text>组件展示</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Camera', { setPhotoUri })}
        >
          <Text>📷 拍照</Text>
          {photoUri && (
            <Image source={{ uri: photoUri }} style={styles.preview} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Video', { setVideoUri })}
        >
          <Text>🎥 录像</Text>
          {videoUri && <Text style={{ fontSize: 12 }}>视频已录制</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: '#007bff' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-around',
  },
  item: {
    width: '40%',
    height: 120,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  preview: { width: 60, height: 60, marginTop: 10, borderRadius: 8 },
});
