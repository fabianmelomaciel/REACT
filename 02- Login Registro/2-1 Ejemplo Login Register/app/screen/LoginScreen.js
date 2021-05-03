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