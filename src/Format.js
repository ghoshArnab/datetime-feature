import "./styles.css";
import moment from "moment";
import { format } from "date-fns";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/customParseFormat";
import { DateTime } from "luxon";
// Moment.js
const momentFull = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
const momentShort = moment().format("ddd, hA");

// date-fns

const DfFull = format(new Date(), "eeee, MMMM do yyyy, h:mm:ss aa");
const DfShort = format(new Date(), "eee, ha");

// dayjs
const dayFull = dayjs().format("dddd, MMMM D YYYY, h:mm:ss A");
const dayShort = dayjs().format("ddd, hA");
// dayjs ⚠️ requires advancedFormat plugin to support more format tokens
dayjs.extend(advancedFormat);
dayjs().format("dddd, MMMM Do YYYY, h:mm:ss A");

// Luxon
const luxFull = DateTime.local().toFormat("EEEE, MMMM dd yyyy, h:mm:ss a");
const luxShort = DateTime.local().toFormat("EEE, ha");

// Intl DateTimeFormat
const IntlFull = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}).format(new Date());

const IntlShort = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  weekday: "short"
}).format(new Date());

const Format = `
<span class=blue>Formatting</span><br>
  Moment Full : ${momentFull} <br>
  Moment Short : ${momentShort} <hr>

  DateFns Full : ${DfFull} <br>
  DateFns Short : ${DfShort} <hr>

  dayJS Full : ${dayFull} <br>
  dayJS Short : ${dayShort} <hr>

  luxon Full : ${luxFull} <br>
  luxon Short : ${luxShort} <hr>

  Intl Full : ${IntlFull} <br>
  Intl Short : ${IntlShort}

</div>
`;

export default Format;
