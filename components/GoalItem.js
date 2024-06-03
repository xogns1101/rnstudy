import React, { useState } from 'react'
import { Text, View } from 'react-native'

const GoalItem = (props) => {

   // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언.
   const [enteredGoalText, setEnteredGoalText] = useState('');
 
   // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
   const goalInputHandler = (enteredText) => {
     setEnteredGoalText(enteredText);
   };

   const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
   }
 
  
  return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
