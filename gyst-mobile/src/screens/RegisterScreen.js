import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Card,
  Header,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../contexts/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [validationError, setValidationError] = useState('');
  const { register, loading, error } = useAuth();

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError('');
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setValidationError('Please fill in all fields');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setValidationError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', validationError);
      return;
    }

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName
      };
      await register(userData);
      // Navigation will be handled automatically by AuthNavigator
    } catch (error) {
      Alert.alert('Registration Failed', error.message);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header
        centerComponent={{
          text: 'Create Account',
          style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: navigateToLogin
        }}
        backgroundColor="#2c3e50"
      />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Card containerStyle={styles.card}>
            <Text h4 style={styles.title}>
              Join Gyst
            </Text>
            <Text style={styles.subtitle}>
              Create your professional profile
            </Text>

            {(error || validationError) && (
              <Text style={styles.errorText}>
                {error || validationError}
              </Text>
            )}

            <View style={styles.nameRow}>
              <Input
                placeholder="First Name"
                leftIcon={
                  <Icon
                    name="person"
                    size={24}
                    color="#2c3e50"
                  />
                }
                value={formData.firstName}
                onChangeText={(value) => handleChange('firstName', value)}
                disabled={loading}
                containerStyle={styles.nameInput}
                inputContainerStyle={styles.inputContainer}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(value) => handleChange('lastName', value)}
                disabled={loading}
                containerStyle={styles.nameInput}
                inputContainerStyle={styles.inputContainer}
              />
            </View>

            <Input
              placeholder="Email Address"
              leftIcon={
                <Icon
                  name="email"
                  size={24}
                  color="#2c3e50"
                />
              }
              value={formData.email}
              onChangeText={(value) => handleChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              disabled={loading}
              inputContainerStyle={styles.inputContainer}
            />

            <Input
              placeholder="Password"
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color="#2c3e50"
                />
              }
              value={formData.password}
              onChangeText={(value) => handleChange('password', value)}
              secureTextEntry
              disabled={loading}
              inputContainerStyle={styles.inputContainer}
            />

            <Input
              placeholder="Confirm Password"
              leftIcon={
                <Icon
                  name="lock-outline"
                  size={24}
                  color="#2c3e50"
                />
              }
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange('confirmPassword', value)}
              secureTextEntry
              disabled={loading}
              inputContainerStyle={styles.inputContainer}
            />

            <Button
              title={loading ? "Creating Account..." : "Sign Up"}
              onPress={handleSubmit}
              disabled={loading}
              buttonStyle={styles.registerButton}
              titleStyle={styles.buttonTitle}
              loading={loading}
            />

            <Button
              title="Already have an account? Sign In"
              onPress={navigateToLogin}
              type="clear"
              titleStyle={styles.linkButton}
              disabled={loading}
            />
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    fontSize: 16,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputContainer: {
    borderBottomColor: '#2c3e50',
  },
  registerButton: {
    backgroundColor: '#2c3e50',
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    color: '#42b983',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },
});

export default RegisterScreen;
