import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export default function timeAgo(time) {
  return format(time, "ko");
}
