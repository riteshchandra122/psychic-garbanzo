import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

// 2) path, date, data
const path = "./data.json";
const date = moment().format("YYYY-MM-DD HH:mm:ss");
const data = { date };

// 3) write -> add -> commit -> push (in order)
jsonfile.writeFile(path, data, { spaces: 2 })
  .then(() => simpleGit().add([path]).commit(date, { "--date": date }).push())
  .then(() => console.log("Committed & pushed:", date))
  .catch(err => console.error("Error:", err));
