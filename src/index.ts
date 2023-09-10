import express, { Request, Response } from 'express'
import data from './data/userDB'

const app = express()

const PORT = 3000

app.get('/api', (req: Request, res: Response) => {
    let q = req.query
    console.log(q)
    res.status(200).json(data)
})


app.listen(PORT, () => console.log(`server listening at port 3000`))

