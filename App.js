import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './assets/styles';

export default function App() {	
  // Calculate the current date
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const ddmm = month + day;

  // Calculate the day of the week
  const dayOfWeek = today.getDay();
  let dayLetters;
  switch (dayOfWeek) {
    case 0:
      dayLetters = 'IA';
      break;
    case 1:
      dayLetters = 'UD';
      break;
    case 2:
      dayLetters = 'AD';
      break;
    case 3:
      dayLetters = 'EC';
      break;
    case 4:
      dayLetters = 'ED';
      break;
    case 5:
      dayLetters = 'ED';
      break;
    case 6:
      dayLetters = 'AE';
      break;
    default:
      dayLetters = '';
  }

  // Calculate the formulas
  const formula0 = ddmm * 205;
  const formula1 = 'Admin9144' + ddmm;
  const formula2 = ddmm * 204;
  const formula3 = ddmm * 204 + 'all';
  const formula4 = dayLetters + ddmm * 204;
  const formula5 = '91+' + ddmm * 204 + '+44';
  
  // Hide & reveal the result when touched
  const [showText, setShowText] = useState([false, false, false]);

  const toggleText = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
	
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
      </View>
	  
      <View style={styles.formulas}>
		
		<TouchableWithoutFeedback onPress={() => toggleText(0)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>CRM / AVANCÉES</Text>
              <View>{showText[0] && <Text style={styles.formulaResult}>{formula0}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
		<TouchableWithoutFeedback onPress={() => toggleText(1)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>BDD / IDENTITÉS SOCIALE</Text>
              <View>{showText[1] && <Text style={styles.formulaResult}>{formula1}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
		<TouchableWithoutFeedback onPress={() => toggleText(2)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>DÉPANNAGE G8</Text>
              <View>{showText[2] && <Text style={styles.formulaResult}>{formula2}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
		<TouchableWithoutFeedback onPress={() => toggleText(3)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>INTÉGRATION / TRAÇABILITÉ</Text>
              <View>{showText[3] && <Text style={styles.formulaResult}>{formula3}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
		<TouchableWithoutFeedback onPress={() => toggleText(4)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>EXTRACTION G7 > G8</Text>
              <View>{showText[4] && <Text style={styles.formulaResult}>{formula4}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
		<TouchableWithoutFeedback onPress={() => toggleText(5)}>
          <View style={styles.formula}>
            <Text style={styles.formulaTitle}>CHAINAGE G8</Text>
              <View>{showText[5] && <Text style={styles.formulaResult}>{formula5}</Text>}</View>
          </View>
		</TouchableWithoutFeedback>
		
      </View>
    </View>
	</ImageBackground>
  );
}