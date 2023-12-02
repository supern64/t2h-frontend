import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
    state: () => ({
        session: null,
    }),
    getters: {
        isConnected: (state) => !!state.session && !!state.session.socket.connected,
        isAuthenticated: (state) => !!state.session && state.session.isAuthenticated,
    },
    actions: {
        setSession(session) {
            this.session = session;
        },
        disconnect() {
            this.session = null;
        },
    },
});