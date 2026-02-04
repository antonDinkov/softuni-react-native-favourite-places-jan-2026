import { createContext, useState } from "react";
import { authService } from "../../services/index.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const userData = await authService.login(email, password);
            setUser(userData);
        } catch (err) {
            setError(err.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    }

    const contextValue = {
        isLoading,
        error,
        user,
        clearError: () => setError(null),
        login,
        logout: () => setUser(null),
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
