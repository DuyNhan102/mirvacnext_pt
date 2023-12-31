// eslint-disable-next-line no-undef
module.exports = {
	options: {
		devtools: false,
		duration: -1,
		failStatusCode: 1,
		fastForward: false,
		headless: true,
		loopCount: 1,
		sandbox: true,
		slowMo: false,
		verbose: false,
		watch: false,
	},
	paths: {
		workRoot: '.',
		testDataRoot: './data',
		testPathMatch: ['./*.perf*.ts'],
	},
	flood: {
		hosted: false,
		vu: 500,
		duration: 15,
		rampup: 0,
		regions: [''],
	},
	testSettings: {
		actionDelay: '2s',
		blockDomains: [],
		browser: 'chromium',
		browserLaunchOptions: {},
		clearCache: false,
		clearCookies: true,
		consoleFilter: [],
		device: null,
		disableCache: false,
		extraHTTPHeaders: {},
		ignoreHTTPSErrors: false,
		incognito: false,
		launchArgs: [],
		responseTimeMeasurement: 'step',
		screenShotOnFailure: true,
		stages: [],
		stepDelay: '6s',
		userAgent: '',
		viewport: { width: 1440, height: 900 },
		waitTimeout: '30s',
		waitUntil: false,
	},
}
