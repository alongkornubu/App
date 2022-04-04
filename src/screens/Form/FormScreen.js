import { View, Text, TextInput , StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import Custominput from '../../components/Custominput';
import { useNavigation } from '@react-navigation/native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


const FormScreen = () => {
  const navigation = useNavigation();
  const onPressToHome = () =>{
    navigation.navigate("Home");
  }
  return (
    <View>
      <Text>ชื่อ</Text>
      <TextInput style={styles.input}/>
      <Text>นามสกุล</Text>
      <TextInput style={styles.input}/>
      <Text>อายุ</Text>
      <TextInput style={styles.input}/>
      <Text>เพศ</Text>
      <RadioGroup>
        <RadioButton value={1}>
          <Text>ชาย</Text>
        </RadioButton>
        <RadioButton value={1}>
          <Text>หญิง</Text>
        </RadioButton>
      </RadioGroup>
      <Text>อุณหภูมิ</Text>
      <TextInput style={styles.input}/>
      <Text>หมายเลขโทรศัพท์มือถือ</Text>
      <TextInput style={styles.input}/>
      <Text>ที่อยู่อาศัย</Text>
      <Custominput placeholder="ที่อยู่"/>
      <Text>ส่วนที่1</Text>
      <Text>ข้อมูลการคัดกรองผู้ที่มีความเสี่ยงเข้าเกณฑ์ต้องสอบสวนโรค</Text>
      <Text>1.ประวัติการเดินทางมาจากต่างประเทศในช่วง 1 เดือนที่ผ่านมา </Text>
      <RadioGroup>
      <RadioButton  >
          <Text>ใช่</Text>
        </RadioButton>
        <RadioButton>
          <Text>ไม่ใช่</Text>
        </RadioButton>
      </RadioGroup>
    


      
    <CustomButton text='Submit' onPress={onPressToHome}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    width: '20%',
    height:'5%',
    borderColor: '#e8e8e8',
    backgroundColor:'white',
    borderWidth:3,
    borderRadius:5,
    paddingHorizontal:2,
    marginVertical:1,
  },
  
});



export default FormScreen