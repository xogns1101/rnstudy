import React from 'react'
import { Button, TextInput, View } from 'react-native'

const GoalInput = ({onAddGoal}) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder='할 일을 입력하세요!'
      onChangeText={goalInputHandler}
    />
    <Button title='할 일 추가하기' onPress={addGoalHandler} />
    </View>
  
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})
