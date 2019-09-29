import { writable } from 'svelte/store';

export const selectTab = writable(0);

export const listCont = writable([
  {
    'title': '完成TodoList基本样式开发',
    'desc': 'Here is the description, Here is the description, Here is the description',
    'progress': '80',
  },
  {
    'title': '完成Search to Play the Song版本更新',
    'desc': 'Here is the description, Here is the description, Here is the description',
    'progress': '70',
  }
])

export const todoStore = writable([
  {
    id: 0,
    desc: '请输入desc',
    progress: '0',
    time: '0',
    title: '请输入title'
  }
])