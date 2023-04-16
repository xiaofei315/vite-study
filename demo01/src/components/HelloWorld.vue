<script setup lang="ts">
import {ref} from 'vue'
import {hello} from "@/utils/hello";
import {useCounterStore} from '@/store/counter'
import {useUser} from "@/store/user";

defineProps<{ msg: string }>()

const count = ref(0)
const counter = useCounterStore()
const user = useUser();
const add = () => {
    counter.counter++
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="card">
        <button type="button" @click="hello">hello</button>
        <h2>{{ user.name2 }}</h2>
        <button type="button" @click="add">count is {{ counter.counter }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
        >, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
