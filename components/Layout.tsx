import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={'#222f3e'} barStyle={'light-content'} />
			{children}
		</View>
	);
};

export default Layout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 35,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#222f3e',
	},
});
