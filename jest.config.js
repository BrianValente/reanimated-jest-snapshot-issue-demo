module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@react-native|react-native|react-native-.+|react-native-*|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|victory|react-native-svg|@sentry/.*|@buenbit/buenbit-icons|@buenbit/buenbit-illustrations|@shopify/react-native-skia)',
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./jest.setup.tsx'],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    testEnvironment: 'node',
    cacheDirectory: ".jest-cache",
};
