import { Router } from 'express';
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'How is everyone doing today?',
    user: 'Sophia',
    added: new Date(),
  },
  {
    text: 'Just finished a great book!',
    user: 'Liam',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board | Home', messages });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect('/');
});

export default indexRouter;
