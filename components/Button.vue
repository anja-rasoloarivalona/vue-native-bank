<template>
    <touchable-opacity
        class="button"
        :style="{ backgroundColor: backgroundColor}"
        :onPress="() => press()"
    >
        <text
            class="button__text"
            :style="{color: textColor}"
        >
            <slot />
        </text>
    </touchable-opacity>
</template>

<script>
export default {
    computed: {
        backgroundColor () {
            if(this.solid){
                return this.color
            } else return 'transparent'
        },
        textColor () {
            if(this.solid){
                return '#fff'
            } else return this.color
        }
    },
    props: {
        color: String,
        solid: Boolean,
        transparent: Boolean
    },
    methods: {
        press () {
            this.$emit('onPress')
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    height: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20;
    border-radius: 5;
}
.button__text {
    color: #fff;
}
</style>