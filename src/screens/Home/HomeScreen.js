import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import Custominput from '../../components/Custominput';
import { useNavigation } from '@react-navigation/native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

const Home = () => {
  const navigation = useNavigation();

  const onPressForm = () =>{
    console.warn("Form");
    navigation.navigate("Form");
  }
  return (
    <View>
      <Text style={{fontSize:24,alignSelf:'center'}}>Home</Text>
      
      <Text style={styles.title}>Name</Text>
      <Text>Lastname</Text>
      <Text>อายุ</Text>
      <Text>เพศ</Text>
      <Text>อุณหภูมิ</Text>
      <RadioGroup>
        <RadioButton></RadioButton>
      </RadioGroup>
      <Text>อยู่ในกลุ่ม</Text>     
      <Text>กลุ่มเสี่ยง</Text>
      <Text>ผู้ติดเชื้อ T-Virus</Text>
    <CustomButton text='กรอกแบบฟอร์ม' onPress={onPressForm}/>
      <Text>กรุณากรอกแบบฟอร์มเพื่อระบุข้อมูล</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:15,
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  }
});

export default Home