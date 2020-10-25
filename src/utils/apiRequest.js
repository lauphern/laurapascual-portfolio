import axios from "axios";


export const defaultServer = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER_URL,
  timeout: 2000,
});

export const backupServer = axios.create({
  baseURL: process.env.REACT_APP_BACKUP_SERVER_URL,
  timeout: 2000,
});
