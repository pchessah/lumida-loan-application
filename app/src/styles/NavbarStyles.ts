// src/styles/NavbarStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#30c2e3',
  },
  actions: {
    flexDirection: 'row',
  },
  navText: {
    fontSize: 16,
    marginHorizontal: 20,
    color: '#30c2e3',
    paddingVertical: 10,
  },
  applyButton: {
    backgroundColor: '#30c2e3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
