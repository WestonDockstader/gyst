import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  Card,
  Text,
  SearchBar,
  Avatar,
  Badge,
  Button,
  ListItem,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { peopleService } from '../services/authService';

const NetworkTab = () => {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load people from API
    const loadPeople = async () => {
      try {
        const peopleData = await peopleService.getAllPeople();
        setPeople(peopleData);
        setFilteredPeople(peopleData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load people:', error);
        Alert.alert('Error', 'Failed to load network data');
        setLoading(false);
      }
    };
    
    loadPeople();
  }, []);

  useEffect(() => {
    // Filter people based on search term
    const filtered = people.filter(person =>
      `${person.firstName} ${person.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPeople(filtered);
  }, [searchTerm, people]);

  const handlePersonPress = (person) => {
    setSelectedPerson(person);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPerson(null);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading network...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        placeholder="Search by name, position, or skills..."
        onChangeText={setSearchTerm}
        value={searchTerm}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
        inputStyle={styles.searchText}
        searchIcon={{ color: '#2c3e50' }}
        clearIcon={{ color: '#2c3e50' }}
      />

      {/* People List */}
      <ScrollView style={styles.peopleList} showsVerticalScrollIndicator={false}>
        {filteredPeople.map((person) => (
          <TouchableOpacity
            key={person.id}
            onPress={() => handlePersonPress(person)}
          >
            <Card containerStyle={styles.personCard}>
              <View style={styles.personHeader}>
                <Avatar
                  size="medium"
                  rounded
                  title={`${person.firstName.charAt(0)}${person.lastName.charAt(0)}`}
                  containerStyle={styles.personAvatar}
                  titleStyle={styles.avatarTitle}
                />
                <View style={styles.personInfo}>
                  <Text style={styles.personName}>
                    {person.firstName} {person.lastName}
                  </Text>
                  <Text style={styles.personPosition}>
                    {person.position}
                  </Text>
                  <Text style={styles.personLocation}>
                    <Icon name="location-on" size={14} color="#666" />
                    {' '}{person.location}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.skillsLabel}>Skills:</Text>
              <View style={styles.skillsContainer}>
                {person.skills.slice(0, 3).map((skill, index) => (
                  <Badge
                    key={index}
                    value={skill}
                    badgeStyle={styles.skillBadge}
                    textStyle={styles.skillText}
                  />
                ))}
                {person.skills.length > 3 && (
                  <Badge
                    value={`+${person.skills.length - 3} more`}
                    badgeStyle={styles.moreBadge}
                    textStyle={styles.moreText}
                  />
                )}
              </View>
            </Card>
          </TouchableOpacity>
        ))}

        {filteredPeople.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Icon name="search-off" size={48} color="#ccc" />
            <Text style={styles.noResultsText}>
              No people found matching your search.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Person Detail Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {selectedPerson && (
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Button
                icon={
                  <Icon
                    name="arrow-back"
                    size={24}
                    color="#fff"
                  />
                }
                type="clear"
                onPress={closeModal}
              />
              <Text style={styles.modalTitle}>Profile Details</Text>
              <View style={{ width: 40 }} />
            </View>

            <ScrollView style={styles.modalContent}>
              {/* Person Header */}
              <Card containerStyle={styles.modalCard}>
                <View style={styles.modalPersonHeader}>
                  <Avatar
                    size="large"
                    rounded
                    title={`${selectedPerson.firstName.charAt(0)}${selectedPerson.lastName.charAt(0)}`}
                    containerStyle={styles.modalAvatar}
                    titleStyle={styles.modalAvatarTitle}
                  />
                  <View style={styles.modalPersonInfo}>
                    <Text h4 style={styles.modalPersonName}>
                      {selectedPerson.firstName} {selectedPerson.lastName}
                    </Text>
                    <Text style={styles.modalPersonPosition}>
                      {selectedPerson.position}
                    </Text>
                    <Text style={styles.modalPersonLocation}>
                      <Icon name="location-on" size={16} color="#666" />
                      {' '}{selectedPerson.location}
                    </Text>
                  </View>
                </View>
              </Card>

              {/* Skills */}
              <Card containerStyle={styles.modalCard}>
                <Text h4 style={styles.modalSectionTitle}>
                  <Icon name="star" size={20} color="#2c3e50" />
                  {' '}Skills
                </Text>
                <View style={styles.modalSkillsContainer}>
                  {selectedPerson.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      value={skill}
                      badgeStyle={styles.modalSkillBadge}
                      textStyle={styles.modalSkillText}
                    />
                  ))}
                </View>
              </Card>

              {/* Certifications */}
              <Card containerStyle={styles.modalCard}>
                <Text h4 style={styles.modalSectionTitle}>
                  <Icon name="school" size={20} color="#2c3e50" />
                  {' '}Certifications
                </Text>
                {selectedPerson.certifications.map((cert, index) => (
                  <ListItem key={index} bottomDivider>
                    <Icon name="verified" color="#42b983" />
                    <ListItem.Content>
                      <ListItem.Title>{cert}</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </Card>

              {/* Projects */}
              <Card containerStyle={styles.modalCard}>
                <Text h4 style={styles.modalSectionTitle}>
                  <Icon name="work" size={20} color="#2c3e50" />
                  {' '}Current Projects
                </Text>
                {selectedPerson.projects.map((project, index) => (
                  <ListItem key={index} bottomDivider>
                    <Icon name="folder" color="#2c3e50" />
                    <ListItem.Content>
                      <ListItem.Title>{project}</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </Card>

              {/* Manager */}
              <Card containerStyle={styles.modalCard}>
                <Text style={styles.managerText}>
                  <Text style={styles.managerLabel}>Manager: </Text>
                  {selectedPerson.manager}
                </Text>
              </Card>
            </ScrollView>
          </View>
        )}
      </Modal>
    </View>
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
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  searchText: {
    fontSize: 16,
  },
  peopleList: {
    flex: 1,
  },
  personCard: {
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  personHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  personAvatar: {
    backgroundColor: '#2c3e50',
    marginRight: 15,
  },
  avatarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 3,
  },
  personPosition: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  personLocation: {
    fontSize: 12,
    color: '#666',
  },
  skillsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#2c3e50',
    marginRight: 6,
    marginBottom: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  skillText: {
    fontSize: 10,
  },
  moreBadge: {
    backgroundColor: '#ccc',
    marginRight: 6,
    marginBottom: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  moreText: {
    fontSize: 10,
    color: '#666',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2c3e50',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  modalCard: {
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  modalPersonHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  modalAvatar: {
    backgroundColor: '#2c3e50',
    marginRight: 15,
  },
  modalAvatarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalPersonInfo: {
    flex: 1,
  },
  modalPersonName: {
    color: '#2c3e50',
    marginBottom: 5,
  },
  modalPersonPosition: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  modalPersonLocation: {
    fontSize: 14,
    color: '#666',
  },
  modalSectionTitle: {
    color: '#2c3e50',
    marginBottom: 15,
  },
  modalSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalSkillBadge: {
    backgroundColor: '#2c3e50',
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  modalSkillText: {
    fontSize: 12,
  },
  managerText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  managerLabel: {
    fontWeight: 'bold',
  },
});

export default NetworkTab;
