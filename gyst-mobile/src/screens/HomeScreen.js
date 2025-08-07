import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Header,
  Avatar,
  Text,
  ButtonGroup,
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ProfileTab from '../components/ProfileTab';
import NetworkTab from '../components/NetworkTab';
import ThemeSelector from '../components/ThemeSelector';

const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { user, logout } = useAuth();
  const { getOrganizationInfo, getThemeColors } = useTheme();
  const orgInfo = getOrganizationInfo();
  const themeColors = getThemeColors();

  const buttons = ['Profile', 'Network'];

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          onPress: async () => {
            try {
              await logout();
            } catch (error) {
              console.error('Logout failed:', error);
            }
          },
        },
      ]
    );
  };

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <ProfileTab />;
      case 1:
        return <NetworkTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: orgInfo.organization,
          style: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
        }}
        leftComponent={
          <ThemeSelector variant="modal" />
        }
        rightComponent={
          <Button
            icon={
              <Icon
                name="exit-to-app"
                size={24}
                color="#fff"
              />
            }
            type="clear"
            onPress={handleLogout}
          />
        }
        backgroundColor={themeColors.primary}
      />

      {/* User Info Section */}
      <View style={[styles.userSection, { backgroundColor: themeColors.surface }]}>
        <Avatar
          size="large"
          rounded
          title={user?.firstName?.charAt(0) || 'U'}
          containerStyle={[styles.avatar, { backgroundColor: themeColors.primary }]}
          titleStyle={styles.avatarTitle}
        />
        <Text h4 style={[styles.welcomeText, { color: themeColors.text.primary }]}>
          Welcome, {user?.firstName || 'User'}!
        </Text>
        <Text style={[styles.userEmail, { color: themeColors.text.secondary }]}>
          {user?.email}
        </Text>
      </View>

      {/* Tab Navigation */}
      <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonGroup}
        selectedButtonStyle={[styles.selectedButton, { backgroundColor: themeColors.primary }]}
        selectedTextStyle={styles.selectedButtonText}
        textStyle={[styles.buttonText, { color: themeColors.text.secondary }]}
      />

      {/* Content Area */}
      <ScrollView style={[styles.content, { backgroundColor: themeColors.background }]} showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userSection: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    backgroundColor: '#2c3e50',
    marginBottom: 10,
  },
  avatarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#2c3e50',
    marginBottom: 5,
  },
  userEmail: {
    color: '#666',
    fontSize: 14,
  },
  buttonGroup: {
    marginHorizontal: 0,
    marginTop: 0,
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectedButton: {
    backgroundColor: '#2c3e50',
  },
  selectedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
