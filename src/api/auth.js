import { BASE_API_URL } from "./constants";

export async function login(user, pass) {
    const response = await fetch(BASE_API_URL + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email: user, password: pass })
    });
    return response.json();
}

export async function logout() {
    const response = await fetch(BASE_API_URL + "/auth/logout", {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

