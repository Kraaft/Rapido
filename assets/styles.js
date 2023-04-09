import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 9,
	width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    paddingTop: 0,
	width: '90%',
  },
  logo: {
	width: '100%',
    height: 150,
    marginRight: 10,
	resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formulas: {
    width: '100%',
    paddingHorizontal: 20,
  },
  formula: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#052187',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  formulaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  formulaResult: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});