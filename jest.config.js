module.exports = {
    globals: {
        tsConfig: "<rootDir>/.tsconfig.json" // Directly target the tsconfig shared across projects
    },
    testEnvironment: 'jsdom',
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: [
        "<rootDir>/specs",
    ],
    // Jest transformations -- this adds support for TypeScript
    // using babel-jest
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    },
    collectCoverage: true,
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        "@testing-library/react",
        '@testing-library/jest-dom'
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/specs/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    testPathIgnorePatterns: [
        "/node_modules/",
        "/specs/mocks"
    ],
    // Module file extensions for importing
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/specs/mocks/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/specs/mocks/fileMock.ts"
    }
};