const files = require("fs");
const path = require("path");
const config = require("../config/courseid.js");
// read file.json
const file = files.readFileSync(path.join(__dirname, "./file.json"));
const result = JSON.parse(file);

const arr = result["Home Course"];
 
const convertTime = (time) => {
  const [minutes, seconds] = time.split(":");
  return time
};
// list
let weekNum = 0;

const list = () => {
    const f=[]
    for(let key=0; key<arr.length; key++)
    {
    // keep adding items until next breathing exercise
    const checkKey = "Breathing Exercise";
    const obj = {
      week: weekNum + 1,
      weekName: weekNum === 0 ? "Introduction" : "Week " + (1 + weekNum),
      list: [],
    };
    weekNum++;
    let ptr = 1;
    while (arr[key].A !== checkKey) {
      obj.list.push({
        index: ptr++,
        videoTitle: arr[key].F,
        videoLink: arr[key].B,
        videoCode: arr[key].D,
        videoDuration: convertTime(arr[key].H),
      }); 
      key++;
    }
    if (arr[key].A === checkKey) {
      obj.list.push({
        index: ptr++,
        videoTitle: arr[key].F,
        videoLink: arr[key].B,
        videoCode: arr[key].D,
        videoDuration: convertTime(arr[key].H),
      });
  

    }
    f.push(obj);

  }
      return f;
}





// course1
const course1 = {
  course: "Home Course",
  courseId: "f80ade2b933b7cd499baadeb7a8aa11108d54dd7",
  contents: list(),
};

// write course1 in test.json
// const write = (...args) =>
//   files.writeFileSync(
//     path.join(__dirname, "./test.json"),
//     JSON.stringify(...args)
//   );
// write(course1);

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dataPut = async () => {
  const data = await fetch(
    `http://localhost:5000/api/v1/course/create-course`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...course1 } }),
    }
  );
  const res = await data.json();
  console.log(res);
};
dataPut();