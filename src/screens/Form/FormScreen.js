import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
const FormScreen = () => {
  return (
    <View>
      <Text>ชื่อ</Text>
      <Text>นามสกุล</Text>
      <Text>อายุ</Text>
      <Text>เพศ</Text>
      <Text>ชาย</Text>
      <Text>หญิง</Text>
      <Text>อุณหภูมิ</Text>
      <Text>หมายเลขโทรศัพท์มือถือ</Text>
      <Text>ที่อยู่อาศัย</Text>
      <Text>ส่วนที่1</Text>
      <Text>ข้อมูลการคัดกรองผู้ที่มีความเสี่ยงเข้าเกณฑ์ต้องสอบสวนโรค</Text>
      <Text>1.ประวัติการเดินทางมาจากต่างประเทศในช่วง 1 เดือนที่ผ่านมา </Text>
      <Text>ใช่</Text>
      <Text>ไม่ใช่</Text>
    <CustomButton text='Submit' />
    </View>
  )
}

export default FormScreen