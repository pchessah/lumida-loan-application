import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/NavbarStyles';
import { useNavigationHelper } from '../navigation/routing';

// The Navbar component provides a navigation bar at the top of the screen.
// It includes links to the home page, loan list, and loan application form, as well as a login button.
const Navbar = () => {
  // Use custom navigation helper to navigate between different pages.
  const { navigateToLoanPage, navigateToLoanListPage, navigateToHomePage } = useNavigationHelper();

  // Handle the login button press. Currently, it only logs to the console.
  const handleLoginPress = () => {
    console.log('Login pressed');
  };

  return (
    <View style={styles.navbar}>
      {/* Navigation title that navigates back to the home page when pressed */}
      <Text onPress={navigateToHomePage} style={styles.title}>Numida</Text>
      <View style={styles.actions}>
        {/* Login button */}
        <TouchableOpacity
          onPress={handleLoginPress}
          activeOpacity={0.6}
        >
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
        {/* View Loans button */}
        <TouchableOpacity
          onPress={navigateToLoanListPage}
          activeOpacity={0.6}
        >
          <Text style={styles.navText}>View Loans</Text>
        </TouchableOpacity>
        {/* Apply for Loan button */}
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
