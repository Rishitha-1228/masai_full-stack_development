import os from "os";
import fs from "fs";

// PART A – OS Module
console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

// PART B – File System Operations

fs.writeFile("data.txt", "Hello World\n", (err) => {
  if (err) {
    console.error("Error creating data.txt:", err);
    return;
  }
  console.log("data.txt created successfully");

  fs.writeFile("Readme.md", "## This is first line in Readme\n", (err) => {
    if (err) {
      console.error("Error creating Readme.md:", err);
      return;
    }
    console.log("Readme.md created successfully");

    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading data.txt:", err);
        return;
      }
      console.log("Content of data.txt:");
      console.log(data);

      fs.appendFile("data.txt", "This is second line\n", (err) => {
        if (err) {
          console.error("Error appending to data.txt:", err);
          return;
        }
        console.log("Content appended to data.txt");

        fs.unlink("Readme.md", (err) => {
          if (err) {
            console.error("Error deleting Readme.md:", err);
            return;
          }
          console.log("Readme.md deleted successfully");
        });
      });
    });
  });
});
