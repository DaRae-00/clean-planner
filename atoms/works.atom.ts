import {atom} from 'recoil';

export type Day = {
    value: number;
    ko: string;
}

export type Work = {
    name: string;
    days: Array<Day>;
    manager: string; // todo :  user로 변경해야 함
}

export const days = [{
    value: 1,
    ko: '월'
},
{
    value: 2,
    ko: '화'
},
{
    value: 3,
    ko: '수'
},
{
    value: 4,
    ko: '목'
},
{
    value: 5,
    ko: '금'
},
{
    value: 6,
    ko: '토'
},
{
    value: 7,
    ko: '일'
}]

export const initWork:Work = {
    name: 'work',
    days: [],
    manager: ''
}

export const worksAtom = atom({
    key: 'works',
    default: {
        selected: initWork,
        workList: [initWork],
    },
  });