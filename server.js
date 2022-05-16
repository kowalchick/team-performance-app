const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//data
const data = [
    {
        labels: [
            ['If you make a mistake', 'on this team.', 'It is often', 'hold against you'],
            ['It is safe to take a risk', 'on this team'],
            ['Working with members' ,'of this team,', 'my unique skills', 'and talents are valued ','and utilized']
        ],
        data: [
            {
                values: [100, 20, 70],
            },
            {
                values: [50, 75, 100],
            },
        ],
    },
];

app.get("/data", (req, res) => {
    res.json(data);
});

app.listen(3001, function () {
    console.log("Express server is running");
});