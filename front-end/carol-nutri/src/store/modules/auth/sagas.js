import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '../../../services/api'
export function signIn({payload}){
    const {email, password} = payload

    const response = call(api.post, '')
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])