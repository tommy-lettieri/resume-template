export const prefixStringWithCharacter = (s: string, maxLength: number, character: string): string => {
    if (character.length !== 1) {
        throw new Error('Illegal argument - character string must be 1 character');
    }
    const neededCharacters = maxLength - s.length;
    if (neededCharacters < 0) {
        throw new Error(`prefixStringWithCharacter: String too long - ${s} is longer then ${maxLength} characters`);
    } else if (neededCharacters === 0) {
        // not needed but small optimization
        return s;
    }
    return `${Array(neededCharacters + 1).join('0')}${s}`;
};
