import { NextResponse } from "next/server";

// Define an async function to handle GET requests
export async function GET(request) {
  // Extract the survey ID from the request URL's search parameters
  const surveyid = request.nextUrl.searchParams.get("id");

  // Construct the path to the directory where the survey data is stored
  const datapath = process.cwd() + "/submissions/" + surveyid;
  // Import the fs.promises module for working with the file system
  const fsPromises = require("fs").promises;

  // Try to read the directory and get a list of all files in it
  const files = await fsPromises
    .readdir(datapath)
    .catch((err) => console.error("Failed to read file", err));

  // If no files were found, return a 404 error
  if (files === undefined || files.length === 0) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  }

  // Get the public fields for the survey
  let data = await getPublicFields(surveyid);
  // Get the responses for the survey
  let responses = await getResponses(data, surveyid)
    .then((responses) => {
      // Parse the responses from JSON
      responses = JSON.parse(responses);
      return responses;
    })
    .catch((err) => console.error("Failed to read file", err));

  // Return the responses as a JSON object with a 200 OK status
  return NextResponse.json(responses, { status: 200 });
}

// Define an async function to get the responses for a survey
async function getResponses(vars, surveyid) {
  // Construct the path to the directory where the survey data is stored
  const datapath = process.cwd() + "/submissions/" + surveyid;
  // Import the fs.promises module for working with the file system
  const fsPromises = require("fs").promises;
  // Get the number of public fields in the survey
  const respLength = vars.publicfields.length;
  // Try to read the directory and get a list of all files in it
  const files = await fsPromises
    .readdir(datapath)
    .catch((err) => console.error("Failed to read file", err));
  // Initialize an object to store the responses
  const responses = {};
  // Add the survey metadata to the responses object
  responses["general"] = {
    title: vars.title,
    description: vars.description,
    fields: vars.fieldnames,
    response_amount: 0,
  };
  // Loop over the files and process each one
  for (let i = 0; i < files.length; i++) {
    // read only JSON files
    if (!files[i].endsWith(".json")) {
      continue;
    }
    const fileContents = await fsPromises
      .readFile(datapath + "/" + files[i], "utf8")
      .catch((err) => console.error("Failed to read file", err))
      .then((data) => {
        let j = 0;
        // parse the JSON into an object
        data = JSON.parse(data);
        // create a response object with the ID and the public fields
        let response = { id: data.inputId, queries: [] };
        // loop over the public fields and add them to the response object
        for (j = 0; j < respLength; j++) {
          // get the field ID from the public fields array
          let fieldid = vars.publicfields[j];
          // add the field to the response object
          response.queries.push(data.userInput[fieldid]);
        }
        // return the response object
        responses[i] = response;
        // increment the response amount
        responses["general"].response_amount = i++;
      });
  }
  // return the responses as a JSON string
  return JSON.stringify(responses);
}
// Define an async function to get the public fields for a survey
async function getPublicFields(surveyid) {
  const path = process.cwd() + "/queries/" + surveyid + ".json";
  const fsPromises = require("fs").promises;
  const fileContents = await fsPromises
    .readFile(path, "utf8")
    .catch((err) => console.error("Failed to read file", err));
  if (fileContents === undefined) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  }
  // parse the JSON into an object
  const data = JSON.parse(fileContents);
  // return title, description, and publicfields
  let fieldNames = [];
  // loop over the public fields and add them to the fieldNames array
  for (let i = 0; i < data.publicfields.length; i++) {
    fieldNames.push(data.publicfields[i]);
  }
  // return the title, description, publicfields, and fieldnames
  let fields = {
    title: data.title,
    description: data.description,
    publicfields: data.publicfields,
    fieldnames: fieldNames,
  };
  return fields;
}