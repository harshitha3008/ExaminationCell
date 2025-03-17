import { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define Theme Context Type
interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

// Create Theme Context with Default Value as Undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom Hook to Use Theme Context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

// Theme Provider Props Interface
interface ThemeProviderProps {
    children: ReactNode;
}

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};