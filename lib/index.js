import * as alphabet from "./alphabet";
import transliterate from "./transliterate";
import * as fallback from "./handleUnrecognized";

import BATR from "./rules/BATR";
import chat from "./rules/chat";

const trans = transliterate;
const rules = { BATR, chat };

export { transliterate, trans, alphabet, rules, fallback };
