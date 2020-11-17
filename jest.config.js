module.exports = {
    collectCoverage: true,
    setupFilesAfterEnv: [
        "@testing-library/react",
        '@testing-library/jest-dom'
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/specs/mocks/fileMock.ts",
        "\\.(css|less|scss)$": "<rootDir>/specs/mocks/fileMock.ts"
    }
};