import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Message } from '../models/message.model';

export const ChatMessage = ({ user, message }: { user: string, message: Message }) => {
  const isUserAuthor = user === message.author;

  return (
    <View>
      <View style={[styles.root, isUserAuthor ? styles.sended : styles.received]}>
        <Text style={{ color: isUserAuthor ? 'white' : 'black' }}>{message.content}</Text>
      </View>

      <Text style={[styles.timestamp, { alignSelf: isUserAuthor ? 'flex-end' : 'flex-start' }]}>
        {`${message.author}, ${moment(message.createdAt).fromNow()}`}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  root: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'green',
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 4,
    marginTop: 8,
    alignSelf: 'flex-end',
    maxWidth: '65%'
  },
  sended: {
    alignSelf: 'flex-end',
    backgroundColor: '#a797ff',
    borderBottomRightRadius: 1
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
    borderBottomLeftRadius: 1
  },
  timestamp: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'grey',
    marginRight: 8,
    marginLeft: 8,
  }
});