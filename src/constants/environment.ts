export type NodeEnv = undefined | 'test' | 'dev' | 'prod';
const node = process.env.NODE_ENV as NodeEnv;

export default { node }
