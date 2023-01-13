import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { messagesData } from '../data/messages';
import { useFetchMessage } from '../hooks/useFetchMessage';
import Message from './Message';
import { DataContext } from '../context/DataProvider';
import { MessageType } from '../types/types';


const ListMessage = () => {

	const [messages, setMessages] = useState<MessageType[]>(messagesData);

	const { textInput } = useContext<any>(DataContext);
	
	const { data } = useFetchMessage(textInput);
	useEffect(() => {
		if (data) {
			setMessages((messages) => [...messages, data]);
		}
	}, [data]);

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
