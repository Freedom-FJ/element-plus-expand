<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:12:09
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-18 17:25:55
 * @Description:
-->
<template>
    <div class="contributor">
        <div v-for="item, index in showMenu" :key="index" class="contributor-items" @click="checkDetail(item.link)">
            <img class="head-sculpture" :src="item.img || person" alt="">
            <span>{{ item.team ? `${item.team}-` : '' }}{{ item.name }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import person from '/images/person.jpg'
// import { useRoute } from 'vitepress'

const props = defineProps({
    name: {
        type: String,
        default: undefined
    },
    img: {
        type: String,
        default: undefined
    },
    link: {
        type: String,
        default: undefined
    },
})

interface Team {
    name?: string
    img?: string
    link?: string
    team?: string
}
const membersModule: Record<string, { default: Team[] }> = import.meta.globEager('../../config/team/**/members.json')
const keys = Object.keys(membersModule)
const allMembers: Team[] = keys.reduce((pre, cur) => {
    return [
        ...pre,
        ...membersModule[cur].default
    ]
}, [])

const showMenu = shallowRef <Team[]> ([])
const nameList = (props.name || '').split(',')
showMenu.value = nameList.map(item => allMembers.find(member => member.name === item)).filter(item => item)

const checkDetail = (link) => {
    link && window.open(link)
}
</script>

<style lang="scss" scoped>
.contributor {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 20px;
    padding-left: 0;
    color: var(--vp-c-text-2);

    .contributor-items {
        display: flex;
        align-items: center;
        min-width: 100px;
        padding-right: 5px;
        margin-bottom: 10px;
        cursor: pointer;

        .head-sculpture {
            width: 35px;
            height: 35px;
            margin: 0 10px;
            border-radius: 50%;
        }

        span {
            font-family: var(--vp-font-family-base);
            font-size: 16px;
            font-weight: bold;
        }
    }

    .contributor-items:hover {
        color: #409eff;
    }
}
</style>
