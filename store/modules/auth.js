import axios from 'axios'
import { AsyncStorage } from 'react-native'

const state = {
    appStatus: 'auth',
    isUserAuthed: false,
    token: null,
    tokenExpiryDate: null,
    userId: null,
    userEmail: null,
    userName: null
}

const getters = {
    auth: state => {
        return state
    }
}

const actions = {
    tryLogin: async function({ commit}){
        console.log('trying login')
        const authData = await AsyncStorage.getItem('bank-app')
        if(!authData){
            return false
        }
    }
}

export default {
    state,
    getters,
    actions
}