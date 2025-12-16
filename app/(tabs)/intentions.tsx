import { Text, View } from '@/components/Themed';
import * as Router from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { setTodayIntention } from '../services/intentionService';

export default function IntentionsScreen() {
  const navigation = Router.useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('Enter your intention for today.');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      setMessage('Please enter a title and description before saving.');
      return;
    }

    setIsSaving(true);
    try {
      await setTodayIntention(
        title.trim(),
        description.trim(),
        category.trim() || undefined,
      );
      setMessage("Today's intention has been set!");
      setTitle('');
      setDescription('');
      setCategory('');
      navigation.replace('/(tabs)/home');
    } catch (error) {
      setMessage('Unable to save your intention. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intentions</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category (optional)"
        value={category}
        onChangeText={setCategory}
      />
      <Text style={styles.status}>{message}</Text>
      <Button
        title={isSaving ? 'Saving...' : 'Save Intention'}
        onPress={handleSave}
        disabled={isSaving}
      />
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
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  status: {
    marginBottom: 12,
  },
});
