import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
//navigation



const SiginScreen = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const {height} = useWindowDimensions();
  // navigation
  const navigation =useNavigation();
  
  const onSignInPressed = () => {
      console.warn("sign in");
    //validation user
      navigation.navigate('Home');
  }
const onSignUpPress = () =>{
  console.warn('onSignUpPress');
  navigation.navigate('SignUp')

}


  return (
    <View style={styles.root}>
        <Text style={styles.title}> Sign in</Text>
       
        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secueTextEntry
        />
        <View style={styles.buttons}>
          <View style={styles.button1}>
            <CustomButton text= 'Sign in' onPress= {onSignInPressed}/>
          </View>
          
          <View style={styles.button2}>
            <CustomButton text='Sign Up' onPress={onSignUpPress}/>
          </View>
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
      margin:10
    },
    buttons: {
      flexDirection: 'row',
      marginVertical: 15,
    },
    button1: {
      backgroundColor:'red',
      width:'40%',
      padding:15,
      marginVertical:5,
      borderRadius:10,

    },
    button2: {
      backgroundColor:'#3B71F3',
      width:'40%',
      padding:15,
      marginVertical:5,
      borderRadius:10,
    },
})

export default SiginScreen