<script>
export default{
    data(){
        return{
            valueLocal: {
            type: Boolean,
            default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    },
    methods: {
        favorite() {
            this.valueLocal = !this.valueLocal;
            if (this.disabled == true) {
                return;
            }
            
        }
    },
}
</script>

<template>

<div class="favoriting">
        <label
                class="favorite__heart"
                :class="{'favorite__heart__selected': valueLocal, 'is-disabled': disabled}"
                @click="favorite">
            <input
                    class="favorite__checkbox"
                    type="checkbox"
                    :value="valueLocal"
                    :disabled="disabled"
                    v-model="valueLocal">
            ❤
        </label>
    </div>
</template>

<style>
.favorite__heart {
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 20px;
    color: #ABABAB;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
/* .favorite__heart.is-disabled:hover {
     cursor: default;
 } */
.favorite__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.favorite__heart__selected{
    color: #df470b;
}
</style>