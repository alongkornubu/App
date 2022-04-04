import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

const Home = () => {
  const navigation = useNavigation();

  const onPressForm = () =>{
    console.warn("Form");
    navigation.navigate("Form");
  }
  return (
    <View >
      <Text style={{fontSize:24,alignSelf:'center'}}>Home</Text>
      
      <Text style={{padding:'2%'}}>Name</Text>
      <Text style={{padding:'2%'}}>Lastname</Text>
      <Text style={{padding:'2%'}}>อายุ</Text>
      <Text style={{padding:'2%'}}>เพศ</Text>
      <Text style={{padding:'2%'}}>อุณหภูมิ</Text>
      {/* RadioButton */}
      <RadioGroup>
        <RadioButton>
          <Text>ปลอดภัย</Text>               
        </RadioButton>
        <RadioButton>
          <Text>กลุ่มเสี่ยง</Text>
        </RadioButton>
        <RadioButton>
          <Text>ผู้ติดเชื้อ T-Virus</Text>
        </RadioButton>             
      </RadioGroup>    
      
    <CustomButton  text='กรอกแบบฟอร์ม' onPress={onPressForm}/>
      <Text style={{alignSelf:'center',padding:10}}>กรุณากรอกแบบฟอร์มเพื่อระบุข้อมูล</Text>
    </View>
   
  );
}



export default Home