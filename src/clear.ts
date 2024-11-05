import { debuggingWithText } from "./common";

export default function clear() {
    console.log(`${debuggingWithText} console.clear`);    
    console.clear();
    console.log(`Console was cleared`);
}