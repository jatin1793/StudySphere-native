import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://study-sphere-jeli.onrender.com",
});

export const Login = async ({ email, password }) => {
    try {
        let response = await api.post(
            '/student/login',
            {
                email,
                password
            },
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const Signup = async ({ phone, email, name, password, institution, qualification, course }) => {
    try {
        let response = await baseUrl.post(
            '/student/register',
            {
                phone,
                email,
                name,
                password,
                institution,
                qualification,
                course,
            },
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const Student_details = async () => {
    try {
        let response = await api.post("/student/details", {}, {
            headers: {
                "Content-type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Get_student_course = async ({ id }) => {
    try {
        let response = await api.post(`/student/course/${id}`, JSON.stringify({ "courseid": id }), {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Get_student_home = async () => {

    try {
        let response = await api.post("/student/home", {}, {
            headers: {
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else {
            console.error('Error message:', error.message);
        }
    }
};

export const Get_video_student = async ({ videoid }) => {
    try {
        let response = await api.post(`/student/video/${videoid}`, { "videoid": videoid}, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Check_if_enrolled = async ({ id, bodyContent }) => {
    try {
        let response = await api.post(`/student/checkifenrolled/${id}`, bodyContent, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Enroll_in_course = async ({ bodyContent }) => {
    try {
        let response = await api.post(`/student/joincourse/${id}`, bodyContent, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Set_student_profileimg = async ({ formData }) => {
    try {
        let response = await api.post("/student/profileimg", formData, {
            headers: {
                authorization: `bearer ${JSON.parse(
                    AsyncStorage.getItem("student_token")
                )}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Update_student_profile = async ({ name, phone, qualification, institution, course }) => {
    try {
        let response = await api.post('/student/updateprofile', JSON.stringify({ name, phone, qualification, institution, course }), {
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Student_follow = async ({ id, bodyContent }) => {
    try {
        let response = await api.post(`/student/follow/${id}`, bodyContent, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Check_if_liked = async ({ videoid }) => {
    try {
        let response = await api.get(`/student/video/checklike/${videoid}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Like_video = async ({ videoid }) => {
    try {
        let response = await api.post(`/student/video/like/${videoid}`, { "videoid": videoid }, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem('student_token'))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};




// INSTRUCTOR ROUTES
export const Instructor_courses = async () => {
    try {
        let response = await api.get("/instructor/mycourses", {
            headers: {
                authorization: `bearer ${JSON.parse(
                    await AsyncStorage.getItem("instructor_token")
                )}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Set_profile_img_of_instructor = async ({ formData }) => {
    try {
        let response = await api.post("/instructor/profileimg", formData, {
            headers: {
                authorization: `bearer ${JSON.parse(
                    await AsyncStorage.getItem("instructor_token")
                )}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const update_profile_instructor = async ({ username, phone, qualification, experiance }) => {
    try {
        let response = await api.post('/instructor/update', JSON.stringify({ username, phone, qualification, experiance }), {
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Create_course = async ({ formData }) => {
    try {
        let response = await api.post("/instructor/createcourse", formData, {
            headers: {
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Get_course_instructor = async ({ id }) => {
    try {
        let response = await api.post(`/instructor/course/${id}`, bodyContent, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Delete_course = async ({ courseid }) => {
    try {
        let response = await api.delete(`/instructor/course/deletecourse/${courseid}`, {
            headers: {
                "Content-type": 'application/json',
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            },
            data: { courseid: id }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Delete_video = async ({ id }) => {
    try {
        let response = await api.delete(`/instructor/deletevideo/${id}`, {
            headers: {
                "Content-type": 'application/json',
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            },
            data: { courseid: id }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Instructor_signup = async ({ phone, email, name, password, qualification, experience, domain }) => {
    try {
        let response = await api.post('/instructor/register', {
            phone, email, name, password, qualification, experience, domain
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Instructor_login = async ({ email, password, }) => {
    try {
        let response = await api.post('/instructor/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Get_video_instructor = async ({ bodyContent }) => {
    try {
        let response = await api.post(`/instructor/video/${videoid}`, bodyContent, {
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const Upload_video_to_course = async ({ courseid, formData }) => {
    try {
        let response = await api.post(`/instructor/uploadvideo/${courseid}`, formData, {
            headers: {
                authorization: `bearer ${JSON.parse(await AsyncStorage.getItem("instructor_token"))}`
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};