import { Stack } from "expo-router";
import { Screen } from "react-native-screens";
export default function Layout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
          <Screen.Screen name="index"/>
        </Stack>
    )
}