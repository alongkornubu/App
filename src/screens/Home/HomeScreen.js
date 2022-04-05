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
    <View style={styles.container}>
      <Text style={styles.title}>ข้อมูลผู้กรอกเเบบฟอร์ม</Text>
      
      <Text style={{padding:'2%'}}>Name: </Text>
      <Text style={{padding:'2%'}}>Lastname: </Text>
      <Text style={{padding:'2%'}}>อายุ: </Text>
      <Text style={{padding:'2%'}}>เพศ: </Text>
      <Text style={{padding:'2%'}}>อุณหภูมิ: </Text>
      <Text style={{padding:'2%'}}>อยู่ในกลุ่ม: </Text>
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

      <View>
        <View style={styles.button}>
          <CustomButton text='กรอกแบบฟอร์ม' onPress={onPressForm}/>
        </View>
        <Text style={{alignSelf:'center',padding:10}}>กรุณากรอกแบบฟอร์มเพื่อระบุข้อมูล</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  button: {
    backgroundColor:'#3B71F3',
    borderRadius: 7,
    height: 50,
    padding: 8,
    marginVertical: 10,
  },
})

export default Home