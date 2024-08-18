import React, { useCallback } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import styles from "../../styles/HomePageStyles";
import { useNavigationHelper } from "../../navigation/routing";
import { GET_LOAN_PRODUCTS } from "../graphql/queries/GetLoanProducts";
import { useQuery } from "@apollo/client";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LoanProduct } from "../../interfaces/Loan";

const HomePage = () => {
  const { navigateToLoanPage } = useNavigationHelper();
  const { loading, error, data, refetch } = useQuery<{ loanProducts: LoanProduct[] }>(GET_LOAN_PRODUCTS);

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

  const loanProducts = data?.loanProducts || [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.rightColumn}>
          <Image
            source={require("../../../../assets/images/home-img.svg")}
            style={styles.image}
            resizeMode="cover"
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

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        {loanProducts.map((product) => (
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
