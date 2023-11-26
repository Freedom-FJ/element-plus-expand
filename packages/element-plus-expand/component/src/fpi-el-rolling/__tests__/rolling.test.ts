/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-18 12:11:16
 * @Description:
 */
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import rolling from '../fpi-el-rolling.vue'
// The component to test
describe('test rolling', () => {
    it('should render slot', () => {
        const wrapper = mount(rolling, {
            slots: {
                default: 'element-plus-expand'
            }
        })
        expect(wrapper.text()).toContain('element-plus-expand')
    })
    it('should have class', () => {
        const wrapper = mount(rolling, {
            props: {
                direction: 'x'
            }
        })
        const rollDiv = wrapper.find('.fpi-el-rolling')
        expect(rollDiv.classes()).toContain('fpi-el-rolling-flex')
        const wrapperY = mount(rolling, {
            props: {
                direction: 'y'
            }
        })
        const rollDivY = wrapperY.find('.fpi-el-rolling')
        expect(rollDivY.classes('fpi-el-rolling-flex')).toBe(false)
    })

    it('should be hover', async () => {
        const wrapper = mount(rolling, {
            props: {
                action: 'hover'
            }
        })
        const rollDiv = wrapper.find('.fpi-el-rolling')
        await rollDiv.trigger('mouseenter')
        expect(wrapper.emitted()).toHaveProperty('change')

        await rollDiv.trigger('mouseleave')
        expect(wrapper.emitted()).toHaveProperty('change')
    })

    it('should be click', async () => {
        const wrapper = mount(rolling, {
            props: {
                action: 'click'
            }
        })
        const rollDiv = wrapper.find('.fpi-el-rolling')
        await rollDiv.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('change')
    })
    it('should be dblclick', async () => {
        const wrapper = mount(rolling, {
            props: {
                action: 'dblclick'
            }
        })
        const rollDiv = wrapper.find('.fpi-el-rolling')
        await rollDiv.trigger('dblclick')
        expect(wrapper.emitted()).toHaveProperty('change')
    })

    it('should be style', async () => {
        const wrapper = mount(rolling, {
            props: {
                direction: 'x',
                time: 20
            }
        })
        const rollDiv: any = wrapper.find('.fpi-el-rolling').element
        expect(rollDiv.style.animation).toBe(`${wrapper.vm.animationName} 20s linear infinite`)
    })

    it('should be model', async () => {
        const model = ref(false)
        const wrapper = mount(rolling, {
            props: {
                modelValue: model.value,
            }
        })
        const rollDiv: any = wrapper.find('.fpi-el-rolling').element
        expect(rollDiv.style.animation).toBe(`${wrapper.vm.animationName} 10s linear infinite`)
    })

    it('should startAnimation', () => {
        const model = ref(false)
        const wrapper = mount(rolling, {
            slots: {
                modelValue: model
            }
        })
        wrapper.vm.startAnimation()
        expect(wrapper.vm.isRolling).toBe(true)
    })

    it('should changeForcedStop', () => {
        const model = ref(false)
        const wrapper = mount(rolling, {
            slots: {
                modelValue: model
            }
        })
        wrapper.vm.changeForcedStop(false)
        expect(wrapper.vm.forcedStop).toBe(false)
    })
})
