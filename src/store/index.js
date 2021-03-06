import { writable } from 'svelte/store';

export const selectTab = writable("todo");

export const sortMode = writable("time");
export const sortOrder = writable(false)

export const todoCont = writable([
  {
    'title': '',
    'desc': '',
    'progress': 0,
    'time': null,
    'id': null,
    'pin': false,
  },
])

export const completeCont = writable([
  {
    'title': '',
    'desc': '',
    'progress': 100,
    'time': null,
    'pin': false,
  },
])

export const pendingCont = writable([
  {
    'title': '',
    'desc': '',
    'progress': 100,
    'time': null,
    'pin': false,
  },  
])

export const configCont = writable({
    'id': null,
    'time': null,
    'number': 100,
    'day': 365,
    'url': null,
    'token': null,
  })
