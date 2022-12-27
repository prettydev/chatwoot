/* global axios */

import Cookies from 'js-cookie';
import endPoints from './endPoints';
import { setAuthCredentials, clearCookiesOnLogout } from '../store/api';

export default {
  login(creds) {
    return new Promise((resolve, reject) => {
      axios
        .post('auth/sign_in', creds)
        .then(response => {
          setAuthCredentials(response);
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },

  register(creds) {
    const urlData = endPoints('register');
    const fetchPromise = new Promise((resolve, reject) => {
      axios
        .post(urlData.url, {
          account_name: creds.accountName.trim(),
          user_full_name: creds.fullName.trim(),
          email: creds.email,
          password: creds.password,
          h_captcha_client_response: creds.hCaptchaClientResponse,
        })
        .then(response => {
          setAuthCredentials(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
    return fetchPromise;
  },
  validityCheck() {
    const urlData = endPoints('validityCheck');
    return axios.get(urlData.url);
  },
  logout() {
    const urlData = endPoints('logout');
    const fetchPromise = new Promise((resolve, reject) => {
      axios
        .delete(urlData.url)
        .then(response => {
          clearCookiesOnLogout();
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
    return fetchPromise;
  },
  hasAuthCookie() {
    return !!Cookies.getJSON('cw_d_session_info');
  },
  getAuthData() {
    if (this.hasAuthCookie()) {
      return Cookies.getJSON('cw_d_session_info');
    }
    return false;
  },
  verifyPasswordToken({ confirmationToken }) {
    return new Promise((resolve, reject) => {
      axios
        .post('auth/confirmation', {
          confirmation_token: confirmationToken,
        })
        .then(response => {
          setAuthCredentials(response);
          resolve(response);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  setActiveAccount({ accountId }) {
    const urlData = endPoints('setActiveAccount');
    return axios.put(urlData.url, {
      profile: {
        account_id: accountId,
      },
    });
  },
};
