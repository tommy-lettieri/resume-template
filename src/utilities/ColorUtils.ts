import { prefixStringWithCharacter } from './StringUtils';

export const MAX_COLOR_VALUE=360;

export interface HSL {
    hue: number;
    saturation: number;
    lightness: number;
}
export const hslToRGB = ({
    hue,
    saturation,
    lightness,
}: HSL) => {
    // https://www.rapidtables.com/convert/color/hsl-to-rgb.html
    hue %= MAX_COLOR_VALUE;
    const c = (1 - Math.abs((2* lightness) - 1)) * saturation;
    const x = c * (1 - Math.abs(Math.abs(hue / 60 % 2 - 1)));
    const m = lightness - (c/2);

    let rgbPrime;
    if (hue < 80) {
        rgbPrime = {
            r: c,
            g: x,
            b: 0
        };
    } else if (hue < 120) {
        rgbPrime = {
            r: x,
            g: c,
            b: 0
        };
    } else if (hue < 180) {
        rgbPrime = {
            r: 0,
            g: c,
            b: x
        };
    } else if (hue < 240) {
        rgbPrime = {
            r: 0,
            g: x,
            b: c
        };
    } else if (hue < 300) {
        rgbPrime = {
            r: x,
            g: 0,
            b: c
        };
    } else if (hue < 360) {
        rgbPrime = {
            r: c,
            g: 0,
            b: x
        };
    } else {
        throw new Error('hue overflow, mod at top of function should prevent this');
    }

    const rgb = {
        r: Math.floor((rgbPrime.r + m) * 255),
        g: Math.floor((rgbPrime.g + m) * 255),
        b: Math.floor((rgbPrime.b + m) * 255),
    };
    return rgb;
};

// This was an initial method using hex value directly...
// const MAX_COLOR_VALUE=16777216;
// const getColorString = (hue: number): string => {
//     hue = Math.floor(hue) % MAX_COLOR_VALUE;
//     const hexStringColorValue = hue.toString(16);
//     const fillerString = Array(Math.max(6 - hexStringColorValue.length + 1, 0)).join('0');
//     const colorString = `${fillerString}${hexStringColorValue}`;
//     console.log(JSON.stringify({
//         colorString,
//         fillerString,
//         hexStringColorValue: hexStringColorValue
//     }));
//     return colorString;
// };

interface GetColorStringOptions {
    hue: number;
    saturation?: number;
    lightness?: number;
}
export const getColorString = ({hue, saturation = 1.0, lightness = 0.5}: GetColorStringOptions) => {
    const rgb = hslToRGB({hue, saturation, lightness});
    const result = `${prefixStringWithCharacter(rgb.r.toString(16), 2, '0')}${prefixStringWithCharacter(rgb.g.toString(16), 2, '0')}${prefixStringWithCharacter(rgb.b.toString(16), 2, '0')}`;
    return result;
};

