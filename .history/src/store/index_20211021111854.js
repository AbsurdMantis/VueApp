import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "October 15, 2021"},
      {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "October 15, 2021"},
      {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "October 15, 2021"},
      {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "October 15, 2021"},
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: { 
    toggleEditPost(state,payload){
      state.editPost = payload
    },
    updateUser(state, payload){
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id
      state.profileEmail = doc.data().email
      state.profileFirstName = doc.data().firstName
      state.profileLastName = doc.data().lastName
      state.profileUsername = doc.data().username
    },
    setProfileInitials(state) {
      state.profileInitials = 
        state.profileFirstName.match(/(\b\S)?/g).join("")
        state.profileLastName.match(/(\b\S)?/g).join("")
    },

  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get()
      commit("setProfileInfo", dbResults)
      commit("setProfileInitials")
    },
  },
  modules: {
  }
})