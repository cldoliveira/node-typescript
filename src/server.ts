import { db } from '@settings/db';
import { router } from '@settings/routers';
import express, { json } from 'express';

const app = express();
app.use(json());
app.use(router);

app.listen(3000, async () => {
    await db.sync();
    console.log(`${process.env.DATABASE_HOST} Application running`);
});
