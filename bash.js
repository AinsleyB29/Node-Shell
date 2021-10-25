process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  // what the user inputs into the terminal is included somewhere in data :/
  let CurrWorkingDirStr = process.cwd();
  if (data.toString().trim() === "pwd") {
    process.stdout.write(CurrWorkingDirStr + "\n");
  }
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt >");
});
