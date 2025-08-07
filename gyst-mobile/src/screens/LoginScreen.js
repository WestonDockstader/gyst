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

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login, loading, error } = useAuth();

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await login(formData);
      // Navigation will be handled automatically by AuthNavigator
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header
        centerComponent={{
          text: 'Gyst',
          style: { color: '#fff', fontSize: 24, fontWeight: 'bold' }
        }}
        backgroundColor="#2c3e50"
      />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Card containerStyle={styles.card}>
            <Text h3 style={styles.title}>
              Welcome Back
            </Text>
            <Text style={styles.subtitle}>
              Sign in to your account
            </Text>

            {error && (
              <Text style={styles.errorText}>
                {error}
              </Text>
            )}

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

            <Button
              title={loading ? "Signing In..." : "Sign In"}
              onPress={handleSubmit}
              disabled={loading}
              buttonStyle={styles.loginButton}
              titleStyle={styles.buttonTitle}
              loading={loading}
            />

            <Button
              title="Don't have an account? Sign Up"
              onPress={navigateToRegister}
              type="clear"
              titleStyle={styles.linkButton}
              disabled={loading}
            />

            <View style={styles.demoContainer}>
              <Text style={styles.demoText}>
                Demo Login: demo@gyst.com / password123
              </Text>
            </View>
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
  inputContainer: {
    borderBottomColor: '#2c3e50',
  },
  loginButton: {
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
  demoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e8f4f8',
    borderRadius: 5,
  },
  demoText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default LoginScreen;
