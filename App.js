import * as React from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      datePickerVisible: false,
      date: '',
    };

    this.request = this.request.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
    this.setDate = this.setDate.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.clearTransactionInfo = this.clearTransactionInfo.bind(this);
  }

  request() {
    const { toAccount, fromAccount, amount, payee, date } = this.state;

    fetch('https://067bb8da.ngrok.io/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: toAccount,
        from: fromAccount,
        amount: amount,
        payee: payee,
        date: date,
      }),
    });

    this.clearTransactionInfo();
    alert('Sucess'); // TODO: Handle promise properly
  }

  textInput(title, type, keyboardType = 'default') {
    return (
      <View>
        <Text style={styles.infoText}>{title}</Text>
        <TextInput
          value={this.state[type]}
          style={styles.infoInput}
          keyboardType={keyboardType}
          onChangeText={newText => this.setState({ [type]: newText })}
        />
      </View>
    );
  }

  dateInput(title) {
    return (
      <View>
        <Text style={styles.infoText}>{title}</Text>
        <TextInput
          onFocus={this.showDatePicker}
          value={this.state.date}
          style={styles.infoInput}
        />
        <DateTimePicker
          isDarkModeEnabled={true}
          mode="date"
          isVisible={this.state.datePickerVisible}
          onConfirm={this.setDate}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
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

  showDatePicker() {
    Keyboard.dismiss();
    this.setState({ datePickerVisible: true });
  }

  setDate(date) {
    const formattedDate = `${date.getFullYear()}/${date.getMonth() +
      1}/${date.getDate()}`;
    this.setState({ datePickerVisible: false, date: formattedDate });
  }

  hideDatePicker() {
    this.setState({ datePickerVisible: false });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Enter a new transaction</Text>
          {this.textInput('To account', 'toAccount')}
          {this.textInput('From account', 'fromAccount')}
          {this.textInput('Payee', 'payee')}
          {this.textInput('Amount', 'amount', 'numeric')}
          {this.dateInput('Date')}
          <Button onPress={this.request} title="Submit" />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  infoText: {
    alignSelf: 'right',
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
