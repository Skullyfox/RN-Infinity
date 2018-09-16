export default {
    API_URL:
        __IS_BROWSER__ === 'production'
            ? 'http://localhost:8000'
            : 'http://localhost:8000',
    SUPPORTED_LANGUAGES: [
        { i18nLabel: 'fr', label: 'Français' },
        { i18nLabel: 'en', label: 'English' }
    ]
};
