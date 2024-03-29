import { User } from "../Model/UserSchema";

app.get('/insert' , async(req,res) => {
  const connection = await connect()
  console.log(connection);
  const data = User(req.body)
  const result = await data.save()
  res.json(result)
})

//this will be appicable for stop buffering in mongo