import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import { Platform, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text } from 'react-native';
import HomeScreen from './index';
import ExploreScreen from './explore';
import VeggiesScreen from './Veggies';
import RecipesScreen from './Recipes';
import FriendsScreen from './Friends';
import GroupsScreen from './Groups';
import BadgesScreen from './Badges';
import RaiseMoneyScreen from './RaiseMoney';
import MapScreen from './Map';
import AboutScreen from './AboutRecipeForSuccess';
import HelpScreen from './Help';

const Drawer = createDrawerNavigator();

function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: ({ onPress, children }) => (
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        ),
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerType: 'front',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#84bd00',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <IconSymbol
              name="line.horizontal.3"
              size={28}
              color="#000"
              style={{ marginLeft: 16 }}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Main" options={{ title: 'VegOut!' }}>
    {() => <TabNavigator />}
  </Drawer.Screen>
  <Drawer.Screen name="Veggies" options={{ title: 'Veggies!' }}>
    {() => <VeggiesScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Recipes" options={{ title: 'Recipes' }}>
    {() => <RecipesScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Friends" options={{ title: 'Friends' }}>
    {() => <FriendsScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Groups" options={{ title: 'Groups' }}>
    {() => <GroupsScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Badges" options={{ title: 'Badges' }}>
    {() => <BadgesScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Raise Money" options={{ title: 'Raise Money' }}>
    {() => <RaiseMoneyScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Map" options={{ title: 'Map' }}>
    {() => <MapScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="About Recipe For Success" options={{ title: 'About Recipe For Success' }}>
    {() => <AboutScreen />}
  </Drawer.Screen>
  <Drawer.Screen name="Help" options={{ title: 'Help' }}>
    {() => <HelpScreen />}
  </Drawer.Screen>
    </Drawer.Navigator>
  );
}

