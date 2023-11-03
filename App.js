import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import { NavigationContainer } from '@react-navigation/native';
export default function App(){
    const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
