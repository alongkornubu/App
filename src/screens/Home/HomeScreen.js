import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  const onPressForm = () =>{
    console.warn("Form");
    navigation.navigate("Form");
  }
  return (
    <View>
      <Text style={{fontSize:24,alignSelf:'center'}}>Home</Text>
      <Text>Name</Text>
      <Text>Lastname</Text>
      <Text>อายุ</Text>
      <Text>เพศ</Text>
      <Text>อุณหภูมิ</Text>
      <Text>อยู่ในกลุ่ม</Text>
      
      <Text>ปลอดภัย</Text>
      <Text>กลุ่มเสี่ยง</Text>
      <Text>ผู้ติดเชื้อ T-Virus</Text>
    <CustomButton text='กรอกแบบฟอร์ม' onPress={onPressForm}/>
      <Text>กรุณากรอกแบบฟอร์มเพื่อระบุข้อมูล</Text>
    </View>
   
  );
}

export default Home