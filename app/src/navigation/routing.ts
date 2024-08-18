import { useNavigation } from '@react-navigation/native';

export const useNavigationHelper = () => {
  const navigation = useNavigation();

  const navigateToLoanPage = () => {
    navigation.navigate('Apply for Loan');
  };

  const navigateToLoanListPage = () => {
    navigation.navigate('Loan List');
  };

  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  return {
    navigateToLoanPage,
    navigateToLoanListPage,
    navigateToHomePage
  };
};