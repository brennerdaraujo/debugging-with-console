import { debuggingWithText } from './common';

export default function group(runInsideGroup?: Function) {
    console.group(`${debuggingWithText} console.group`);
    runInsideGroup?.();
    console.groupEnd();
}