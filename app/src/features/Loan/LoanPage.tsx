import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from '../../styles/LoanPageStyles';
import Toast from 'react-native-toast-message';
import { useNavigationHelper } from '../../navigation/routing';

// The LoanPage component provides a form for users to apply for a loan.
// It handles form validation, submission, and displays feedback to the user.
const LoanPage = () => {
  // Local state for managing form inputs and validation state.
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false); // State for managing loading indicator.

  // Custom navigation helper for navigating between screens.
  const { navigateToLoanListPage } = useNavigationHelper();

  // useEffect hook to validate the form whenever the input fields change.
  useEffect(() => {
    setIsFormValid(
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      loanAmount.trim() !== '' &&
      loanPurpose.trim() !== ''
    );
  }, [fullName, email, loanAmount, loanPurpose]);

  // Handle form submission: validate, send data to the server, and handle the response.
  const handleSubmit = async () => {
    if (!isFormValid) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    setLoading(true); // Start loading indicator

    try {
      // Send the loan application data to the server.
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

      // Handle the server response.
      if (response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: data.message,
        });
        navigateToLoanListPage(); // Navigate to the loan list page after successful submission.
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: data.message || 'Failed to submit loan application.',
        });
      }
    } catch (error) {
      // Handle errors during the fetch request.
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while submitting the application.',
      });
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Apply for a Loan</Text>

        {/* Full Name Input Field */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#ccc"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Email Input Field */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Loan Amount Input Field */}
        <Text style={styles.label}>Loan Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />

        {/* Loan Purpose Input Field */}
        <Text style={styles.label}>Loan Purpose</Text>
        <TextInput
          style={[styles.input, styles.inputWithExtraSpace]}
          placeholder="Enter the purpose of the loan"
          placeholderTextColor="#ccc"
          value={loanPurpose}
          onChangeText={setLoanPurpose}
        />

        {/* Display loading indicator while submitting the form, otherwise show the submit button */}
        {loading ? (
          <ActivityIndicator size="large" color="#30c2e3" />
        ) : (
          <TouchableOpacity
            style={isFormValid ? styles.submitButton : styles.submitButtonDisabled}
            onPress={handleSubmit}
            disabled={!isFormValid}
          >
            <Text style={styles.submitButtonText}>Submit Application</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LoanPage;
