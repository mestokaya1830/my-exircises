import express from 'express';
import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('test')
  const user: {id: number, full_name: string, age: number, active: boolean }[] = [
    {
      id: 0,
      full_name: 'Mustafa Kaya',
      age: 45,
      active: true
    },
    {
      id: 1,
      full_name: 'Ekrem Kaya',
      age: 23,
      active: true
    }
  ]
  res.json(user);
});

//error
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "404 Page Not Found" });
});



const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

app.use(errorHandler);


//server
const start = async () => {
  const PORT = Number(process.env.PORT) || 3000
  app.listen(PORT, () => {
    console.log('Server work at', PORT)
  })
}

start()