import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {
  Text,
  Button,
  Card,
  Header,
  CheckBox,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = ({ variant = 'button' }) => {
  const { currentOrgId, switchOrganization, availableThemes, getOrganizationInfo } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const handleThemeSelect = async (orgId) => {
    try {
      await switchOrganization(orgId);
      setModalVisible(false);
      Alert.alert(
        'Theme Changed',
        'Your organization theme has been updated successfully!',
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to change theme. Please try again.');
    }
  };

  const currentOrg = getOrganizationInfo();

  if (variant === 'modal') {
    return (
      <>
        <Button
          title={`${currentOrg.organization}`}
          icon={
            <Icon
              name="palette"
              size={16}
              color="#fff"
              style={{ marginRight: 5 }}
            />
          }
          onPress={() => setModalVisible(true)}
          buttonStyle={styles.triggerButton}
          titleStyle={styles.triggerButtonText}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Header
              centerComponent={{
                text: 'Select Organization Theme',
                style: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
              }}
              leftComponent={{
                icon: 'close',
                color: '#fff',
                onPress: () => setModalVisible(false)
              }}
              backgroundColor={currentOrg.colors?.primary || '#2c3e50'}
            />

            <ScrollView style={styles.modalContent}>
              <Text style={styles.modalDescription}>
                Choose your organization's theme to customize the application appearance.
              </Text>

              {availableThemes.map((theme) => (
                <TouchableOpacity
                  key={theme.id}
                  onPress={() => handleThemeSelect(theme.id)}
                >
                  <Card
                    containerStyle={[
                      styles.themeCard,
                      currentOrgId === theme.id && styles.selectedThemeCard
                    ]}
                  >
                    <View style={styles.themeHeader}>
                      <View style={styles.themeInfo}>
                        <Text style={styles.themeOrganization}>
                          {theme.organization}
                        </Text>
                        <Text style={styles.themeName}>
                          {theme.name}
                        </Text>
                      </View>
                      
                      <CheckBox
                        checked={currentOrgId === theme.id}
                        onPress={() => handleThemeSelect(theme.id)}
                        checkedColor={theme.colors.primary}
                      />
                    </View>

                    {/* Color Preview */}
                    <View style={styles.colorPreview}>
                      <Text style={styles.colorLabel}>Color Scheme:</Text>
                      <View style={styles.colorRow}>
                        <View
                          style={[
                            styles.colorCircle,
                            { backgroundColor: theme.colors.primary }
                          ]}
                        />
                        <View
                          style={[
                            styles.colorCircle,
                            { backgroundColor: theme.colors.secondary }
                          ]}
                        />
                        <View
                          style={[
                            styles.colorCircle,
                            { backgroundColor: theme.colors.accent }
                          ]}
                        />
                      </View>
                    </View>

                    {/* Theme Preview */}
                    <View style={styles.themePreview}>
                      <View
                        style={[
                          styles.previewHeader,
                          { backgroundColor: theme.colors.primary }
                        ]}
                      >
                        <Text style={styles.previewHeaderText}>
                          Header Preview
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.previewContent,
                          { backgroundColor: theme.colors.background }
                        ]}
                      >
                        <Text style={[
                          styles.previewText,
                          { color: theme.colors.text.primary }
                        ]}>
                          Content Area
                        </Text>
                      </View>
                    </View>
                  </Card>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </>
    );
  }

  // Default button variant
  return (
    <Button
      title="Change Theme"
      icon={
        <Icon
          name="palette"
          size={16}
          color="#fff"
          style={{ marginRight: 5 }}
        />
      }
      onPress={() => setModalVisible(true)}
      buttonStyle={styles.defaultButton}
      titleStyle={styles.defaultButtonText}
    />
  );
};

const styles = StyleSheet.create({
  triggerButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  triggerButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  defaultButton: {
    backgroundColor: '#2c3e50',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  defaultButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  themeCard: {
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedThemeCard: {
    borderWidth: 2,
    borderColor: '#2c3e50',
  },
  themeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  themeInfo: {
    flex: 1,
  },
  themeOrganization: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 3,
  },
  themeName: {
    fontSize: 14,
    color: '#666',
  },
  colorPreview: {
    marginBottom: 15,
  },
  colorLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  colorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  themePreview: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  previewHeader: {
    padding: 12,
    alignItems: 'center',
  },
  previewHeaderText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  previewContent: {
    padding: 12,
    alignItems: 'center',
  },
  previewText: {
    fontSize: 14,
  },
});

export default ThemeSelector;
