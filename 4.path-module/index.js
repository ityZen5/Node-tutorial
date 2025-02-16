const path = require("path");

console.log("Directory name: ", path.dirname(__filename)); // to get directory
console.log("File name: ", path.basename(__dirname)); //to get file name
console.log("file extension: ", path.extname(__filename)); //to get extension of file

const joinedPath = path.join("/user", "documents" , "node", "projects")
console.log("Joined Paths: " , joinedPath);

const resolvePath = path.resolve("/user", "documents" , "node", "projects")
console.log("Resolved Path: " , resolvePath)

const normalizedPath = path.normalize("/user/.document/.../node/project");
console.log("Normalized Path: ",normalizedPath)