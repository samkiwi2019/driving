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
        url: '/api/v1/register',
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
        url: '/api/v1/login',
        data: data,
        method: 'post'
    })
}

export const logout = () => {
    return axios.request({
        url: '/api/v1/logout',
        method: 'post'
    })
}
/**
 * require: Authorization
 * */

export const getUser = () => {
    return axios.request({
        url: '/api/v1/me',
        method: 'post'
    })
}


export const getCustomers = (params) => {
    return axios.request({
        url: '/api/v1/users',
        params: params,
        method: 'post'
    })
}

export const updateUser = (data) => {
    return axios.request({
        url: `/api/v1/update/${data.id}`,
        data: data,
        method: 'post'
    })
}

export const deleteUserById = (id) => {
    return axios.request({
        url: `/api/v1/delete/${id}`,
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
export const getQuizList = (data) => {
    return axios.request({
        url: `/api/v1/quizzes`,
        params: data,
        method: 'get'
    })
};

export const createQuizzes = (data) => {
    return axios.request({
        url: '/api/v1/addQuizzes',
        data: data,
        method: 'post'
    })
}
