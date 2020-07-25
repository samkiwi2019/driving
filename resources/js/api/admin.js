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
 * Get user self
 * */
export const getUser = () => {
    return axios.request({
        url: '/api/v1/me',
        method: 'post'
    })
}

/**
 * Get all quizzes (require: Authorization)
 * @param {object} params
 * @param {int} params.page
 * @param {int} params.size
 * @param {int} params.type
 * @returns {Promise}
 * */
export const getCustomers = (params) => {
    return axios.request({
        url: '/api/v1/user',
        params: params,
        method: 'get'
    })
}

export const createUser = (data) => {
    return axios.request({
        url: '/api/v1/user',
        data: data,
        method: 'post'
    })
}

export const updateUser = (data) => {
    return axios.request({
        url: `/api/v1/user/${data.id}`,
        data: data,
        method: 'put'
    })
}

export const deleteUserById = (id) => {
    return axios.request({
        url: `/api/v1/user/${id}`,
        method: 'delete'
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
        url: `/api/v1/quiz`,
        params: data,
        method: 'get'
    })
};

/**
 * Create a quiz (require: Authorization and security level 11)
 * @param {object} data
 * @param {string} data.question required
 * @param {string} data.type required  1-8
 * @param {string} data.input required Checkbox or Radio
 * @param {string} data.i18n required en
 * @param {string} data.image
 * @param {string} data.audio
 * @param {string} data.description
 * @returns {Promise}
 * */
export const addQuiz = (data) => {
    return axios.request({
        url: '/api/v1/quiz',
        data: data,
        method: 'post'
    })
}

/**
 * Update a quiz (require: Authorization and security level 11)
 * @param {object} data
 * @param {int} data.id required
 * @param {string} data.question required
 * @param {string} data.type required  1-8
 * @param {string} data.input required Checkbox or Radio
 * @param {string} data.i18n required en
 * @param {string} data.image
 * @param {string} data.audio
 * @param {string} data.description
 * @returns {Promise}
 * */
export const updateQuiz = (data) => {
    return axios.request({
        url: `/api/v1/quiz/${data.id}`,
        data: data,
        method: 'put'
    })
}

/**
 * Delete a quiz (require: Authorization and security level 11)
 * @param {int} id required
 */
export const deleteQuiz = (id) => {
    return axios.request({
        url: `/api/v1/quiz/${id}`,
        method: 'delete'
    })
}
