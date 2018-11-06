const localConfig = {
    apiUrl: 'http://localhost:3100',
    stripeProviderKey: 'pk_test_g7VZloCaQLYGKPVmUsNOYOVw' // testing congdoknovva account
};

const devConfig = {
    apiUrl: 'https://devapi.knovva.com',
    stripeProviderKey: 'pk_live_t2mis8UWziWdmaI2jAz0r5D9' // live stripe account
};

const stagingConfig = {
    apiUrl: ''
};

const prodConfig = {
    apiUrl: 'https://prodapi.knovva.com',
    stripeProviderKey: 'pk_live_t2mis8UWziWdmaI2jAz0r5D9' // live stripe account
};

const currentEnv = process.env.REACT_APP_ENV;
let currentConfig;

switch (currentEnv) {
    case 'LOCAL':
        currentConfig = localConfig;
        break;
    case 'DEVELOPMENT':
        currentConfig = devConfig;
        break;
    case 'STAGING':
        currentConfig = stagingConfig;
        break;
    case 'PRODUCTION':
        currentConfig = prodConfig;
        break;
    default:
        //throw new Error('Incorrect or no environment set');
        currentConfig = devConfig;
}

export default currentConfig;