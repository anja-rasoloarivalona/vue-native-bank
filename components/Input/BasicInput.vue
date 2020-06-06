<template>
    <view class="basic-input">
        <text-input
            :value="value"
            :onChangeText="(input) => $emit('change', input)"
            :onFocus="() => focused = true"
            :onBlur="() => focused = false"
            :keyboardType="keyboardType"
        />
        <view class="basic-input__label" :style="{top: labelPos}">
            <text class="basic-input__label__text" :style="{fontSize: labelTextSize}">{{ placeholder}}</text>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            focused: false
        }
    },
    computed: {
        labelPos () {
            if(this.focused || this.value !== ''){ return '-80%' } else { return '0%' }
        },
        labelTextSize () {
            if(this.focused || this.value !== ''){ return 12 } else { return 16 }
        }
    },
    props: {
        value: [String, Number],
        id: String,
        placeholder: String,
        keyboardType: String
    }   
}
</script>

<style>
.basic-input {
    width: 100%;
    border-bottom-color: green;
    border-bottom-width: 1;
    position: relative;
    margin-bottom: 40;
}
.basic-input__label {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 50%;
    z-index: -1;
}


.basic-input__label__text {
    color: grey;
}

</style>