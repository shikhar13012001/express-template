const files = require("fs");
const path = require("path");
const config = require("../config/courseid.js");
// read file.json
const file = files.readFileSync(path.join(__dirname, "./file.json"));
const result = JSON.parse(file);

const arr = result["Classroom"];

const getVideoCode = (link) => {
  const arr = link.split("/");
  return arr[arr.length - 1];
};

const convertTime = (time) => {
  const [minutes, seconds] = time.split(":");
  return time;
};
// list
let weekNum = 0;

const list = () => {
  const f = [];
  for (let key = 0; key < arr.length; key++) {
    // keep adding items until next breathing exercise

    const obj = {
      week: key==0?1:weekNum + 1,
      weekName: key==0?"Introduction":"Week " + (1 + weekNum),
      list: [],
    };
    weekNum++;
    let ptr = 1;

    obj.list.push({
      index: ptr++,
      videoTitle: arr[key].A,
      videoLink: arr[key].B,
      videoCode: getVideoCode(arr[key].B), // get video code from video link,
      videoDuration: "1:00",
    });
   

    f.push(obj);
  }
  return f;
};

// course1
const course1 = {
  course: "Classroom",
  courseId: "be45c8f0f4f7d92b7eaeb969088b6209e23b81b0",
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
