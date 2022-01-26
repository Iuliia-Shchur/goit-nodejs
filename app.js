import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import contactsRouter from './routes/api';
import authRouter from './routes/api/auth';
import uploadRouter from './routes/api/public/avatar';

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(express.static(process.env.FOLDER_FOR_AVATARS))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter);
app.use('/api/auth', authRouter);
app.use('/api/avatar', uploadRouter)


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message })
})

export default app;
