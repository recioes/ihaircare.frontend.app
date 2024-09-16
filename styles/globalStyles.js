import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#A259FF',
  secondary: '#FF6370',
  background: '#F6F6F6',
  textPrimary: '#333',
  textSecondary: '#666',
  button: '#FF69B4',
  modalBackground: '#FFF',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.modalBackground,
  },
  treatmentItem: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: colors.textSecondary,
    borderWidth: 1,
  },
});
