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
      <View style={styles.radiobutton}>
        <View style={styles.circles}>
          <View style={styles.circle1}/>
          <View style={styles.circle2}/>
          <View style={styles.circle3}/>
        </View>
        <View style={styles.space}/>
        <View style={styles.texts}>
          <Text style={styles.text}>ปลอดภัย</Text>
          <Text style={styles.text}>กลุ่มเสี่ยง</Text>
          <Text style={styles.text}>ผู้ติดเชื้อ T-Virus</Text>
        </View>
        
      </View>


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
    marginVertical: 5,
  },
  radiobutton: {
    flexDirection: 'row',
    marginLeft: '25%',
    marginVertical: 50,
    textAlign: 'center',
  },
  circle1: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: 'yellow',
    marginVertical:'5.5%'
  },
  circle2: {
    width:35,
    height:35,
    borderRadius: 30,
    backgroundColor:'green',
    marginVertical:'5.5%'

  },
  circle3: {
    width:35,
    height:35,
    borderRadius: 30,
    backgroundColor: 'red',
    marginVertical:'5.5%'

  },
  space: {
    width: 30,
  },  
  text: {
    marginVertical: '7.6%',
    fontSize: 16,
  },
})

export default Home