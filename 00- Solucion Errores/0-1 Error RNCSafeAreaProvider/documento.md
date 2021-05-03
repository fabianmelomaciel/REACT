### ERROR RNCSafeAreaProvider

- En su mayoria presenta el error RNCSafeAreaProvider cuando queremos levantar el proyecto en un simulador IOS en este proyecto ya se encuentra instalado por default react-native-gesture-handler se puede visualizar dentro de packake.json, si no se encuentra pasaremos a instalarlo y seguir los pasos de pod install.

- Si se encuentra instalado solo debemos instalar la siguiente libreria react-native-safe-area-context

### Terminal / Console
```sh
npm i react-native-safe-area-context

```

- Una Vez instalado debemos ingresar dentro de la carpeta ios y realizar pod install

### Terminal / Console
```sh
cd ios
pod install
```

- Ejecutamos el proyecto

### Terminal / Console
```sh
npm run ios
```


