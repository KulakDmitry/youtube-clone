const { DateTime } = require("luxon");
const timeSinceLoadingVideo = (date) => {
  const units = ["year", "month", "day", "hour", "minute", "second"];
  let dateTime = DateTime.fromISO(date);
  const diff = dateTime.diffNow().shiftTo(...units);
  const unit = units.find((unit) => diff.get(unit) !== 0) || "second";

  const relativeFormatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
};

export { timeSinceLoadingVideo };
