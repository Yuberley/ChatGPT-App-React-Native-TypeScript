import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

type MessageProps = {
	message: {
		id: number;
		text: string;
		user: {
			id: number;
			name: string;
			avatar: string;
		};
	};
};

const Message = ({ message }: MessageProps) => {
	return (
		<View style={ message.user.name === 'you' ? styles.messageyou : styles.messagechatgpt }>
			<TouchableOpacity>
				<Text style={styles.author}>{message.user.name}</Text>
				<Text style={styles.text}>{message.text}</Text>
				<Image source={{ uri: message.user.avatar }} />
			</TouchableOpacity>
		</View>
	);
};

export default Message;

const styles = StyleSheet.create({
	messagechatgpt: {
		backgroundColor: '#122f3e',
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
	messageyou: {
		backgroundColor: '#285B7A',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		textAlign: 'right',
	},
	author: {
		color: '#fff',
		fontSize: 12,
    fontStyle: 'italic',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
});
