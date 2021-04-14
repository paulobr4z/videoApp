import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Inicio from '../pages/Inicio';
import Pesquisar from '../pages/Pesquisar';
import EmBreve from '../pages/EmBreve';
import SaibaMais from '../pages/SaibaMais';

const Tab = createMaterialBottomTabNavigator();

function InicioTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#ffffff"
      inactiveColor="#626262"
      barStyle={{ backgroundColor: '#121212' }}
    >
      <Tab.Screen
        name='Inicio'
        component={Inicio}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name='Pesquisar'
        component={Pesquisar}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color }) => (
            <Icon name='search' color={color} size={20} />
          )
        }}
      />
      <Tab.Screen
        name='EmBreve'
        component={EmBreve}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({ color }) => (
            <Icon2 name='play-box-multiple' color={color} size={22} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerMode='none'
    >

      <Stack.Screen
        name="Home"
        component={InicioTabs}
      />

      <Stack.Screen
        name="SaibaMais"
        component={SaibaMais}
      />

    </Stack.Navigator>
  )
};