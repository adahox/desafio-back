// const Redis = require('ioredis');

// class Cache {

//     constructor() {
//         this.redis = new Redis({
//             host: process.env.REDIS_HOST,
//             port: process.env.REDIS_PORT,
//             keyPrefix: "cache:"
//         });
//     }

//     async get(key) {
//         const value = await this.redis.get(key);

//         return value ? JSON.parse(value) : null;
//     }

//     set(key, value, timeExp) {
//         return this.redis.set(key, JSON.stringify(value), "EX", timeExp);
//     }

//     del(key) {
//         return this.redis.del(key);
//     }

//     async delPrefix(prefix) {
//         const keys = (await this.redis.keys(`cache:${prefix}:*`)).map(key => key.replace('cache:', ''));

//         return this.redis.del(key);
//     }

// }

// module.exports = new Cache();
