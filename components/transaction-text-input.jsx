import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  title: { marginBottom: 4 },
  input: {
    paddingLeft: 5,
    borderRadius: 6,
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1.5,
    marginBottom: 18,
  },
})

function TransactionTextInput({ title, value, type, keyboardType, handleOnChangeText }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={(newText) => handleOnChangeText({ [type]: newText })}
      />
    </View>
  )
}

TransactionTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  handleOnChangeText: PropTypes.func.isRequired,
}

TransactionTextInput.defaultProps = { keyboardType: 'default' }

export default TransactionTextInput
