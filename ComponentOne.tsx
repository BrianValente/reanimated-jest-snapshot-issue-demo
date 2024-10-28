import { Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export default function ComponentOne() {
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
    };
  });
  const childrenStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'blue',
    };
  });

  return (
    <Animated.View style={[style]}>
      <Animated.View style={[childrenStyle]}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Animated.View>
    </Animated.View>
  );
}
