import axios from './api.request'

/**
 * @param {object} data
 * @return {Promise}
 * */
export const register = (data) => {
    return axios.request({
        url: '/api/register',
        data: data,
        method: 'post'
    })
}
/**
 *  Login
 *  @param string email
 *  @param string password
 */
export const login = ({email,password}) => {
    return axios.request({
        url: '/api/login',
        data: {email,password},
        method: 'post'
    })
}

export const logout = () => {
    return axios.request({
        url: '/api/logout',
        method: 'post'
    })
}

export const getUser = () => {
    return axios.request({
        url: '/api/v1/user',
        method: 'post'
    })
}



/**
 * Get all quizzes (require: Authorization)
 * @param int pages
 * @param int size
 * @param int type
 * @return {Promise}
 * */
export const postQuizList = ({page = 1, size = 10, type = 0}) => {
    return axios.request({
        url: `/api/v1/quizzes`,
        params: {page, size, type},
        method: 'get'
    })
};
