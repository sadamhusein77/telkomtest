import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'

//POST
const postNewsBlog = (data) => Post('posts', false, data)

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

// DETELTE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

const API = {
    postNewsBlog,
    updateNewsBlog,
    getNewsBlog,
    getComments,
    deleteNewsBlog
}

export default API