import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { getTodayIntention, markIntentionComplete } from '../services/intentionService';
import { Intention } from '../types/intention';

export default function HomeScreen() {
  const [intention, setIntention] = useState<Intention | null>(null);

  useEffect(() => {
    getTodayIntention().then(setIntention);
  }, []);

  if (!intention) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{intention.title}</Text>
      <Text>{intention.description}</Text>
      {intention.completed ? (
        <Text>✅ Completed</Text>
      ) : (
        <Button
          title="Mark as Complete"
          onPress={async () => {
            const updated = await markIntentionComplete();
            setIntention(updated);
          }}
        />
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
