import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DataProvider } from './context/DataProvider';

import HomeScreen from './screens/HomeScreen';
import Infomation from './screens/Infomation';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={({ navigation }) => ({
							title: 'ChatGPT AI',
							headerStyle: { backgroundColor: '#222f3e' },
							headerTitleStyle: { color: '#fff' },
							headerTintColor: '#fff',
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate('Infomation')}>
									<Text style={{ color: '#fff', marginRight: 10 }}>About</Text>
								</TouchableOpacity>
							),
						})}
					/>
					<Stack.Screen
						name="Infomation"
						component={Infomation}
						options={{
							title: 'Infomation',
							headerStyle: { backgroundColor: '#222f3e' },
							headerTitleStyle: { color: '#fff' },
							headerTintColor: '#fff',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}
