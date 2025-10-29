import { Image } from "react-native";
import { Tabs } from "expo-router";

const tabMenu = [
  {
    name: "home",
    title: "Home",
    icon: require("../../assets/icons/tab-menu/home.png"),
    iconActive: require("../../assets/icons/tab-menu/home-active.png"),
  },
  {
    name: "profile",
    title: "Profile",
    icon: require("../../assets/icons/tab-menu/user.png"),
    iconActive: require("../../assets/icons/tab-menu/user-active.png"),
  },
  // add more tabs here
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#70b9bf",
        tabBarInactiveTintColor: "#aaa",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
      }}
    >
      {tabMenu.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? tab.iconActive : tab.icon}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
