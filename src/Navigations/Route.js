// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MainStack from './MainStack';
// import AuthStack from './AuthStack';
// const Stack = createNativeStackNavigator();
// export default function Route() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
//         {true ? MainStack(Stack) : AuthStack(Stack)}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
export default function Routes() {
  const checkStatus = useSelector(state => state.status.checkStatus);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        {true ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

