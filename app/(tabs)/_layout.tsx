import { Tabs } from 'expo-router';

export default function TabsLayout() {

  return (
    <Tabs
    screenOptions={{}}
    >
        <Tabs.Screen name="home/index" />
        <Tabs.Screen name="search/index" />
        <Tabs.Screen name="courses/index" />
        <Tabs.Screen name="profile/index" />
    </Tabs>
  )
}