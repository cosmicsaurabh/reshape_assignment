const { app } = require('@azure/functions');
const  mockUsers  = require('./config/database');
const UserService = require('./services/userService')
const {ErrorHandler} = require('./middlewares/errorHandler');
const {RequestParser} = require('./middlewares/requestParser');

const userService = new UserService(mockUsers);
app.http('getusers-reshape-assessment', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            context.log(`Http function processed request for url "${request.url}"`);

            const { page, limit, search } = RequestParser.parseQueryParams(request);
            

            context.log(`Parsed... Page: ${page}, Limit: ${limit}, Search Term: ${search}`);

            const result = userService.getPaginatedUsers(page, limit, search);

            return {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result)
            };
        } catch (error) {
            return ErrorHandler.handleError(error, context);
        }
    }
});