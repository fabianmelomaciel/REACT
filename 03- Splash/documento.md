# CREAR SPLASH LOGIN & REGISTER

-   Siempre es tedioso encontrar la forma de incorporar un splash a nuestro proyecto react Native, como sabemos expo simplifica esta situacion. E igual que otros lenguajes, por lo que en este proyecto agregaremos un splash desde un componente.

- Crearemos dentro de app/screen -> SplashScreen.js declarando lo siguiente dentro de su contenido.

- Antes creamos la carpeta assets dentro del proyecto

- Agregamos una imagen png con el nombre logo.png

Nombre_Proyecto -- assets -- logo.png

### SplashScreen.js

```sh
// Import React y Componente
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
    //State para ActivityIndicator animacion
    const [animating, setAnimating] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);
        
         navigation.replace('Auth');

      }, 1000);
    }, []);
  
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: '90%', resizeMode: 'contain', margin: 30}}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  };
  
  export default SplashScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });

```

- Agregamos los componentes en App.js invocando a SplashScreen.js

### App.js


```sh
// Importamos los Screen
import SplashScreen from './app/screen/SplashScreen';

// Dentro de la constante App invocamos SplashScreen.js
// Creamos la constante de la App
const App = () => {
  return (
    <NavigationContainer>
         
      <Stack.Navigator>

        {/* SplashScreen con time 5 segundos */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header para Splash Screen
          options={{headerShown: false}}
        /> .....
```
- Ejecutando en el simulador ios se podra contemplar el splash con el logo

- Todo se encuentra dentro del ejemplo 

- [2-1 - Ejemplo Login Register](https://github.com/fabianmelomaciel/REACT/tree/main/02-%20Login%20Registro/2-1%20Ejemplo%20Login%20Register)

