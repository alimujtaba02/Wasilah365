import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function IntentionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intentions</Text>
      <Text>This is the Intentions screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
