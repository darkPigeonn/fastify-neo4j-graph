const fp = require('fastify-plugin')
const neo4j = require('neo4j-driver')

function fastifyNeo4j (fastify, opt, next) {
    const USERNAME = opt.username;
    const PASSWORD = opt.password;
    const URL = opt.url;

    try {
        const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    } catch (e) {
        return next(new Error('Error connecting NEO4J'))
    }
}