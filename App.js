import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator();

/* 主 Tab */
const Home = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home1" component={() => (<Text>Home1</Text>)} />
    <Stack.Screen name="Home2" component={() => (<Text>Home2</Text>)} />
  </Stack.Navigator>
);
const Profile = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile1" component={() => (<Text>Profile1</Text>)} />
    <Stack.Screen name="Profile2" component={() => (<Text>Profile2</Text>)} />
  </Stack.Navigator>
);
const Settings = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings1" component={() => (<Text>Settings1</Text>)} />
    <Stack.Screen name="Settings2" component={() => (<Text>Settings2</Text>)} />
  </Stack.Navigator>
);

const Main = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
