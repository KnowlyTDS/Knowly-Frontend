const API_BASE = 'https://knowlyback-backendapi.azurewebsites.net/api/v1';

export const API = {
    SESSION: {
       POST: {
        USER: {
            LOGIN: `${API_BASE}/Account/authenticate`,
               REGISTER: `${API_BASE}/Account/registeadmin`,
        }
       }
    }, 
    USER: {
        PUT: {
            EDDIT: `${API_BASE}/User/Edit`,
        }
    },
    COURSES: {
        GET: {
            ALL: `${API_BASE}/cursos`,
            BY_ID: (id) => `${API_BASE}/Course/${id}`,
            STUDENTS: (courseId, id) => `${API_BASE}/${courseId}/GetStudents/${id}`,
    }
    },


    // USER: `${API_BASE}/user`,
    // LOGOUT: `${API_BASE}/logout`,
    // USER_BY_ID: (id) => `${API_BASE}/user/${id}`,
    // USER_BY_USERNAME: (username) => `${API_BASE}/user/${username}`,
    // USER_BY_EMAIL: (email) => `${API_BASE}/user/${email}`,

    // POST: `${API_BASE}/post`,
    // POST_BY_ID: (id) => `${API_BASE}/post/${id}`,
    // POST_BY_USER: (id) => `${API_BASE}/post/user/${id}`,
    // POST_BY_CATEGORY: (id) => `${API_BASE}/post/category/${id}`,
    // POST_BY_TITLE: (title) => `${API_BASE}/post/title/${title}`,
    // POST_BY_CONTENT: (content) => `${API_BASE}/post/content/${content}`,
    // POST_BY_DATE: (date) => `${API_BASE}/post/date/${date}`,
}