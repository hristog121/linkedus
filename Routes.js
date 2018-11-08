import React from 'react';
import { Button, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import AutLog from "./AutLog.js";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('AutLog')}
        />
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messages!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class FavoriteScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AutLog />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  AutLog: { screen: LoginScreen },
});

const MessageStack = createStackNavigator({
  Message: { screen: MessageScreen },
  Details: { screen: DetailsScreen },
});

const FavoriteStack = createStackNavigator({
  Favorite: { screen: FavoriteScreen },
  Details: { screen: DetailsScreen },
});

export default createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Favorite: { screen: FavoriteStack },
    Message: { screen: MessageStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Message') {
          iconName = 'md-chatboxes';
        } else if (routeName === 'Favorite') {
          iconName = 'ios-heart';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);
