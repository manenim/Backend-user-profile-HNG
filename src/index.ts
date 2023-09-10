import express, { Request, Response } from 'express'
import data from './data/userDB'

const app = express()



app.get('/api', (req: Request, res: Response) => {
let q = req.query
    console.log(q)
    console.log(typeof data)
    res.status(200).json(data)
})


app.listen('3000', () => console.log(`server listening at port 3000`))

