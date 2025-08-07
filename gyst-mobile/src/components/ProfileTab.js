import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Card,
  Text,
  Button,
  Badge,
  ListItem,
  Avatar,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../contexts/AuthContext';

const ProfileTab = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);

  // Mock profile data for now - similar to web version
  const mockProfileData = {
    firstName: user?.firstName || 'Demo',
    lastName: user?.lastName || 'User',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2023-01-15',
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'React', level: 'Advanced' },
      { name: 'React Native', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' }
    ],
    certifications: [
      { name: 'AWS Certified Developer', date: '2023-06-01' },
      { name: 'React Professional', date: '2023-03-15' }
    ],
    projects: [
      { name: 'Mobile App Development', description: 'React Native cross-platform app' },
      { name: 'Web Platform', description: 'Full-stack React application' }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfileData(mockProfileData);
    }, 500);
  }, []);

  if (!profileData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <Card containerStyle={styles.card}>
        <View style={styles.profileHeader}>
          <Avatar
            size="large"
            rounded
            title={`${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`}
            containerStyle={styles.avatar}
            titleStyle={styles.avatarTitle}
          />
          <View style={styles.profileInfo}>
            <Text h4 style={styles.name}>
              {profileData.firstName} {profileData.lastName}
            </Text>
            <Text style={styles.position}>{profileData.position}</Text>
            <Text style={styles.location}>
              <Icon name="location-on" size={16} color="#666" />
              {' '}{profileData.location}
            </Text>
            <Text style={styles.startDate}>
              Started: {new Date(profileData.startDate).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <Button
          title="Edit Profile"
          type="outline"
          buttonStyle={styles.editButton}
          titleStyle={styles.editButtonText}
          icon={
            <Icon
              name="edit"
              size={16}
              color="#2c3e50"
              style={{ marginRight: 5 }}
            />
          }
        />
      </Card>

      {/* Skills Section */}
      <Card containerStyle={styles.card}>
        <Text h4 style={styles.sectionTitle}>
          <Icon name="star" size={20} color="#2c3e50" />
          {' '}Skills
        </Text>
        <View style={styles.skillsContainer}>
          {profileData.skills.map((skill, index) => (
            <Badge
              key={index}
              value={`${skill.name} (${skill.level})`}
              badgeStyle={styles.skillBadge}
              textStyle={styles.skillText}
            />
          ))}
        </View>
      </Card>

      {/* Certifications Section */}
      <Card containerStyle={styles.card}>
        <Text h4 style={styles.sectionTitle}>
          <Icon name="school" size={20} color="#2c3e50" />
          {' '}Certifications
        </Text>
        {profileData.certifications.map((cert, index) => (
          <ListItem key={index} bottomDivider containerStyle={styles.listItem}>
            <Icon name="verified" color="#42b983" />
            <ListItem.Content>
              <ListItem.Title style={styles.certTitle}>
                {cert.name}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.certDate}>
                Earned: {new Date(cert.date).toLocaleDateString()}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>

      {/* Projects Section */}
      <Card containerStyle={styles.card}>
        <Text h4 style={styles.sectionTitle}>
          <Icon name="work" size={20} color="#2c3e50" />
          {' '}Current Projects
        </Text>
        {profileData.projects.map((project, index) => (
          <ListItem key={index} bottomDivider containerStyle={styles.listItem}>
            <Icon name="folder" color="#2c3e50" />
            <ListItem.Content>
              <ListItem.Title style={styles.projectTitle}>
                {project.name}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.projectDescription}>
                {project.description}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
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
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    backgroundColor: '#2c3e50',
    marginRight: 15,
  },
  avatarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: '#2c3e50',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  startDate: {
    fontSize: 12,
    color: '#999',
  },
  editButton: {
    borderColor: '#2c3e50',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#2c3e50',
  },
  sectionTitle: {
    color: '#2c3e50',
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#2c3e50',
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  skillText: {
    fontSize: 12,
  },
  listItem: {
    paddingVertical: 10,
  },
  certTitle: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  certDate: {
    color: '#666',
    fontSize: 12,
  },
  projectTitle: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  projectDescription: {
    color: '#666',
    fontSize: 14,
  },
});

export default ProfileTab;
