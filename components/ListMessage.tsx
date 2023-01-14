import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import uuid from 'react-uuid';

// import { messagesData } from '../data/messages';
import { useFetchMessage } from '../hooks/useFetchMessage';
import Message from './Message';
import { DataContext } from '../context/DataProvider';
import { MessageType } from '../types/types';


const ListMessage = () => {

	const [messages, setMessages] = useState<MessageType[]>([]);
	console.log('messagesSide', messages.length);
	
	const { textInput } = useContext<any>(DataContext);

	console.log('textInput', textInput.text);
	
	const { data, isLoading } = useFetchMessage(textInput.text);

	console.log('getMessageOutput: ', data.text );

	useEffect(() => {
		
		if (textInput?.text) {
			setMessages((messages) => [...messages, textInput]);
		}

		if (!!data?.text) {
			setMessages((messages) => [...messages, data]);
		}

	}, [data, data.text]);
	
	console.log('messagesDown', messages.length);
	console.log('isLoading', isLoading);

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
