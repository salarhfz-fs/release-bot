module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    moduleNameMapper: {
        "util/(.*)": '<rootDir>/src/util/$1',
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [
        "**/test/**/*.spec.(ts|js)",
        "**/test/**/*.test.(ts|js)"
    ],
    testEnvironment: "node",
    reporters: ["default",
        ["./node_modules/jest-html-reporter", {
            pageTitle: "Code coverage - Release Bot",
            outputPath: "./coverage/test-report.html"
        }]
    ]
};

