import Vue from 'vue';
import App from '../../src/App.vue';

describe('test App.vue', () => {
    it('组件加载后，title应该是Hello world', () => {
        let vm = new Vue(App).$mount();
        expect(vm.title).toEqual('Hello world');
    });
})