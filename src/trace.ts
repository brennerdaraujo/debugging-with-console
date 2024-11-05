import { debuggingWithText } from './common';

export default function main() {
    trace();
}

function trace() {
    console.trace(`${debuggingWithText} console.trace`);
}