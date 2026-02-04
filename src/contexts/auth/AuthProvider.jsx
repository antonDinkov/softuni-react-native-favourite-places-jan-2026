import { createContext, useState } from "react";
import { authService } from "../../services/index.js";
import { usePersistedState } from "../../hooks/usePersistedState.js";

export const AuthContext = createContext({
    isLoading: false,
    isAuthenticated: false,
    error: null,
    user: null,
    auth: null,
    login: async (email, password) => { },
    clearError: () => { },
    logout: () => { },
});

export function AuthProvider({ children }) {
    const [auth, setAuth] = usePersistedState("auth", {
        accessToken: null,
        user: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const { user, accessToken } = await authService.login(email, password);
            setAuth({ user, accessToken });
        } catch (err) {
            setError(err.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    }

    const contextValue = {
        isAuthenticated: !!auth.user,
        isLoading,
        error,
        user: auth.user,
        auth,
        clearError: () => setError(null),
        login,
        logout: () => {
            setAuth({
                accessToken: null,
                user: null,
            });
        },
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
