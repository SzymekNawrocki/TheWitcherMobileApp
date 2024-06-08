import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons'; 

interface TabIconProps {
    icon: string;
    color: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color }) => {
    return (
        <View>
            <Icon 
                name={icon} 
                size={24} 
                color={color}
            />
        </View>
    );
};

const TabsLayout: React.FC = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
                            <TabIcon
                                icon={focused ? 'home' : 'home-outline'} 
                                color={focused ? '#007AFF' : '#8E8E93'}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='bmi'
                    options={{
                        title: 'Miernik Tężyzny',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
                            <TabIcon
                                icon={focused ? 'barbell' : 'barbell-outline'}
                                color={focused ? '#007AFF' : '#8E8E93'}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='quest'
                    options={{
                        title: 'Dziennik Zadań',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
                            <TabIcon
                                icon={focused ? 'book' : 'book-outline'}
                                color={focused ? '#007AFF' : '#8E8E93'}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='skill'
                    options={{
                        title: 'Umiejętności',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
                            <TabIcon
                                icon={focused ? 'construct' : 'construct-outline'}
                                color={focused ? '#007AFF' : '#8E8E93'}
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='elixir'
                    options={{
                        title: 'Eliksiry',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
                            <TabIcon
                                icon={focused ? 'flask' : 'flask-outline'}
                                color={focused ? '#007AFF' : '#8E8E93'}
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
