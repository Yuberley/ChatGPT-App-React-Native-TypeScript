import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';

import { messagesData } from '../data/messages';
import Message from './Message';

interface messagesText {
	id: number;
	text: string;
	user: {
		id: number;
		name: string;
		avatar: string;
	};
}

const ListMessage = () => {
	const [messages, setMessages] = useState<messagesText[]>(messagesData);

	const renderMessages = () => {
		return messages.map((message) => <Message key={message.id} message={message} />);
	};

	return (
		<View>
			<FlatList
        style={styles.listContainer}
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
				keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => setMessages([])}
            />
        }
			/>
		</View>
	);
};

export default ListMessage;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222f3e',
    marginBottom: 35,
  },
});
