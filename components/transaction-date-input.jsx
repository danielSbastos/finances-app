import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  title: { marginBottom: 4 },
  fakeInput: {
    paddingTop: 10,
    paddingLeft: 5,
    borderRadius: 6,
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1.5,
    marginBottom: 18,
  },
})

function TransactionDateInput({ title, value, handleOnPress }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={handleOnPress}
      >
        <Text style={styles.fakeInput}>{value}</Text>
      </TouchableOpacity>
    </View>
  )
}

TransactionDateInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
}

export default TransactionDateInput
