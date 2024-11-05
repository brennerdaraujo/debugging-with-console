import separator from './src/separator';
import log from './src/log';
import time from './src/time';
import trace from './src/trace';
import group from './src/group';
import clear from './src/clear';
import table from './src/table';
import css from './src/css';

separator();

clear();

separator();
    
log();

separator();

log('warn');

separator();

log('error');

separator();

time(() => {
    for (let i = 0; i < 10000; i++) { /*Some code here*/ }
});

separator();

trace();

separator();

group(() => {
    log();
    log('warn');
    log('error');
});

separator();

table([
    { name: 'Person 1', age: 18 },
    { name: 'Person 2', age: 50 },
    { name: 'Person 3', age: 34 },
]);

separator();

css('color: red;');