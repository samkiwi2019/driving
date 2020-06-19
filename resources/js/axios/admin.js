import axios from './api.request'


/**
 *  Login
 *  @param string email
 *  @param string password
 */
export const apiLogin = ({email,password}) => {
    return axios.request({
        url: '/api/login',
        data: {email,password},
        method: 'post'
    })
}

export const login = ({email,password,remember}) => {
    return axios.request({
        url: '/login',
        data: {email,password,remember},
        method: 'post'
    })
}

export const logout = () => {
    return axios.request({
        url: '/logout',
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
 * @return Quiz[]
 * */
export const getQuizList = ({pages = 1,size = 1}) => {
    return axios.request({
        url: '/api/v1/quizzes',
        data: {pages, size},
        method: 'post'
    })
};
