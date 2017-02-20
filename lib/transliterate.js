import { showReplacementChar } from "./handleUnrecognized";

const fromTable = (str, table, handleUnrecognized = showReplacementChar) => {

  let tra = "";
  for (let i = 0; i < str.length; i++) {
    for (let l = 2; l >= 0; l--) {
      if (l === 0) {
        tra += handleUnrecognized(str[i]);
        break;
      }
      const chunk = str.substr(i, l);
      if (chunk in table) {
        tra += table[chunk];
        i += l - 1;
        break;
      }
    }
  }
  return tra;
}

export default (str, ruleSet, handleUnrecognized) => {

  const rules = ruleSet.default || ruleSet;

  if (rules instanceof Function)
    return rules(str, handleUnrecognized);

  else return fromTable(str, rules.table || rules, handleUnrecognized || rules.unknown);
};
