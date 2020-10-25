import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { hardSkills } from "./data/hardSkills";
import { projects } from "./data/projects";

export const Store = React.createContext(null);

export const StoreProvider = props => {
  const contextValue = {
    hardSkills,
    projects,
    mediaQueries: {
      isItSmallDevice: useMediaQuery("(max-width:430px)"),
      isItSmallTablet: useMediaQuery("(max-width:834px)"),
      isItTablet: useMediaQuery("(max-width:1100px)"),
      isItSmallThanLaptop: useMediaQuery("(max-width:1199px)"),
      isItShortHeight: useMediaQuery("(max-height:600px)"),
      drawerHidden: useMediaQuery("(max-width:599px)"),
    },
    servers: {
      production: "https://resume-api-server.azurewebsites.net/api/v1",
      backup: "https://lauphern-resume-server.glitch.me/api/v1",
    },
    endpoints: [
      //TODO translate
      {
        path: "/",
        title: "API information",
        description: "Description and list of endpoints",
        method: "GET",
        parameters: [],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `{\n  "info": "string",\n  "endpoints": [\n    "string"\n  ]\n}`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/personal-info",
        title: "Personal information",
        description: "Full name, location and contact information",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `{\n  "name": "string",\n  "job_title": "string",\n  "location": "string",\n  "contact_info": {\n    "email": "string",\n    "linkedin": "string",\n    "github": "string",\n    "personal_website": "string"\n  },\n  "bio": "string"\n}`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/professional-experience",
        title: "Professional experience",
        description: "Relevant professional experience",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
          { name: "year", in: "query", enum: [], required: false, example: 2020, type: "number" },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "title": "string",\n    "company": {\n      "company_name": "string",\n      "company_location": "string"\n    },\n    "volunteer": true,\n    "start_date": "2020-10-21",\n    "end_date": "2020-10-21",\n    "tasks": [\n      "string"\n    ],\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/education",
        title: "Education",
        description: "Educational background",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
          { name: "year", in: "query", enum: [], required: false, example: 2020, type: "number" },
          {
            name: "level",
            in: "query",
            enum: ["bachelor", "bootcamp", "nanodegree", "other"],
            type: "string",
            required: false,
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "title": "string",\n    "school": {\n      "school_name": "string",\n      "school_location": "string"\n    },\n    "level": "bachelor",\n    "start_date": "2020-10-21",\n    "end_date": "2020-10-21",\n    "finished": true,\n    "skills": [\n      "string"\n    ],\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/certifications",
        title: "Certifications",
        description: "Official certifications and diplomas",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
          { name: "year", in: "query", enum: [], required: false, example: 2020, type: "number" },
          {
            name: "school",
            in: "query",
            enum: [],
            required: false,
            type: "string",
            example: "HackerRank",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "title": "string",\n    "school": {\n      "school_name": "string",\n      "school_location": "string"\n    },\n    "level": "bachelor",\n    "start_date": "2020-10-21",\n    "end_date": "2020-10-21",\n    "finished": true,\n    "skills": [\n      "string"\n    ],\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/volunteer-work",
        title: "Volunteer work",
        description: "Volunteer work",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
          { name: "year", in: "query", enum: [], required: false, example: 2015, type: "number" },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "title": "string",\n    "company": {\n      "company_name": "string",\n      "company_location": "string"\n    },\n    "volunteer": true,\n    "start_date": "2020-10-21",\n    "end_date": "2020-10-21",\n    "tasks": [\n      "string"\n    ],\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/hard-skills",
        title: "Hard skills",
        description: "List of hard skills",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
          {
            name: "type",
            in: "query",
            enum: ["language", "framework", "library", "design"],
            type: "string",
            required: false,
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "name": "string",\n    "type": "language",\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/soft-skills",
        title: "Soft skills",
        description: "List of soft skills",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  "string"\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/languages",
        title: "Languages",
        description: "Spoken and written languages",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  "Spanish"\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/portfolio",
        title: "Portfolio",
        description: "List of dev projects",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/json",
            value: `[\n  {\n    "name": "string",\n    "type": "language",\n    "language": "en"\n  }\n]`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
      {
        path: "/download",
        title: "Download CV in pdf",
        description: "Download the API's data in a pdf",
        method: "GET",
        parameters: [
          {
            name: "Accept-Language",
            in: "header",
            enum: ["en", "es"],
            required: true,
            type: "string",
          },
        ],
        responses: [
          {
            code: "200",
            description: "Successful operation",
            mediaType: "application/pdf",
            value: `PDF file`,
          },
          {
            code: "400",
            description: "Invalid request",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
          {
            code: "5XX",
            description: "Unexpected error",
            mediaType: "application/json",
            value: `{\n  "code": "string",\n  "message": "string"\n}`,
          },
        ],
      },
    ],
  };
  return <Store.Provider value={contextValue}>{props.children}</Store.Provider>;
};
