import axios from "axios";
import { useTranslation } from "react-i18next";

const { i18n } = useTranslation();

//TODO revisar
//TODO utilizar otro default que no sea ""
const getLanguage = () => i18n.language || window.localStorage.i18nextLng || "";


export const defaultServer = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER_URL,
  //TODO intercept and change for download path
  timeout: 2000,
  //TODO intercept and remove for any route (i.e. "/") that doesn't use it
  headers: {'Accept-Language': getLanguage()}
});

export const backupServer = axios.create({
  baseURL: process.env.REACT_APP_BACKUP_SERVER_URL,
  //TODO intercept and change for download path
  timeout: 2000,
  //TODO intercept and remove for any route (i.e. "/") that doesn't use it
  headers: {'Accept-Language': getLanguage()}
});
