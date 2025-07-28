const fs = require("node:fs/promises");

example = async () => {
  try {
    const content = "\n sorry i meant soup!";
    await fs.appendFile("./test.txt", content);
  } catch (err) {
    console.log(err);
  }
};

example();
