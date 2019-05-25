<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <child :message="message"></child>
    </div>
</template>

<script>
    import child from './components/child.vue';
    export default {
        name: 'app',
        data() {
            return {
                title: '标题',
                message: '这是子组件'
            }
        },
        components: {
            child
        },
        mounted() {
            this.title = 'hello world'
        },
        methods: {
            setMessage(msg) {
                this.message = msg;
            }
        }
    }
</script>

<style lang="less">
.logo {
    width: 200px;
    height: 200px;
    background: url(./assets/imgs/logo.png);
}
.test {
    display: flex;
    height: 100px;
    padding: 20px;
    div {
        border: 1px solid lightskyblue;
    }
    &-child1 {
        flex-grow: 1;
    }
    &-child2 {
        flex-grow: 2
    }
    &-child3 {
    }
}
</style>


