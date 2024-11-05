import { debuggingWithText } from './common';

export default function time(runInsideTime?: Function) {
    const label = `${debuggingWithText} console.time`;

    console.time(label);
    runInsideTime?.();
    console.timeEnd(label);
}