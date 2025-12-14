import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {isComplete ? (
        <Text>Intention marked as complete!</Text>
      ) : (
        <>
          <Text>This is my intention today</Text>
          <Button
            title="Intention Complete"
            onPress={() => setIsComplete(true)}
          />
        </>
      )}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
