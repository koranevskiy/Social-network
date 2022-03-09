import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': '7c88a907-1ac9-4fec-b225-862d6aadec44'
    }
});

export const userAPI = {
    getUsers(page = 1, usersCount = 15){
        return instance.get(`users?page=${page}&count=${usersCount}`)
        .then(response => response.data)
    },
    follow(id){
        return instance.post('follow/' + id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data;
                }
            })
    },
    unfollow(id){
        return instance.delete('follow/' + id)
            .then(response => {
                if (response.data.statusCode === 0) {
                    return response.data;
                }
            })
    },
    authUserMe(){
        return instance.get('auth/me');
    },
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get('profile/' + userId);
    },
    updateProfileStatus(status){
        return instance.put('profile/status', {
            status
        });
    },
    getProfileStatus(userId){
        return instance.get('profile/status/' + userId);
    }
}

export const logAPI = {
    logIn({email, password, rememberMe = false}){
        return instance.post('auth/login', {
            email,
            password,
            rememberMe
        })
    },
    logOut(){
        return instance.delete('auth/login')
    }
}