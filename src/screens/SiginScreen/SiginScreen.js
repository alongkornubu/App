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
  const onFogotPasswordPressed = () => {
    console.warn('onFogotPasswordPressed');
  }




  return (
    <View style={styles.root}>
        {/* <Image 
        source={Logo} 
        style={[styles.logo,{height: height* 0.3}]} 
        resizeMode='contain'
        /> */}
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
        <CustomButton text= 'Sign in' onPress= {onSignInPressed}/>
        <CustomButton text='Sign Up' onPress={onSignUpPress}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
    logo:{
        width:100,
        maxWidth:300,
        maxHeight:200,
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#051C68',
      margin:10
    }
})

export default SiginScreen