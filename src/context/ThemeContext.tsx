import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
    reduceMotion: boolean;
    toggleReduceMotion: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [reduceMotion, setReduceMotion] = useState(() => {
        // Check if user previously set preference
        const saved = localStorage.getItem('reduceMotion');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('reduceMotion', JSON.stringify(reduceMotion));

        if (reduceMotion) {
            document.documentElement.classList.add('motion-reduce');
        } else {
            document.documentElement.classList.remove('motion-reduce');
        }
    }, [reduceMotion]);

    const toggleReduceMotion = () => {
        setReduceMotion((prev: boolean) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ reduceMotion, toggleReduceMotion }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
