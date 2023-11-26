/*
 * @Author: mjh
 * @Date: 2023-03-29 12:35:17
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-29 13:51:05
 * @Description:
 */

import { useTimeoutFn } from '@vueuse/shared'
import { ref, unref } from 'vue'
import copy from 'copy-rich-text'
export function useCopy(_ref) {
    const {
        text,
        duration = 1000,
        onSuccess,
        onError,
        ...copyOptions
    } = _ref
    const copied = ref(false)
    const error = ref()
    const timeout = useTimeoutFn(() => {
        copied.value = false
        error.value = null
    }, duration)
    return {
        error,
        copied,

        copy(options) {
            if (copied.value) return
            const textOrElement = unref(text)
            copy(textOrElement, {
                ...copyOptions,
                ...options
            }).then(() => {
                copied.value = true
                onSuccess == null ? undefined : onSuccess()
                timeout.start()
            }).catch((err) => {
                error.value = err
                onError == null ? undefined : onError(err)
                timeout.start()
                throw err
            })
        }

    }
}
