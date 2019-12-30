import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

function TransactionTextInput(props) {
  return (
    <View>
      <Text style={styles.infoText}>{props.inputTitle}</Text>
      <TextInput
        value={props.inputValue}
        style={styles.infoInput}
        keyboardType={props.keyboardType}
        onChangeText={newText => props.handleOnChangeText({ [props.inputType]: newText })}
      />
    </View>
  )
};

TransactionTextInput.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired, // TODO: Rename this prop
  keyboardType: PropTypes.string,
  handleOnChangeText: PropTypes.func.isRequired,
}

TransactionTextInput.defaultProps = {
  keyboardType: 'default'
}

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

export default TransactionTextInput;
