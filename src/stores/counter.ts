import { defineStore } from 'pinia';

export default defineStore('counter', {
  state() {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
    reduce() {
      this.count--;
    },
  },
});
