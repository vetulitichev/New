import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


  app.get('/task2A', (req, res) => {
    const sum = (parseInt(req.query.a) ||0) + (parseInt(req.query.b) || 0);
  res.send(sum.toString());

});

  app.get('/task2B', (req, res) => {

    const fullname = req.query.fullname;
    const re = /\s/;
    const result = fullname.split(re);

    const lenght = result.length;
console.log(lenght);
  if(lenght==1) {
    res.send(result[0])
  }
  if(lenght==2) {
    result.slice(2,0);
    result[0]= result[0].slice(0,1) + '.';
    result.toString();
    result.reverse();
    res.send(result.join(' '));
  }
  if(lenght==3) {
    result.slice(3,0);
    result[0] = result[0].slice(0,1)+'.';
    result[1] = result[1].slice(0,1)+'.';
    const help = result[0];
    result[0]=result[1];
    result[1]=help;
    result.toString();
    result.reverse();
    res.send(result.join(' '));
  }
  if(lenght==4) {
    res.send("Invalid fullname");
  }
console.log(result);


  //res.send(result.toByteArray());

});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
