import { View, Text, TextInput , StyleSheet} from 'react-native'
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
    <View style={styles.container}>
      <Text style={styles.textcovid}>กรอกแบบฟอร์มข้อมูล COVID-19</Text>
      <View style={styles.view1}>
        <Text>ชื่อ  </Text>
          <TextInput style={styles.input}/>
        <Text>  นามสกุล  </Text>
          <TextInput style={styles.input}/>
      </View>
      <View style={styles.view2}>
        <Text>อายุ  </Text>
          <TextInput style={styles.input}/>
        <Text>  เพศ  </Text>
          <RadioGroup style={styles.radiogroup1}>
            <RadioButton value={1}>
              <Text>ชาย </Text>
            </RadioButton>
            <RadioButton value={1}>
              <Text>หญิง </Text>
            </RadioButton>
        </RadioGroup>
      </View>

      <View style={styles.view3}>
        <Text>อุณหภูมิ  </Text>
          <TextInput style={styles.input}/>
          
      </View>

      <View style={styles.view4}>
        <Text>หมายเลขโทรศัพท์มือถือ  </Text>
            <TextInput style={styles.input}/>
      </View>

      <View style={styles.view5}>
        <Text>ที่อยู่อาศัย  </Text>
            <Custominput style={styles.custominput1} placeholder="ที่อยู่"/>
      </View>

      <View>
        <Text>ส่วนที่1</Text>
        <Text>ข้อมูลการคัดกรองผู้ที่มีความเสี่ยงเข้าเกณฑ์ต้องสอบสวนโรค</Text>
        <Text>1. ประวัติการเดินทางมาจากต่างประเทศในช่วง 1 เดือนที่ผ่านมา </Text>
          <RadioGroup style={styles.radiogroup2}>
            <RadioButton>
              <Text> ใช่</Text>
            </RadioButton>
            <RadioButton>
              <Text> ไม่ใช่</Text>
            </RadioButton>
          </RadioGroup>
      </View>
      

      <CustomButton text='Submit' onPress={onPressToHome}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginVertical: 20,
  },
  textcovid: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  view1: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: 'center',
  },
  view2: {
    flexDirection: "row",
    alignItems: 'center',
  },
  view3: {
    flexDirection: "row",
    alignItems: 'center',
  },
  view4: {
    flexDirection: "row",
    alignItems: 'center',
  },
  view5: {
    flexDirection: "row",
    alignItems: 'center',
  },
  radiogroup1: {
    flexDirection: "row",
  },
  radiogroup2: {
    flexDirection: "row",
  },

  input:{
    width: '35%',
    height: 40,
    borderColor: '#e8e8e8',
    backgroundColor:'white',
    borderWidth: 2,
    borderRadius:5,
    paddingHorizontal:5,
    marginVertical:15,
    fontSize: 16,
  },
  
});



export default FormScreen