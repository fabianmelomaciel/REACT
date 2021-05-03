# CREAR PLANTILLA LOGIN & REGISTER

- Organizaremos la estructura de nuestro proyecto, esto refiere a comodidad del desarrollador de el como implementar su estructura y como acceder a la misma.

- Nuestro caso usaremos y comenzaremos en la creacion y ya que ReactJS hoy a la fecha va dirigido a Expo y React Native comenzaremos con lo basico despues de crear el proyecto explicado en el capitulo 01-Crear Proyecto.

- Crearemos nuestra estructura la cual sera dentro de nuestro proyecto la carpeta app ahi dentro crearemos nuestros componentes.

Nombre_Proyecto -- app/

- Pasaremos a crear las paginas LoginScreen.js y RegisterScreen.js dentro d ela carpeta screen que tambien crearemos dentro de app

Nombre_Proyecto -- app -- screen -- LoginScreen.js
                                    RegisterScreen.js

- Modificaremos App.js utilizando @react-navigation/native - '@react-navigation/stack

- Instalamos @react-navigation/native - @react-navigation/stack 

### Console / Terminal

```sh
npm i @react-navigation/native

npm i @react-navigation/stack

```

- Dentro de App.js comenzamos a crear nuestro import y estructuramos el codigo en si

### App.js

```sh

/ Import React y Componente
import React from 'react';

// Importamos Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importamos los Screen
import LoginScreen from './app/screen/LoginScreen';
import RegisterScreen from './app/screen/RegisterScreen';

//Importamos Navigation
import DrawerNavigator from "./app/navigation/DrawerNavigator";

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


```

- Crearemos La carpeta Navigation dentro usaremos previamente a su creacion DrawerNavigator

app -- navigation -- DrawerNavigator.js


## DrawerNavigator.js

```sh
ionic generate
```

- Agregamos el contenido que formara la plantilla Login Screen

### LoginScreen

```sh
// Import React and Component
import React from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';

// Creamos la Constante LoginScreen
const LoginScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        
                <TextInput
                     style={styles.textInput_email}
                     placeholder={'Email'}
                    />
        
                <TextInput
                     style={styles.textInput_password}
                     placeholder={'Contraseña'}
                     secureTextEntry={true}/>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Usuario Nuevo ? Registrate
            </Text>
   
        </View>
      );
    }

    export default LoginScreen;
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textInput_email: {
    fontSize: 25,
    margin: 5,
    marginTop: 87,
    color: 'black',
    marginBottom: 30,
    borderBottomColor: '#51A8B1',
    borderBottomWidth: 2
  },
  textInput_password: {
    fontSize: 25,
    margin: 5,
    color: 'black',
    marginBottom: 30,
    borderBottomColor: '#51A8B1',
    borderBottomWidth: 2
   
  },
  buttonStyle: {
    backgroundColor: 'cadetblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: 'black',
    paddingVertical: 10,
    fontSize: 16,
  },
  registerTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
```
- Agregamos el contenido que formara la plantilla Register Screen

### RegisterScreen

```sh
// Import React and Component
import React from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native';

// Creamos la Constante RegisterScreen
const RegisterScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        
                <TextInput
                     style={styles.textInput_email}
                     placeholder={'Email'}
                    />
        
                <TextInput
                     style={styles.textInput_password}
                     placeholder={'Contraseña'}
                     secureTextEntry={true}/>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Ya eres Usuario ? Login
            </Text>
   
        </View>
      );
    }

    export default RegisterScreen;
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textInput_email: {
    fontSize: 25,
    margin: 5,
    marginTop: 87,
    color: 'black',
    marginBottom: 30,
    borderBottomColor: '#51A8B1',
    borderBottomWidth: 2
  },
  textInput_password: {
    fontSize: 25,
    margin: 5,
    color: 'black',
    marginBottom: 30,
    borderBottomColor: '#51A8B1',
    borderBottomWidth: 2
   
  },
  buttonStyle: {
    backgroundColor: 'cadetblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: 'black',
    paddingVertical: 10,
    fontSize: 16,
  },
  registerTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});

```

- Visalizuaremos el proyecto modo web lo cual usa las librerias de expo

### Terminal / Console
```sh

npm run web

```

- Antes de visualizar en ios debemos realizar pod install en el proyecto y dentro de la carpeta ios

```sh
cd ios
pod install
```

- Error RNCSafeAreaProvider Ir a 00- Solucion Errores

- Visualizar en el simulador IOS

```sh
npm run ios
```