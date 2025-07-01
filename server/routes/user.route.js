import { Router } from 'express';

const userRouter = Router();

userRouter.get('/:id', (req, res) => res.send({title: 'Get user'}));  
userRouter.put('/:id',(req, res) => res.send({title: 'Update user'}));    
userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user'}));                
userRouter.get('/', (req, res) => res.send({ title: 'Get all users' })); // for admin                   

export default userRouter;
