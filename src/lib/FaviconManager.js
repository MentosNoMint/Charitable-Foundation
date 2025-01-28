// FaviconManager.js
import React, { useState, useEffect } from 'react';

const FaviconManager = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Функция для проверки текущей темы
        const checkTheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDarkTheme(true);
            } else {
                setIsDarkTheme(false);
            }
        };

        // Вызов функции при загрузке страницы
        checkTheme();

        // Добавляем слушатель на изменение темы
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => checkTheme();
        mediaQuery.addEventListener('change', handleChange);

        // Очистка слушателя при размонтировании компонента
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        // Обновляем фавикон в зависимости от темы
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            document.head.appendChild(newLink);
        }

        const faviconPath = isDarkTheme ? '/favicon-dark.ico' : '/favicon-light.ico';
        document.querySelector("link[rel~='icon']").href = faviconPath;
    }, [isDarkTheme]);

    return null; // Этот компонент ничего не рендерит
};

export default FaviconManager;