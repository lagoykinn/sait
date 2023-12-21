import { IRegistrationResponse } from './../types/types';
import { $user } from ".";
import jwt_decode from "jwt-decode";
import { IUser } from "../store/action-creators/auth/auth";

export const registration = async ({...dto}) => {
    const { data } = await $user.post<IUser>("api/users/registration", {
        email: dto.email,
        password: dto.password,
        username: dto.username
    });
    return data
    // localStorage.setItem("token", data.token);
    // return jwt_decode(data.token);
};

export const login = async ({...dto}) => {
    const { data } = await $user.post("api/user/login", {
        email: dto.email,
        password: dto.password,
    });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
};
