import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const date = moment().format("YYYY-MM-DD HH:mm:ss"); // define it before use
const data = { date };

async function run() {
  try {
    // write the JSON (jsonfile returns a promise)
    await jsonfile.writeFile(path, data, { spaces: 2 });

    // git add/commit/push
    const git = simpleGit();
    await git.add([path]);
    await git.commit(date, undefined, { "--date": date });
    await git.push();

    console.log("Committed & pushed:", date);
  } catch (err) {
    console.error("Error:", err.message || err);
  }
}

run();
