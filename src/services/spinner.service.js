import { Subject } from 'rxjs';

const subject = new Subject();
let count = 0;
export const spinnerService = {
    requestStarted: () => {
        if (++count === 1) {
        subject.next('start');
        }
    },
    requestEnded: () => {
        if (count === 0 || --count === 0) {
            subject.next('stop');
        }
    },
    resetSpinner: () => {
        count = 0;
        subject.next('stop');
    },
    setData: d => subject.next({ value: d }),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};