import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2fcfb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  topRow: {
    flexDirection: width > 768 ? 'row' : 'column', // Row for desktop, column for mobile
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60vh', // Set height to 60vh
    marginBottom: 40, // Slightly increased to push the bottom row down
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: width > 768 ? 'center' : 'flex-start', // Center for desktop, flex-start for mobile
    marginRight: width > 768 ? 15 : 0, // No margin on mobile
    paddingHorizontal: width > 768 ? 0 : '5%', // Padding on mobile for spacing
    marginBottom: width > 768 ? 0 : 20, // Space between columns on mobile
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width > 768 ? 0 : 20, // Space between columns on mobile
  },
  title: {
    fontSize: width > 768 ? 50 : 32, // 50px for desktop, smaller for mobile
    fontWeight: '500', // Changed font weight to 500
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    width: '100%',
  },
  subtitle: {
    fontSize: width > 768 ? 22 : 18, // Smaller font size for mobile
    marginBottom: 20,
    color: '#666',
    textAlign: 'center',
    width: '100%',
  },
  applyButton: {
    backgroundColor: '#30c2e3',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: width > 768 ? '100%' : '80%', // Full width on desktop, smaller on mobile
    height: width > 768 ? height * 0.4 : 200, // Adjust height for mobile
    borderRadius: 10,
  },
  bottomRow: {
    flexDirection: width > 768 ? 'row' : 'column', // Row for desktop, column for mobile
    flexWrap: 'wrap',
    justifyContent: width > 768 ? 'space-between' : 'center', // Centered cards on mobile
    alignItems: 'flex-start',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    width: width > 768 ? '45%' : '90%', // Full width on mobile
    position: 'relative',
  },
  cardTitle: {
    fontSize: width > 768 ? 16 : 14, // Smaller font size on mobile
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: width > 768 ? 18 : 16, // Smaller font size on mobile
    marginBottom: 10,
    color: '#30c2e3',
  },
  learnMoreButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorCard: {
    padding: 20,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
