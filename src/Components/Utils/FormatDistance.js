import { formatDistanceStrict } from "date-fns";

export const formatDistance = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end));
}