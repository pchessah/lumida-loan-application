# Numida Fintech Loan Application

## Introduction

This project is a simple fintech mobile application developed as part of a frontend engineering assessment. The primary objective of this application is to allow users to apply for a loan. The application demonstrates skills in frontend and mobile development, code structure, type safety, and the use of contemporary frameworks and libraries like React Native, Redux Toolkit, and Apollo Client for GraphQL.

## What Are We Looking For in an Engineer?

We are seeking an experienced frontend engineer who is well-versed in the modern Native landscape and can lead the evolution of our codebase. The qualities we value include:

- Strong frontend and mobile development skills.
- Ability to structure well-typed, readable, and reusable code.
- Familiarity with contemporary frameworks and libraries.
- Adherence to design principles to write extendable code.

---

## Project Overview

### Objective

To create a simple fintech mobile application that allows users to apply for a loan.

### Key Features

- **GraphQL Data Fetching**: Fetch and display loan products using Apollo Client with GraphQL.
- **Form Submission with REST API**: Implement a loan application form that submits data to a REST API.
- **Modern UI/UX**: Follow contemporary design principles to create a user-friendly interface.

### Figma Design

The application design can be found [here](https://www.figma.com/design/GqPXXirX8o5yAuzOnlxn5U/Test?node-id=0-1&t=s8HM6XG5VcUZAPgs-1). This design is illustrative, and while it provides a good reference, some deviations are acceptable.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm** or **yarn**
- **Expo CLI** (for running the React Native app)

### Running the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repository/numida-loan-application.git
   cd numida-loan-application
2. **Install Dependencies**:
npm install
# or
yarn install

3. **Install Dependencies**:
npm install
# or
yarn install

## Application Structure

The project is structured as follows:

- **`src/`**: Contains all the source code.
  - **`features/`**: Contains the main features like Loan and Home.
  - ***`features/graphql/`***: Contains the GraphQL queries managed by Apollo Client.
  - **`elements/`**: Contains reusable components like Button, Card, etc.
  - **`interfaces/`**: TypeScript interfaces for type safety.
  - **`styles/`**: Contains the styling files.
  - **`navigation/`**: Handles navigation between different screens.
  - **`state/`**: Manages application state using Redux Toolkit.

## Approach to Implementation

### 1. Data Fetching with GraphQL

- **Objective**: Fetch a list of loan products from a GraphQL API.
- **Implementation**:
  - Apollo Client was used to manage GraphQL queries and handle the state related to fetching loan products.
  - A GraphQL query was created to fetch `id`, `name`, `interestRate`, and `maximumAmount` fields for each loan product.
  - The loan products are displayed on the home page in a user-friendly format that matches the design provided in the Figma file.

### 2. Form Submission with REST API

- **Objective**: Allow users to apply for a loan by submitting a form.
- **Implementation**:
  - The form includes fields for Full Name, Email, Loan Amount, and Loan Purpose.
  - Validation is implemented to ensure that all fields are correctly filled before submission.
  - Upon submission, the form data is sent via a POST request to a REST API endpoint (`/apply-loan`).
  - Success and error handling mechanisms are in place to provide feedback to the user based on the API's response.

### 3. State Management with Redux Toolkit

- **Objective**: Structure the application for scalability and maintainability.
- **Implementation**:
  - Redux Toolkit was used to manage the global state of the application, particularly the state related to form submissions and user interactions.
  - The project is organized into features, elements, and state management directories, with each component and feature encapsulated within its respective directory.
  - Redux Toolkit ensures a scalable and predictable state flow, while Apollo Client handles the specific state related to GraphQL data fetching.


## Resources

- [GraphQL Documentation](https://graphql.org/learn/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [REST API Guide](https://restfulapi.net/)


