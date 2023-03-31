<template>
    <svg-icon></svg-icon>
    
</template>
<script>
//引入图标在本文件生效 局部引用
    // import { Avatar } from '@element-plus/icons-vue';
    // export default{
    //     components:{
    //         Avatar
    //     }
    // }
    import {useStore} from 'vuex';
    export default{
        setup(){
            const store = useStore();
            const {state} = useStore();
            const value = state.app.count
            const value_store = store.app.count
            return 
        }
    }
</script>