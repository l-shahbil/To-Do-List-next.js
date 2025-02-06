"use client";
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(key);
            setValue(storedValue ? JSON.parse(storedValue) : initialValue);
            setIsHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value, isHydrated]);

    return [value, setValue];
};
