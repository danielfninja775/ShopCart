import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../Home/index';
import Cart from '../cart/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

<Stack.Screen
name="HOME"
component={Home}
options={{
    headerShown: false
}}
/>
<Stack.Screen
name="Cart"
component={Cart}
options={{
    headerTitle: 'My kart'
}}
/>

        </Stack.Navigator>

    )
}