import { io } from "socket.io-client";
import { BASE_API_URL } from "./constants";

export async function getRoomList() {
    const response = await fetch(BASE_API_URL + "/chat/room/list", {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function createRoom(userId) {
    const response = await fetch(BASE_API_URL + "/chat/room/create/" + userId, {
        method: "POST",
        credentials: "include"
    });
    return response.json();
}

export async function getRoomMessages(roomId) {
    const response = await fetch(BASE_API_URL + "/chat/room/" + roomId + "/messages/get", {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function getNewSessionToken() {
    const response = await fetch(BASE_API_URL + "/chat/session/connect", {
        method: "POST",
        credentials: "include"
    });
    return response.json();
}

export class ChatSession {
    constructor() {
        this.token = null;
        this.socket = null;
        this.isAuthenticated = false;
        this.wasConnected = false;
    }
    connect(callback) {
        this.socket = io(BASE_API_URL);
        // define listeners
        this.reauthenticate(callback);
        this.socket.on("connect", () => {
            if (this.isAuthenticated && this.wasConnected) this.reauthenticate(callback);
            this.wasConnected = true;
        });
        this.socket.on("disconnect", () => {
            this.isAuthenticated = false;
        })
    }
    sendMessage(message, roomId, callback) {
        this.socket.emit("message", message, roomId, (response) => {
            if (response.status === "ERROR") {
                if (callback) callback(false, response.data.error);
                return;
            }
            if (callback) callback(true);
        });
    }
    onMessage(callback) {
        this.socket.on("message", (message, roomId) => {
            if (callback) callback(message, roomId);
        });
    }
    reauthenticate(callback) {
        getNewSessionToken().then((response) => {
            if (response.status === "ERROR") {
                if (callback) callback(false, response.data.error);
                return;
            }
            this.token = response.data.token;
            this.socket.emit("auth", this.token, (response) => {
                if (response.status === "ERROR") {
                    if (callback) callback(false, response.data.error);
                    return;
                }
                this.isAuthenticated = true;
                if (callback) callback(true);
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}