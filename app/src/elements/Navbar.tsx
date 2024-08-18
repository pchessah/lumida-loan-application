import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/NavbarStyles';
import { useNavigationHelper } from '../navigation/routing';

const Navbar = () => {
  const { navigateToLoanPage, navigateToLoanListPage, navigateToHomePage } = useNavigationHelper();

  const handleLoginPress = () => {
    console.log('Login pressed');
  };

  return (
    <View style={styles.navbar}>
      <Text  onPress={navigateToHomePage} style={styles.title}>Numida</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={handleLoginPress}
          activeOpacity={0.6}
        >
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToLoanListPage}
          activeOpacity={0.6}
        >
          <Text style={styles.navText}>View Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLoanPage}>
          <View style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply for Loan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
