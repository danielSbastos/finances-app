import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toAccount: '',
      fromAccount: '',
      payee: '',
      amount: '',
      date: {
        show: false,
        value: new Date(),
      },
    };

    this.request = this.request.bind(this);
  }

  request() {
    const { toAccount, fromAccount, amount, payee } = this.state;

    fetch('https://067bb8da.ngrok.io/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: toAccount,
        from: fromAccount,
        amount: amount,
        payee: payee,
        date: '2019/12/26',
      }),
    });
  }

  numberInput(title, type) {
    return (
      <View>
        <Text style={styles.accountText}>{title}</Text>
        <TextInput
          style={styles.accountInput}
          keyboardType="numeric"
          onChangeText={newText => this.setState({ [type]: newText })}
        />
      </View>
    );
  }

  textInput(title, type) {
    return (
      <View>
        <Text style={styles.accountText}>{title}</Text>
        <TextInput
          style={styles.accountInput}
          onChangeText={newText => this.setState({ [type]: newText })}
        />
      </View>
    );
  }

  showDatePicker = () => {
    this.setState({
      date: {
        show: true,
        mode: 'date',
      },
    });
  };

  dateInput(title) {
    return (
      <View>
        <Text style={styles.accountText}>{title}</Text>
        <Button onPress={this.showDatePicker} title="Show date picker!" />
      </View>
    );
  }

  setDate() {
    alert('daniel');
  }

  render() {
    const { show, value } = this.state.date;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Enter a new transaction</Text>
            {this.textInput('To account', 'toAccount')}
            {this.textInput('From account', 'fromAccount')}
            {this.textInput('Payee', 'payee')}
            {this.numberInput('Amount', 'amount')}
            {this.dateInput('Date')}
            {show && <DateTimePicker
                value={value}
                mode="date"
                display="dafault"
                onChange={this.setDate}
              />
            }
          <Button onPress={this.request} title="Submit" />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  accountText: {
    alignSelf: 'right',
    marginBottom: 4,
  },
  accountInput: {
    paddingLeft: 5,
    borderRadius: 17,
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
