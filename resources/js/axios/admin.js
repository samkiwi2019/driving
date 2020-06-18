import axios from './api.request'


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
