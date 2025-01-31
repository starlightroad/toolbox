export const INPUT_TIME_REGEX =
  /^((0[1-9]|1[0-2])[-\/](0[1-9]|[12][0-9]|3[01])[-\/]\d{4} )?((0?[1-9]|1[0-2]):([0-5][0-9]) (am|pm|AM|PM)|([0-1]?[0-9]|2[0-3]):([0-5][0-9]))$/;

export const TIME = {
  MILLISECONDS: {
    PER_SECOND: 1000,
  },
  SECONDS: {
    PER_MINUTE: 60,
    PER_HOUR: 60 * 60,
    PER_DAY: 24 * 60 * 60,
  },
  HOURS: {
    PER_DAY: 24,
  },
};
