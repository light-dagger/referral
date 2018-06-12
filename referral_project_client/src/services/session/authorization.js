import request from 'axios';
import {post, get} from '../api/index';
import {getLoginPath, getUserDashboardPath, getHomePath} from '../../utils/urlBuilder';
import history from '../../utils/history';
import {showSuccess, showWarning} from '../notifyService';

const TOKEN_KEY = 'AUTH_TOKEN';
const regPath = '/users/register/';
const authPath = 'obtain-auth-token/';
const resetPath = '/users/password/reset/';
const updatePath = '/users/change-password/';
const referralPath = '/users/me';
const confirmPasswordPath = '/users/password/reset/confirm/';

export function login(data) {
    return new Promise(resolve =>
        post(authPath, data, false).then((resp) => {
            if (!resp.error) {
                const token = resp.data.token;
                setRestClientToken(token);
                saveToken(token);
                showSuccess('Success', 'You have been successfully login');
                setTimeout(() => history.push(getUserDashboardPath()), 0);
            }
            if (resp.error && resp.error.message) {
                showWarning('Authorization error!', resp.error.message);
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function registration(data) {
    return new Promise(resolve =>
        post(regPath, data).then((resp) => {
            if (!resp.error) {
                showSuccess('Success', 'You have been successfully registered');
                history.push(getLoginPath(resp.data.email));
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function updatePassword(data) {
    return new Promise(resolve =>
        post(updatePath, data).then((resp) => {
            if (!resp.error) {
                showSuccess('Success', resp.data.message);
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function resetPassword(email) {
    return new Promise(resolve =>
        post(resetPath, email).then((resp) => {
            if (!resp.error) {
                showSuccess('Success', resp.data.detail);
                history.push(getLoginPath(resp.data.email));
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function confirmNewPassword(data, uidb64, token) {
    const preparedPath = `${confirmPasswordPath}${uidb64}/${token}/`;
    return new Promise(resolve =>
        post(preparedPath, data).then((resp) => {
            if (!resp.error) {
                showSuccess('Success', resp.data.detail);
                history.push(getLoginPath(resp.data.email));
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function getReferral() {
    return new Promise(resolve =>
        get(referralPath).then((resp) => {
            if (!resp.error) {
                console.log(resp.data.referral_link);
                showSuccess('Success', resp.data.referral_link);
            }
            resolve(resp);
        })
            .catch(err => {
                resolve(false); // not provide internal server error
            })
    );
}

export function logout(redirectPath = getHomePath()) {
    setRestClientToken(null);
    dropToken();
    setTimeout(() => history.push(redirectPath), 10);
}

export function restoreSession() {
    const token = loadToken();
    setRestClientToken(token);
}

export function isLoggedIn() {
    const storageToken = loadToken();
    return storageToken && getRestClientToken();
}

function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function dropToken() {
    localStorage.removeItem(TOKEN_KEY);
}

function loadToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function setRestClientToken(token) {
    if (token) {
        request.defaults.headers.common.Authorization = `Token ${token}`;
    } else {
        delete request.defaults.headers.common.Authorization;
    }
}

function getRestClientToken() {
    return request.defaults.headers.common.Authorization;
}
