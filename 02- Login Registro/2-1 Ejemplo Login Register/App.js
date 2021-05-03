// Import React y Componente
import React from 'react';

// Importamos Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importamos los Screen
import LoginScreen from './app/screen/LoginScreen';
import RegisterScreen from './app/screen/RegisterScreen';

// Creamos la constante Stack 
const Stack = createStackNavigator();

// Crearemos la Ath que utilizaremos en el futuro
const Auth = () => {
  //Stack Navigator para Login y Register
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Setea Header Titulo
          headerStyle: {
            backgroundColor: '#307ecc', //Setea Header color
          },
          headerTintColor: '#fff', //Setea Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Setea Header text style
          },
        }}
      />
   
    </Stack.Navigator> 
  );
};

// Creamos la constante de la App
const App = () => {
  return (
    <NavigationContainer>
         
      <Stack.Navigator>
        {/* Auth Navigator: Incluye LoginScreen y RegisterScreen */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};

export default App;



