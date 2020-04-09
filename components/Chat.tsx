import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '../models/message.model';
import { RootState } from '../reducers';
import { ChatMessage } from './';

export const Chat = () => {
  const dispatch = useDispatch();

  const { user, messages } = useSelector(
    ({ chat: { user, messages } }: RootState) => ({ user, messages })
  );
  
  const [newMessageContent, setNewMessageContent] = useState('');
  /* const [messages, setMessages] = useState([
    { content: 'Contenu -18', author: 'Robert', createdAt: new Date() },
    { content: 'Contenu -12', author: 'Daniel', createdAt: new Date() },
    { content: 'Teenagers', author: 'Daniel', createdAt: new Date() },
  ]); */

  const getNewMessage = (content: string): Message => {
    return { author: user, content, createdAt: new Date() }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.joinNotification}>{user} joined the room.</Text>

      <FlatList
        data={messages.map((message, i) => ({ ...message, key: `message_${i}` }))}
        renderItem={({ item: message }) => <ChatMessage user={user} message={message} />}
      />

      <View style={styles.messageBar}>
        <TextInput
          clearButtonMode='while-editing'
          style={styles.chatInput}
          value={newMessageContent}
          placeholder="Send message"
          onChangeText={setNewMessageContent}
        />
        <Button
          title="SEND"
          onPress={() => dispatch([...messages, getNewMessage(newMessageContent)])}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  joinNotification: {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 12,
    alignSelf: 'center',
    margin: 16
  },
  messageBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 16,
    flex: 0,
  },
  chatInput: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2194f3',
    borderStyle: 'solid',
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: '70%',
    marginRight: 16
  }
});