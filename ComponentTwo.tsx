import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';

export default function ComponentTwo() {
  const position = useSharedValue(100);
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
      transform: [{ translateX: position.value }],
    };
  });
  const childrenStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'blue',
    };
  });

  return (
    <Animated.View style={[style, styles.container]}>
      <Animated.View style={[childrenStyle, styles.container]}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
