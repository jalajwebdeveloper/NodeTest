import { Router } from 'express';
import { getAllUser, addUser } from './Users';

const userRouter = Router();

userRouter.get('/getAllUser', getAllUser);
userRouter.post('/addUser', addUser);

export default userRouter;
