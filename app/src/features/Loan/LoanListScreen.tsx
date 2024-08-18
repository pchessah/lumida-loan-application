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

const LoanListScreen = () => {
  const { loading, error, data, refetch } = useQuery<{ loanApplications: LoanApplicationObject[] }>(GET_LOAN_APPLICATIONS);
  const [searchText, setSearchText] = useState('');
  const { navigateToLoanPage } = useNavigationHelper();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#30c2e3" />
      </View>
    );
  }

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

  const filteredLoans = data?.loanApplications.filter((loan: LoanApplicationObject) => 
    loan.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
    loan.email.toLowerCase().includes(searchText.toLowerCase())
  ) ||  [];

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Applications</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or email"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {filteredLoans.map((loan: any) => (
          <Card key={loan.id} style={styles.card}>
            <Text style={styles.cardTitle}>{loan.fullName}</Text>
            <Text>Email: {loan.email}</Text>
            <Text>Amount: ${loan.loanAmount}</Text>
            <Text>Purpose: {loan.loanPurpose}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default LoanListScreen;
