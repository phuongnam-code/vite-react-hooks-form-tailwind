// ref document https://day.js.org/en/
import dayjs from 'dayjs';

// import plugin in dayjs/plugin/
import isLeapYearPlugin from 'dayjs/plugin/isLeapYear';
import localeDataPlugin from 'dayjs/plugin/localeData';
import weekYearPlugin from 'dayjs/plugin/weekYear'
import weekOfYearPlugin from 'dayjs/plugin/weekOfYear'
import weekdayPlugin from 'dayjs/plugin/weekday';
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';

// use plugin, example: dayjs.extend();
dayjs.extend(isLeapYearPlugin);
dayjs.extend(localeDataPlugin);
dayjs.extend(weekYearPlugin);
dayjs.extend(weekOfYearPlugin);
dayjs.extend(weekdayPlugin);
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

// set default
dayjs.locale('en');
dayjs.tz.setDefault("Europe/London");

// format: 'YYYY-MM-DD', strictMode: true || false
// method return boolean
const isValidDate = (date, format, strictMode) => {
  if (format && strictMode) dayjs(date, format, strictMode).isValid();
  return dayjs(date).isValid();
}

const dayjsClone = (date = null) => {
  return dayjs(date).clone();
}

// example: return en
const getLocale = () => {
  return dayjs.locale();
}

const setLocale = (localeString = 'en') => {
  dayjs.locale(localeString);
}

// example: return +07:00
const getTimezoneNumber = (tzString = '2022-08-03T22:22:39+10:00') => {
  return dayjs.tz().format().slice(-6);
}

// example: return America/New_York
const getTimezoneString = () => {
  return dayjs.tz.guess();
}

const setTimezone = (tzString) => {
  const timezoneString = tzString || dayjs.tz.guess();
  dayjs.locale(timezoneString);
}

const isLeapYear = (date = null) => {
  return dayjs(date).isLeapYear();
}

const localeData = (date = null) => {
  return dayjs(date).localeData();
}

export {
  isValidDate,
  dayjsClone,
  getLocale,
  setLocale,
  getTimezoneNumber,
  getTimezoneString,
  setTimezone,
  isLeapYear,
  localeData
}

export default dayjs;
