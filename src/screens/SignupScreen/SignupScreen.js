import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const {height} = useWindowDimensions();
  //navigation
  const navigation =useNavigation();

  const onSignUpPress = () => {
    console.warn("OnSignInPressed");
     navigation.navigate("SignIn");
  }

  

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          // secueTextEntry
        />
        <CustomInput
          placeholder="ConfirmPassword" 
          value={password} 
          setValue={setPassword}
          // secueTextEntry
        />
        <View style={styles.button}>
          <CustomButton text= 'Sign Up' onPress= {onSignUpPress}/>
        </View>

        <Image 
        source={Logo} 
        style={[styles.logo,{height: height* 0.3}]} 
        resizeMode='contain'
        />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
    marginVertical: 30,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C68',
    margin:10,
  },
  button: {
    backgroundColor:'#3B71F3',
    width:'100%',
    padding:8,
    marginVertical: 10,
    borderRadius:7,
  }
})

export default SignUpScreen