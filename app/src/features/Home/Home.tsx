import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import styles from "../../styles/HomePageStyles";
import { useNavigationHelper } from "../../navigation/routing";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import { fetchLoanProducts } from "../../state/loanApplicationSlice";

// The HomePage component is the landing page of the application.
// It displays an overview of loan products, handles loading and error states, and provides navigation to the loan application page.
const HomePage = () => {
  // Custom navigation helper for navigating to the loan application page.
  const { navigateToLoanPage } = useNavigationHelper();

  // Use dispatch to trigger actions in the Redux store.
  const dispatch = useAppDispatch();

  // Select products, loading, and error states from the Redux store.
  const { products, loading, error } = useAppSelector((state) => state.loanApplication);

  // Fetch loan products when the component mounts.
  useEffect(() => {
    dispatch(fetchLoanProducts());
  }, [dispatch]);

  // Show a loading indicator while loan products are being fetched.
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#30c2e3" />
      </View>
    );
  }

  // Show an error message if there is an error fetching loan products.
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Card style={styles.errorCard}>
          <MaterialIcons name="error-outline" size={48} color="red" />
          <Text style={styles.errorText}>Error: {error}</Text>
        </Card>
      </View>
    );
  }

  // Render the loan products and the UI layout of the homepage.
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Row: Contains the image on the right and text on the left */}
      <View style={styles.topRow}>
        <View style={styles.rightColumn}>
          <Image
            source={require("../../../../assets/images/home-img.svg")}
            style={styles.image}
          />
        </View>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>Loan Application Dashboard</Text>
          <Text style={styles.subtitle}>
            Quick and convenient unsecured loans.
          </Text>
          <Button
            title="Apply for Loan"
            onPress={navigateToLoanPage}
            style={styles.applyButton}
            textColor="#ffffff"
          />
        </View>
      </View>

      {/* Bottom Row: Displays a list of loan products */}
      <View style={styles.bottomRow}>
        {products.map((product) => (
          <Card key={product.id} style={styles.card}>
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardText}>Maximum Loan Amount: ${product.maximumAmount}</Text>
            <Text>Interest Rate: {product.interestRate}%</Text>
            <Button
              title="Learn More"
              onPress={() => console.log("Learn More pressed")}
              outlined
              backgroundColor="#30c2e3"
              textColor="#30c2e3"
              style={styles.learnMoreButton}
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomePage;
