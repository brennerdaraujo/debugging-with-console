import { debuggingWithText } from './common';

export default function css(css: string) {
    console.log(`%c ${debuggingWithText} CSS`, css);
}