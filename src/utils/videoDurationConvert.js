import * as moment from "moment";
import * as momentDurationFormatSetup from "moment-duration-format";

const videoDuration = (duration) =>
  moment.duration(duration).format("h:mm:ss").padStart(4, "0:0");
export { videoDuration };
