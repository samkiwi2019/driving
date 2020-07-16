import axios from './api.request'

/**
 * register
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.nickname
 * @param {string} data.password
 * @param {string} data.password_confirmation
 * @returns {Promise}
 * */
export const register = (data) => {
    return axios.request({
        url: '/api/register',
        data: data,
        method: 'post'
    })
}
/**
 * login
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Promise}
 */
export const login = (data) => {
    return axios.request({
        url: '/api/login',
        data: data,
        method: 'post'
    })
}

export const logout = () => {
    return axios.request({
        url: '/api/logout',
        method: 'post'
    })
}
/**
 * require: Authorization
 * */

export const getUser = () => {
    return axios.request({
        url: '/api/v1/user',
        method: 'post'
    })
}



/**
 * Get all quizzes (require: Authorization)
 * @param {object} data
 * @param {int} data.page
 * @param {int} data.size
 * @param {int} data.type
 * @returns {Promise}
 * */
export const postQuizList = (data) => {
    return axios.request({
        url: `/api/v1/quizzes`,
        params: data,
        method: 'get'
    })
};
