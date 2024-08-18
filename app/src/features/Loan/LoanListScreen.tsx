import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import Card from '../../elements/Card';
import styles from '../../styles/LoanListScreenStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigationHelper } from '../../navigation/routing';
import { GET_LOAN_APPLICATIONS } from '../graphql/queries/GetLoanQuery';
import { LoanApplicationObject } from '../../interfaces/Loan';

// The LoanListScreen component displays a list of loan applications.
// It fetches loan data from a GraphQL API, provides search functionality, and handles navigation to other screens.
const LoanListScreen = () => {
  // Execute the GraphQL query to fetch loan applications.
  // Destructure loading, error, and data from the useQuery hook.
  const { loading, error, data, refetch } = useQuery<{ loanApplications: LoanApplicationObject[] }>(GET_LOAN_APPLICATIONS);

  // Local state to manage the search text input by the user.
  const [searchText, setSearchText] = useState('');

  // Custom navigation helper to manage navigation between screens.
  const { navigateToLoanPage } = useNavigationHelper();

  // Use useFocusEffect to refetch loan data when the screen is focused.
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  // Handle pressing a loan card by logging the loan ID.
  // In a real application, this could navigate to a loan detail screen.
  const handleCardPress = (loanId: number) => {
    console.log(`Navigate to loan detail page for loan ID: ${loanId}`);
  };

  // Show a loading indicator while the loan data is being fetched.
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#30c2e3" testID="loading-indicator" />
      </View>
    );
  }

  // Show an error message if there is an error fetching the loan data.
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Card style={styles.errorCard}>
          <MaterialIcons name="error-outline" size={48} color="red" />
          <Text style={styles.errorText}>Error: {error.message}</Text>
        </Card>
      </View>
    );
  }

  // Filter the list of loans based on the search text input by the user.
  const filteredLoans = data?.loanApplications.filter((loan: LoanApplicationObject) => 
    loan.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
    loan.email.toLowerCase().includes(searchText.toLowerCase())
  ) ||  [];

  // If no loans match the search criteria, show a message and a button to apply for a loan.
  if (filteredLoans.length === 0) {
    return (
      <View style={styles.noLoansContainer}>
        <Card style={styles.noLoansCard}>
          <Text style={styles.noLoansText}>There are no loans available.</Text>
          <TouchableOpacity style={styles.applyButton} onPress={navigateToLoanPage}>
            <Text style={styles.applyButtonText}>Apply for a Loan</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }

  // Render the list of filtered loans inside a scrollable view.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Applications</Text>

      {/* Search input to filter loan applications by name or email */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or email"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Scrollable list of loan applications */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {filteredLoans.map((loan) => (
          <TouchableOpacity 
            key={loan.id} 
            style={styles.card} 
            onPress={() => handleCardPress(loan.id)}
          >
            <Card style={styles.cardContent}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{loan.fullName}</Text>
                <Text>Email: {loan.email}</Text>
                <Text>Amount: ${loan.loanAmount}</Text>
                <Text>Purpose: {loan.loanPurpose}</Text>
              </View>
              <MaterialIcons name="arrow-forward" size={24} color="#30c2e3" style={styles.arrowIcon} />
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LoanListScreen;
