import { View, Text, TextInput , StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import Custominput from '../../components/Custominput';
const FormScreen = () => {
  return (
    <View>
      <Text>ชื่อ</Text>
      <TextInput style={styles.input}/>
      <Text>นามสกุล</Text>
      <Custominput placeholder="นามสกุล"/>
      <Text>อายุ</Text>
      <Custominput placeholder="อายุ"/>
      <Text>เพศ</Text>
      <Text>ชาย</Text>
      <Text>หญิง</Text>
      <Text>อุณหภูมิ</Text>
      <Custominput placeholder="อุณหภูมิ"/>
      <Text>หมายเลขโทรศัพท์มือถือ</Text>
      <Custominput placeholder="หมายเลขโทรศัพท์มือถือ"/>
      <Text>ที่อยู่อาศัย</Text>
      <Custominput placeholder="ที่อยู่"/>
      <Text>ส่วนที่1</Text>
      <Text>ข้อมูลการคัดกรองผู้ที่มีความเสี่ยงเข้าเกณฑ์ต้องสอบสวนโรค</Text>
      <Text>1.ประวัติการเดินทางมาจากต่างประเทศในช่วง 1 เดือนที่ผ่านมา </Text>
      <Text>ใช่</Text>
      <Text>ไม่ใช่</Text>
    <CustomButton text='Submit' />
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

  }
});



export default FormScreen