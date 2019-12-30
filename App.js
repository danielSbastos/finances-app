import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Constants from 'expo-constants';
import DateTimePicker from 'react-native-modal-datetime-picker';

import TransactionTextInput from './components/transaction-text-input'
import TransactionDateInput from './components/transaction-date-input'
import { createTransaction } from './lib/actions'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      date: '',
      datePickerVisible: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearTransactionInfo = this.clearTransactionInfo.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
    this.closeDatePicker = this.closeDatePicker.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  handleSubmit() {
    createTransaction(this.state)
    this.clearTransactionInfo();
  }

  setDate(date) {
    const formattedDate = `${date.getFullYear()}/${date.getMonth() +1}/${date.getDate()}`;

    this.setState({ date: formattedDate, datePickerVisible: false })
  }

  openDatePicker() {
    Keyboard.dismiss();
    this.setState({ datePickerVisible: true });
  }

  closeDatePicker() {
    this.setState({ datePickerVisible: false });
  }

  clearTransactionInfo() {
    this.setState({
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      date: '',
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Enter a new transaction</Text>
          <TransactionTextInput
            inputType='toAccount'
            inputTitle='To account'
            inputValue={this.state.toAccount}
            handleOnChangeText={(newState) => {this.setState(newState)}}
          />
          <TransactionTextInput
            inputType='fromAccount'
            inputTitle='From account'
            inputValue={this.state.fromAccount}
            handleOnChangeText={(newState) => {this.setState(newState)}}
          />
          <TransactionTextInput
            inputType='payee'
            inputTitle='Payee'
            inputValue={this.state.payee}
            handleOnChangeText={(newState) => {this.setState(newState)}}
          />
          <TransactionTextInput
            keyboardType='numeric'
            inputType='amount'
            inputTitle='Amount'
            inputValue={this.state.amount}
            handleOnChangeText={(newState) => {this.setState(newState)}}
          />
          <TransactionDateInput
            inputTitle='Date'
            inputValue={this.state.date}
            handleOnFocus={this.openDatePicker}
          />
          <DateTimePicker
            isDarkModeEnabled={true}
            mode="date"
            isVisible={this.state.datePickerVisible}
            onConfirm={this.setDate}
            onCancel={this.closeDatePicker}
          />
          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
