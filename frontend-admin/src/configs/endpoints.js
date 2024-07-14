
const USER_SERVICE_BASE_URL = "http://localhost:6001/api/v1/"
const PROFILE_SERVICE_BASE_URL = "http://localhost:6002/api/v1/"
const INTERVIEW_SERVICE_BASE_URL = "http://localhost:6004/api/v1/"

// Define your endpoints
const ENDPOINTS = {
    ADMIN_SESSION:      USER_SERVICE_BASE_URL + "/admin/session",
    LOGIN:              USER_SERVICE_BASE_URL + "/admin/login",
    USERS_COUNT:        USER_SERVICE_BASE_URL + "/admin/count/users",
    APPROVED_MENTORS:   USER_SERVICE_BASE_URL + "/admin/mentors",
    APPROVED_MENTEES:   USER_SERVICE_BASE_URL + "/admin/mentees",
    APPROVAL_PENDING_MENTORS: USER_SERVICE_BASE_URL + "/admin/mentors/approval",
    APPROVE_MENTOR: USER_SERVICE_BASE_URL + "/admin/mentor/approve",
//  UPDATE_USER: (userId) => `${BASE_URL}/users/${userId}`,
};

// Export the endpoints
export default ENDPOINTS;
