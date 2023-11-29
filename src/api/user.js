import { BASE_API_URL } from "./constants";

export async function getMe() {
    const response = await fetch(BASE_API_URL + "/user/me", {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function getUser(id) {
    const response = await fetch(BASE_API_URL + "/user/" + id, {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function createUser(user) {
    const response = await fetch(BASE_API_URL + "/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(user)
    });
    return response.json();
}