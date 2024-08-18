import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/LoanPageStyles';
import Toast from 'react-native-toast-message';
import { useNavigationHelper } from '../../navigation/routing';

const LoanPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const { navigateToLoanListPage } = useNavigationHelper();

  useEffect(() => {
    setIsFormValid(
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      loanAmount.trim() !== '' &&
      loanPurpose.trim() !== ''
    );
  }, [fullName, email, loanAmount, loanPurpose]);

  const handleSubmit = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/apply-loan', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          loan_amount: parseFloat(loanAmount),
          loan_purpose: loanPurpose,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: data.message,
        });
        navigateToLoanListPage();
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: data.message || 'Failed to submit loan application.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while submitting the application.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Apply for a Loan</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#ccc"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Loan Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />

        <Text style={styles.label}>Loan Purpose</Text>
        <TextInput
          style={[styles.input, styles.inputWithExtraSpace]}
          placeholder="Enter the purpose of the loan"
          placeholderTextColor="#ccc"
          value={loanPurpose}
          onChangeText={setLoanPurpose}
        />

        <TouchableOpacity
          style={isFormValid ? styles.submitButton : styles.submitButtonDisabled}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={styles.submitButtonText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoanPage;
