import express from 'express';
import { ENV } from './config/env.ts';
const app = express();
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Productify API - Powered by PostgreSQL , Drizzle ORM % Clerk Auth',
        endpoints: {
            user: 'api/users',
            products: '/api/products',
            comments: 'api/comments',
        }
    });
});
app.listen(ENV.PORT, () => console.log(`server on ${ENV.PORT}`));
//# sourceMappingURL=index.js.map