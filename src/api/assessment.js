import { BASE_API_URL } from "./constants";

export async function getAssessmentMe() {
    const response = await fetch(BASE_API_URL + "/assessment/user/me", {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function getAssessment(id) {
    const response = await fetch(BASE_API_URL + "/assessment/user/" + id, {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function createAssessment(answers) {
    const response = await fetch(BASE_API_URL + "/assessment/create", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answers)
    });
    return response.json();
}