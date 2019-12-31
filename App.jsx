import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

import Constants from 'expo-constants'
import DateTimePicker from 'react-native-modal-datetime-picker'
import TransactionTextInput from './components/transaction-text-input'
import TransactionDateInput from './components/transaction-date-input'
import { createTransaction } from './lib/actions'

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
})

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      date: '',
      datePickerVisible: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearTransactionInfo = this.clearTransactionInfo.bind(this)
    this.openDatePicker = this.openDatePicker.bind(this)
    this.closeDatePicker = this.closeDatePicker.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  setDate(date) {
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

    this.setState({ date: formattedDate, datePickerVisible: false })
  }

  handleSubmit() {
    createTransaction(this.state)
    this.clearTransactionInfo()
  }

  openDatePicker() {
    Keyboard.dismiss()
    this.setState({ datePickerVisible: true })
  }

  closeDatePicker() {
    this.setState({ datePickerVisible: false })
  }

  clearTransactionInfo() {
    this.setState({
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      date: '',
    })
  }

  render() {
    const {
      toAccount,
      fromAccount,
      payee,
      amount,
      date,
      datePickerVisible,
    } = this.state

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Enter a new transaction</Text>
          <TransactionTextInput
            type="toAccount"
            title="To account"
            value={toAccount}
            handleOnChangeText={(newState) => { this.setState(newState) }}
          />
          <TransactionTextInput
            type="fromAccount"
            title="From account"
            value={fromAccount}
            handleOnChangeText={(newState) => { this.setState(newState) }}
          />
          <TransactionTextInput
            type="payee"
            title="Payee"
            value={payee}
            handleOnChangeText={(newState) => { this.setState(newState) }}
          />
          <TransactionTextInput
            keyboardType="numeric"
            type="amount"
            title="Amount"
            value={amount}
            handleOnChangeText={(newState) => { this.setState(newState) }}
          />
          <TransactionDateInput
            title="Date"
            value={date}
            handleOnPress={this.openDatePicker}
          />
          <DateTimePicker
            isDarkModeEnabled
            mode="date"
            isVisible={datePickerVisible}
            onConfirm={this.setDate}
            onCancel={this.closeDatePicker}
          />
          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
