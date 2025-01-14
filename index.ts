import express from 'express';


const app = express();

const port:number = 9999; 

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
})