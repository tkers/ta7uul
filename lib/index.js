import * as alphabet from "./alphabet";
import transliterate from "./transliterate";

import * as BATR from "./rules/BATR";
import * as chat from "./rules/chat";

const trans = transliterate;
const rules = { BATR, chat };

export { transliterate, trans, alphabet, rules };
