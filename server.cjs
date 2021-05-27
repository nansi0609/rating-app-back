import express ,{json} from 'Express';
import cors from 'cors';
import mongoose from 'mongoose';

var app = express();

app.use(cors());
app.use(express.json( { extended: true } ));
 

mongoose.connect('mongodb://localhost:27017/ratingapp', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("databse connected");
});
var ratingapp = mongoose.Schema({
    fname: {
        type: String,
       
    },
    date_time: {
        type: String,
    },
    communication: {
        type: Number,
    },
    technical_skills: {
        type: Number,
    },
    attitude: {
        type: Number,
    },
    team_player: {
        type: Number,
    },
    remark: {
        type: String,
    },
       
},{ versionKey: false });  
   
  
var model = mongoose.model('attr', ratingapp); 

  app.post('/user', (req, res) => {
    const { fname, date_time, communication, technical_skills, attitude, team_player, remarks } = req.body;
    let attr = {};
   attr.fname = fname;
   attr.date_time = date_time;
   attr.communication = communication;
   attr.technical_skills = technical_skills;
   attr.attitude = attitude;
   attr.team_player = team_player;
   attr.remarks = remarks;
    console.log("reached userModels");
    var mod = new model(req.body);  
    mod.save();
    res.json(mod);
    res.send
    console.log(req.body);
});
    
app.use('/',(req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin',  "application/json"); 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
})
// app.get('/get-method',function(req,res) {
//     res.send("Hello")
// })
console.log("Server Started");
app.listen(4000); 