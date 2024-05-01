import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Tarefas",
          tabBarLabelStyle: { color: "#736bff" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <FontAwesome name="tasks" size={24} color="black" />
          ) : (
            <FontAwesome name="tasks" size={24} color="black" />
          )
        }}
      />
       <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendario",
          tabBarLabelStyle: { color: "#736bff" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <AntDesign name="calendar" size={24} color="black" />
          ) : (
            <AntDesign name="calendar" size={24} color="black" />
          )
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Perfil",
          tabBarLabelStyle: { color: "#736bff" },
          headerShown:false,
          tabBarIcon:({focused}) => 
          focused? (
            <MaterialCommunityIcons name="account-details" size={24} color="black" />
          ) : (
            <MaterialCommunityIcons name="account-details" size={24} color="black" />
          )
        }}
      />
    </Tabs>
  );
}