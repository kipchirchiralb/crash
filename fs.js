const { readFile, writeFile, rename, unlink } = require("fs");

writeFile("hi.txt", "isjsijsi", { flag: "a" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("check file");
});
readFile("hi.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

let content = "jkdxdjksjdkjk    kkkkkk";

writeFile("new.txt", content, { flag: "a" }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("check file");
});

// rename("new.txt", "hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("file renamed");
// });

//DELETE A FILE

// unlink("hi.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("deleted");
// });
