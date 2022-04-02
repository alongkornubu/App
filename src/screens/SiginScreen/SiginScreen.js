import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';
const SiginScreen = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("sign in");
  }

  const onFogotPasswordPressed = () => {
    console.warn('onFogotPasswordPressed');
  }

  return (
    <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.logo,{height: height* 0.3}]} 
        resizeMode='contain'
        />
       
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
        <CustomButton text= 'for got password ?' onPress= {onFogotPasswordPressed}/>
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
})

export default SiginScreen