const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/authenticate",async (req,res)=>{
  try {
    const response = await axios.get('https://api.chatengine.io/users', {
      headers: {
        "private-key":process.env.CHAT_ENGINE_PRIVATE_KEY,
      },
    });

    // Extract the list of users from the response
    const users = response.data;

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
})
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put('https://api.chatengine.io/users/',
    {username:username,secret:username,first_name:username},
    {headers :{"PRIVATE-KEY":process.env.CHAT_ENGINE_PRIVATE_KEY}}
    );
    return res.status(r.status).json(r.data)
   
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
    
  }
});

app.listen(process.env.PORT);