import { get } from "./common";

export function survey() {
  return get(
    "https://zt-eng.s3.us-east-1.amazonaws.com/fe-challenge/survey.json"
  );
}

export default { survey };
