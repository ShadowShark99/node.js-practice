const fs = require("node:fs/promises");
const path = require("path");
exampleAppend = async () => {
  try {
    const content = "\n sorry i meant soup!";
    await fs.appendFile("./test.txt", content);
  } catch (err) {
    console.log(err);
  }
};

exampleRead = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, "/test.txt"), {
      encoding: "utf8",
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

exampleAppend();
exampleRead();
