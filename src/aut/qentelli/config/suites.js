export const specConfig = {
    // define all tests
    specs: ['src/aut/qentelli/features/**/*.feature'],
    exclude: [],
    // define specific suites
    suites: {
        "test": [
            'src/aut/qentelli/features/test.feature',
        ],
        otherFeature: [

        ]
    },
}