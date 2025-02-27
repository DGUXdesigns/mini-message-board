import { Router } from 'express';
const formRouter = Router();

formRouter.get('/', (req, res) => {
  res.render('form', { title: ' Mini Message Board | New' });
});

export default formRouter;
