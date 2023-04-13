<template>
  <button 
    :class="[
      type ? `s-button--${type}` : '',
      size ? `s-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
      's-button'
    ]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <!-- loading -->
    <!-- loading 需要先放在前面 -->
    <i v-if="loading" class="s-icon-loading"></i>
    <!-- icon -->
    <!-- 注意 loading 和 icon 一起传入会以第一个条件为准 因为满足 v-if=“loading” -->
    <i v-else-if="icon" :class="icon"></i>
    <!-- 下面的写法结果一样 -->
    <!-- <i v-if="icon && !loading" :class="icon"></i> -->
    <!-- 文字 -->
    <!-- 如果没有传入任何的内容，也就是没有传入插槽的时候 -->
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
<script>
  // 设置组件名字
  export default { name: 'SButton' }
</script>

<script setup>
import { useSlots } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  icon: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  autofocus: Boolean,
  nativeType: {
    type: String,
    default: 'button'
  },
  size: String,
  loading: Boolean,
});
// console.log(props.type);

// https://github.com/ElemeFE/element/pull/10020

const slots = useSlots();
// console.log(slots);

// 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，它们具备完整的类型推断并且在 <script setup> 中是直接可用的：
const emit = defineEmits(['click']);

const handleClick = (evt) => {
  emit('click', evt)
}
</script>

<style lang="scss">
// 基础样式
.s-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

// type
.s-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.s-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.s-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.s-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.s-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// plain
.s-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.s-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.s-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.s-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.s-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.s-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round
.s-button.is-round {
  border-radius: 20px;
  padding: 8px 15px;
}

// circle
.s-button.is-circle {
  border-radius: 50%;
  padding: 8px;
}

// 既有文字又有icon
.s-button [class*="s-icon-"] + span {
  margin-left: 5px;
}

// 禁用
.s-button.is-disabled,
.s-button.is-disabled:focus,
.s-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.s-button--primary.is-disabled,
.s-button--primary.is-disabled:active,
.s-button--primary.is-disabled:focus,
.s-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.s-button--success.is-disabled,
.s-button--success.is-disabled:active,
.s-button--success.is-disabled:focus,
.s-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.s-button--info.is-disabled,
.s-button--info.is-disabled:active,
.s-button--info.is-disabled:focus,
.s-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.s-button--warning.is-disabled,
.s-button--warning.is-disabled:active,
.s-button--warning.is-disabled:focus,
.s-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.s-button--danger.is-disabled,
.s-button--danger.is-disabled:active,
.s-button--danger.is-disabled:focus,
.s-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

// 文字按钮
.s-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.s-button--text:focus,
.s-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.s-button--text.is-disabled,
.s-button--text.is-disabled:focus,
.s-button--text.is-disabled:hover,
.s-button--text:active {
  border-color: transparent;
}

// 按钮大小
.s-button--large {
  padding: 12px 19px;
  font-size: 14px;
  border-radius: 4px;
}
.s-button--small {
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
}

// loading
.s-button.is-loading {
  position: relative;
  pointer-events: none;
  &:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: rgba(255, 255, 255, 0.35);
  }
}
</style>

