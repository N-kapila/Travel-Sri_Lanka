import { Image, StyleSheet, Platform, Pressable , View,Text} from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Octicons from '@expo/vector-icons/Octicons'

export default function HomeScreen() {
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext);
  const styles = createStyles(theme, colorScheme);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        style={{ marginLeft: 10 }}
      >
        <Octicons
          name={colorScheme === 'dark' ? 'moon' : 'sun'}
          size={50}
          color={theme.text}
          style={{width: 50,
          }}
        />
      </Pressable>
     
    </View>
  );
}

const createStyles = (theme, colorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
  },
  text: {
    color: theme.text,
    marginTop: 10,
  },
});