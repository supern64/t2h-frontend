import { defineStore } from "pinia"; 

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null
    }),
    getters: {
        isLoggedIn: (state) => !!state.user,
        isAdmin: (state) => state.user?.role === "ADMIN",
        isDoctor: (state) => state.user?.role === "DOCTOR"
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        logout() {
            this.user = null;
        }
    }
});