import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types'

import DateTimePicker from 'react-native-modal-datetime-picker';


function TransactionDateInput(props) {
  return (
    <View>
      <Text style={styles.infoText}>{props.inputTitle}</Text>
      <TextInput
        onFocus={props.handleOnFocus}
        value={props.inputValue}
        style={styles.infoInput}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  infoText: {
    marginBottom: 4,
  },
  infoInput: {
    paddingLeft: 5,
    borderRadius: 6,
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1.5,
    marginBottom: 18,
  },
});


TransactionDateInput.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
}

export default TransactionDateInput;
