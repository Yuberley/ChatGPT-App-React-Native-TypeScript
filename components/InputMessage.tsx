import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const InputMessage = () => {
	const [text, setText] = useState<string>('');

	return (
		<View style={styles.inputMessage}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setText(text)}
				value={text}
			/>
			<TouchableOpacity style={styles.button} onPress={() => alert(text)}>
				<FontAwesome name="send" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default InputMessage;

const styles = StyleSheet.create({
	inputMessage: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '75%',
		height: 50,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
		color: '#ffffff',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#222f3e',
	},
	button: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '15%',
		height: 50,
		marginLeft: 10,
		textAlign: 'center',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#10ac84',
	},
});
