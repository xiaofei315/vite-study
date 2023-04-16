import {defineStore} from 'pinia'

export const useUser = defineStore('userStore', {
    state: () => ({
        name: 'xiaofei',
        age: 21,
        gender: 'male'
    }),
    getters: {
        name2: (state) =>state.name + '2',
        getName(): string {
            return  this.name + 'nb'
        }
    },
})
