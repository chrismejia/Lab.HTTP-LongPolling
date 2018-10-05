const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <script type="text/javascript">
          console.log('Hello Christian!')
        </script>
      </head>
    </html>
  `);
});

app.listen(1122, () => {
  console.log("1122: Ready for commands.");
});

const { EventEmitter } = require("events");
const clock = new EventEmitter();

setInterval(() => {
  const time = new Date().toLocaleString();
  clock.emit("tick", time);
}, 1000);

clock.on("tick", time => console.log("The time is", time));
