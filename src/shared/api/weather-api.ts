import axios from 'axios';
import { DEFAULT_LANG, DEFAULT_UNITS, OWM_API_KEY, OWM_BASE_URL } from '../config';

export const owmClient = axios.create({
  baseURL: OWM_BASE_URL,
  params: {
    appid: OWM_API_KEY,
    units: DEFAULT_UNITS,
    lang: DEFAULT_LANG,
  },
});
