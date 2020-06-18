import axios from '@/libs/api.request'

/**
 * Get all quizzes (Authorization)
 * @param {object} data => {pages:int (default : 1), size: int (default : 10) }
 * @return Quiz[]
 *
 * */
export const getQuizList = (data) => {
    return axios.request({
        url: '/api/admin/quizzes',
        data: data,
        method: 'post'
    })
};
