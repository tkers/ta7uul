import punct from "./rules/punct";
import numbers from "./rules/numbers";
import vowels from "./rules/vowels";

export const extendVowels = rules => ({ ...vowels, ...rules });
export const extendNumbers = rules => ({ ...numbers, ...rules });
export const extendPunct = rules => ({ ...punct, ...rules });
export const extendPunctuation = extendPunct;
export const extendAll = rules =>  ({ ...punct, ...numbers, ...vowels, ...rules });
export default extendAll;
