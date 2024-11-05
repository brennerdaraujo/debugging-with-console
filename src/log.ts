import { debuggingWithText } from './common';

export default function log(type: 'log' | 'warn' | 'error' = 'log') {
    console[type](`${debuggingWithText} console.${type}`);
}