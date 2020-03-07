import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import formatDistance from "date-fns/formatDistance";
import relativeTime from "dayjs/plugin/relativeTime";
import RelativeTimeFormat from "relative-time-format";
import en from "relative-time-format/locale/en.json";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// Moment.js
const momentIn = moment([2007, 0, 27]).to(moment([2007, 0, 29]));
const momentAgo = moment([2007, 0, 27]).to(moment([2007, 0, 25]));
const momentTom = moment([2007, 0, 27]).to(moment([2007, 0, 28]));
const momentYest = moment([2007, 0, 27]).to(moment([2007, 0, 26]));

// => "in 2 days"

// date-fns

const dfIn = formatDistance(new Date(2007, 0, 27), new Date(2007, 0, 29));
const dfAgo = formatDistance(new Date(2007, 0, 27), new Date(2007, 0, 25));
const dfTom = formatDistance(new Date(2007, 0, 27), new Date(2007, 0, 28));
const dfYest = formatDistance(new Date(2007, 0, 27), new Date(2007, 0, 26));
// => "2 days"

// dayjs ⚠️ requires relativeTime plugin

dayjs.extend(relativeTime);
const dayIn = dayjs("2007-01-27").to(dayjs("2007-01-29"));
const dayAgo = dayjs("2007-01-27").to(dayjs("2007-01-25"));
const dayTom = dayjs("2007-01-27").to(dayjs("2007-01-28"));
const dayYest = dayjs("2007-01-27").to(dayjs("2007-01-26"));
// => "in 2 days"

// luxon ❌ does not support relative time
let IntlIn = "Not working in safari";
let IntlAgo = "Not working in safari";
let IntlTom = "Not working in safari";
let IntlYest = "Not working in safari";
if (!isSafari) {
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
  IntlIn = rtf1.format(2, "day");
  IntlAgo = rtf1.format(-2, "day");
  IntlTom = rtf1.format(1, "day");
  IntlYest = rtf1.format(-1, "day");
}

RelativeTimeFormat.addLocale(en);
const rtfSaf = new RelativeTimeFormat("en", { style: "narrow" });
const IntlInSaf = rtfSaf.format(2, "day");
const IntlAgoSaf = rtfSaf.format(-2, "day");
const IntlTomSaf = rtfSaf.format(1, "day");
const IntlYestSaf = rtfSaf.format(-1, "day");

const AgoIn = `
<span class=blue> Days ago and in Days </span><br>
  Moment In days : ${momentIn} <br>
  Moment days Ago : ${momentAgo} <br>
  Moment tomorrow : ${momentTom} <br>
  Moment Yesterday : ${momentYest}<hr>

  DateFns In days : ${dfIn} <br>
  DateFns days Ago : ${dfAgo} <br>
  DateFns tomorrow : ${dfTom} <br>
  DateFns Yesterday : ${dfYest} <hr>

  dayJS In days : ${dayIn} <br>
  dayJS days Ago : ${dayAgo} <br>
  dayJS tomorrow : ${dayTom} <br>
  dayJS Yesterday : ${dayYest} <br>

  <span class=warn>luxon ❌ does not support relative time</span>
<br>
<span class=warn>Intl.RelativeTimeFormat is not supported in safari as of now
We need to use https://www.npmjs.com/package/relative-time-format polyfill for safari.
</span>
<br>
  Intl In days : ${IntlIn} <br>
  Intl days Ago : ${IntlAgo} <br>
  Intl tomorrow : ${IntlTom} <br>
  Intl Yesterday : ${IntlYest} <br>

  <span class=warn>Intl.RelativeTimeFormat in Safari through polyfill</span>
  <br>
  Intl In days Safari: ${IntlInSaf} <br>
  Intl days Ago Safari: ${IntlAgoSaf} <br>
  Intl tomorrow Safari: ${IntlTomSaf} <br>
  Intl Yesterday Safari: ${IntlYestSaf} <br>

</div>
`;

export default AgoIn;
