import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import { join } from '../actions';

export const Home = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  const openChat = () => {
    dispatch(join(user, room));
    Actions.chat({ title: `Room ${room}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome !</Text>

      <TextInput
        style={styles.input}
        value={user}
        placeholder="Blank for being totally anonymous"
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        value={room}
        placeholder="Red room name"
        onChangeText={setRoom}
      />

      <Button title="Lets' Chat!" onPress={openChat} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2194f3',
    borderStyle: 'solid',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  }
});
