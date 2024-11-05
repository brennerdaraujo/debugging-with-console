import { debuggingWithText } from './common';

export default function table(data: Record<string, unknown>[]) {
    console.log(`${debuggingWithText} console.table`);
    console.table(data);
}