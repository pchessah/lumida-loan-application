import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { NavigationContainer } from '@react-navigation/native';
import LoanListScreen from '../LoanListScreen';
import { GET_LOAN_APPLICATIONS } from '../../graphql/queries/GetLoanQuery';

// Mocked data for successful query
const mocks = [
  {
    request: {
      query: GET_LOAN_APPLICATIONS,
    },
    result: {
      data: {
        loanApplications: [
          {
            id: 1,
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            loanAmount: 10000,
            loanPurpose: 'Business Expansion',
          },
        ],
      },
    },
  },
];

describe('LoanListScreen', () => {
  it('renders loading state initially', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LoanListScreen />
        </MockedProvider>
      </NavigationContainer>
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders loan applications after fetching', async () => {
    const { getByText, debug } = render(
      <NavigationContainer>
        <MockedProvider mocks={mocks} addTypename={false}>
          <LoanListScreen />
        </MockedProvider>
      </NavigationContainer>
    );

    await waitFor(() => {
      debug();
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText(' Purpose: Business Expansion')).toBeTruthy();
    });

  });

  it('renders error state', async () => {
    const errorMock = [
      {
        request: {
          query: GET_LOAN_APPLICATIONS,
        },
        error: new Error('An error occurred'),
      },
    ];

    const { getByText, debug } = render(
      <NavigationContainer>
        <MockedProvider mocks={errorMock} addTypename={false}>
          <LoanListScreen />
        </MockedProvider>
      </NavigationContainer>
    );


    await waitFor(() => {
      debug(); 
      expect(getByText(/error/i)).toBeTruthy();
    });

    expect(getByText('Error: An error occurred')).toBeTruthy();
  });
});
