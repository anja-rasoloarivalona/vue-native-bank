import { loginQuery } from '../../graphQL/authQuery'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

const state = {
    isUserAuthed: false,
    token: null,
    expiryDate: null,
    userId: null,
    userEmail: null,
    userName: null,
    appStatus: 'auth',
}

const getters = {
    auth: state => {
        return state
    }
}

const mutations = {
    setIsAuthToTrue (state, authData) {
        state.isUserAuthed = true
        state.token = authData.token
        state.expiryDate = authData.expiryDate
        state.userId = authData.userId
        state.userEmail = authData.userEmail
        state.userName = authData.userName
        state.appStatus = authData.appStatus
        axios.defaults.headers.common.Authorization = 'Bearer ' + authData.token
    },
    setIsAuthToFalse (state) {
        state.isAuth = false
        state.token = null
        state.userId = null
        state.userName = null
        state.appStatus = 'auth'
        state.isAppReady = false
        axios.defaults.headers.common.Authorization = 'Bearer '
    }
}

const actions = {
    checkIfUserIsAuthed: async function({ commit}){
        const data = await AsyncStorage.getItem('bank-app')
        const authData = JSON.parse(data)
        if(authData ){
            commit('setIsAuthToTrue', authData)
            return true
        } else {
            return false
        }
    },
    login: async function({ commit }, input) {
        const graphqlQuery = loginQuery(input)
        try {
            const response = await axios.post('/', graphqlQuery)
            const resData = response.data.data.login
            console.log('login resData', resData)
            const remainingMilliseconds = 24 * 60 * 60 * 1000
            const expiryDate = new Date(new Date().getTime() + remainingMilliseconds).toISOString()
            const authData = {
                token: resData.token,
                userId: resData.user._id,
                userName: resData.user.name,
                userEmail: resData.user.email,
                appStatus: resData.user.status,
                expiryDate: expiryDate
            }
            await AsyncStorage.setItem('bank-app', JSON.stringify(authData))
            commit('setIsAuthToTrue', authData)
            return {
                success: true
            }
        } catch (err) {
            console.log('error login', err)
        }
    },
    logout: async function({ commit}) {
        await AsyncStorage.removeItem('bank-app')
        commit('setIsAuthToFalse')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}