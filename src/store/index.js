import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let production = !window.location.host.includes('localhost');
let baseUrl = production ? 'heroku address' : '//localhost:3000/';

Vue.use(Vuex)

let api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

function getProfile(people, userData, id) {
  let person = people.find(person => person.userID === id)
  return (person)
}

function mapSkills(people, array2, array3, array4) {
  let bridge = { UserId: 0, map: [] }
  let set = {}
  people.forEach(person => {
    bridge.UserId = person._id
    if (person.skills.length > 0) {
      bridge.map = []
      person.skills.forEach(obj => {
        set = { skillID: "", Skill: "", Domain: "", Platform: "" }
        let skill = array2.find(skill => skill._id === obj.skillID)
        let domain = array3.find(domain => domain._id === skill.DomaintoSkill_Id)
        let platform = array4.find(platform => platform._id === skill.PlatformtoSkill_Id)
        set.skillID = skill._id
        set.Skill = skill.SkillName
        set.Domain = domain.domainName
        set.Platform = platform.platformName
        bridge.map.push(set)
      })
      person.skills = bridge.map
    }
    else {
      person.skills = [{ skillID: "0", Skill: "1", Domain: "2", Platform: "3" }]
    }
  })
  return
}

function mapLocation(people, locations) {
  people.forEach(person => {
    if (person.personLocation) {
      let location = locations.find(location => location._id === person.personLocation)
      person.personLocation = location.locationDescription
    }
  })
  return
}

function mapPositions(people, positions) {
  people.forEach(person => {
    if (person.personPosition) {
      let position = positions.find(position => position._id === person.personPosition)
      person.personPosition = position.positionTitle
    }
  })
  return
}

export default new Vuex.Store({
  state: {
    user: {},
    userData: {},
    clients: [],
    domains: [],
    locations: [],
    people: [],
    platforms: [],
    positions: [],
    skills: []
  },
  mutations: {
    ////////// Authentication
    setUser(state, payload) {
      state.user = payload
      state.userData = getProfile(state.people, state.userData, payload._id)
    },
    clearUser(state) {
      state.user = {}
    },
    logout(state) {
      state.user = {}
    },
    setUserData(state, payload) {
      state.userData = payload
    },
    ////////// End Authentication
    setClients(state, payload) {
      state.clients = payload
    },
    setDomains(state, payload) {
      state.domains = payload
    },
    setLocations(state, payload) {
      state.locations = payload
      mapLocation(state.people, state.locations)
    },
    setPeople(state, payload) {
      state.people = payload
    },
    setPlatforms(state, payload) {
      state.platforms = payload
    },
    setPositions(state, payload) {
      state.positions = payload
      mapPositions(state.people, state.positions)
    },
    setSkills(state, payload) {
      state.skills = payload
      mapSkills(state.people, state.skills, state.domains, state.platforms)
    }
  },
  actions: {
    //////// Authentication
    userRegister({ commit, dispatch }, payload) {
      auth.post('register', payload)
        .then(res => {
          commit('setUser', res.data)
          router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    userLogin({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data.data)
          //dispatch('getUser', getUserDataId(this.state.people, res.data.data._id))
          router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    userLogout({ commit }) {
      auth.delete('logout')
        .then(res => {
          commit('clearUser')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Authentication

    //////// Initialize Store
    getInitialize({ dispatch }) {
      dispatch('getPeople');
      dispatch('getPlatforms');
      dispatch('getDomains');
      dispatch('getClients');
      dispatch('getLocations');
      dispatch('getPositions');
      dispatch('getSkills');
    },

    //////// Clients
    getClients({ commit }) {
      api.get('clients')
        .then(res => {
          commit('setClients', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Clients

    //////// Domains
    getDomains({ commit }) {
      api.get('domains')
        .then(res => {
          commit('setDomains', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Domains

    //////// Locations
    getLocations({ commit }) {
      api.get('locations')
        .then(res => {
          commit('setLocations', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Locations

    //////// People
    getPeople({ commit }) {
      api.get('people')
        .then(res => {
          commit('setPeople', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End People

    //////// Platform
    getPlatforms({ commit }) {
      api.get('platforms')
        .then(res => {
          commit('setPlatforms', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Platform

    //////// Position
    getPositions({ commit }) {
      api.get('positions')
        .then(res => {
          commit('setPositions', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //////// End Position

    //////// Skills
    getSkills({ commit }) {
      api.get('skills')
        .then(res => {
          commit('setSkills', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    //////// End Skills
  },
  modules: {
  }
})
