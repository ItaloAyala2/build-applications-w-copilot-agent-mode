import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 8000
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker backend' })
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB at', mongoUri)
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`)
      console.log('Frontend should run on http://localhost:5173 and MongoDB on port 27017')
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  })
