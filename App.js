import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

import { NavigationContainer } from '@react-navigation/native';
export default function App(){
    const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}} />
        <Stack.Screen name="Screen2" component={Screen2} options={{headerTitle:'Shops Near Me'}} />
        <Stack.Screen name="Screen3" component={Screen3} options={{headerTitle:'Drinks'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
