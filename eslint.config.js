import connorjsConfig from "eslint-config-connorjs";

const config = [...connorjsConfig, { ignores: [`.nx`] }];

export default config;
