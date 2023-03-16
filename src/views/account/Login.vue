<template>
    <div id="login">
        <div class="from-wrap">
             <ul class="menu-tab"><!--按钮或者菜单 -->
                <!-- ：class == v-bind -->
                <!--  @click="current_menu=item.type" 鼠标单击（登录和注册切换） -->
                <li  @click="toggleMenu(item.type)" :class="{'current':current_menu===item.type}" v-for="item in tab_menu" :key="item.type">{{item.label}}</li>
               
                <el-form ref="from" :model="form" :rules="form_rules">
                    <el-form-item prop="username">
                        <label class="from-label">邮箱</label>
                        <el-input v-model.trim="form.username"/>
                    </el-form-item>
                    <el-form-item prop="password"> 
                        <label class="from-label">密码</label>
                        <el-input type="password" v-model="form.password"/>
                    </el-form-item >
                    <el-form-item v-if="current_menu==='register'" prop="passwords">
                        <label class="from-label">确认密码</label>
                        <el-input type="password" v-model="form.passwords"/>
                    </el-form-item>
                    <el-form-item>
                        <label class="from-label">验证码</label>
                        <el-row :gutter="10">
                            <el-col :span="14">
                                <el-input v-model="form.code"></el-input>
                            </el-col>
                            <el-col :span="10">
                            <el-button type="success" class="el-button-block">获取验证码</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" class="el-button-block" disabled>登录</el-button>
                    </el-form-item>
                </el-form>
            </ul>

        </div>
    </div>
</template>
<!-- scoped 全局 只能在样式里用 -->
<style lang="scss" scoped>
    #login{
        height: 100vh;
        background-color: #344a5f;
    }
    .from-wrap{
        width: 320px;
        padding-top: 100px;
        margin: auto;
    }
    .menu-tab{
        text-align: center;
        li{
            display: inline-block;
            padding: 10px 24px;
            margin: 0 10px;
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            &.current{
                background-color: rgba(0,0,0,.1);
            }
        }
    }
    .from-label{
        display: block;
        color: #fff;
        font-size: 14px;


    }
</style>
<script>
import { reactive,toRefs } from 'vue';
import{validata_email,validate_password,validate_code} from '../../utils/validate';
export default{
    setup(props,{ root }){
        const data = reactive({
            form:{
                username:"",
                password:"",
                passwords:"",
                code:"",
                
            },
            tab_menu:
            [
                {type:"login",label:"登录"},
                {type:"register",label:"注册"}
            ],
            // form_rules:{
            //     username:[
            //         {required: true,message:'请输入用户名',tigger:'change'},
            //         {min:3,max:5,message:'长度在3和5之间',tigger:'change'}
            //     ]
            // },
            current_menu:"login"
        })
        const validata_username_rules = (rule,value,callback)=>{
            let reg_email = validata_email(value);
            if(value===""){
                callback(new Error("请输入邮箱"))
            }else if(!reg_email){
                callback(new Error("请输入正确的邮箱格式"))
            }else{
                callback()
            }
        }
        const validata_password_rules = (rule,value,callback)=>{
            let reg_password = validate_password(value);
            if(value===""){
                callback(new Error("请输入密码"))
            }else if(!reg_password){
                callback(new Error("请输入6-20位的密码,包含数字、字母"))
            }else{
                callback()
            }
        }
    
        const validata_passwords_rules = (rule,value,callback)=>{
            let reg_password = validate_password(value);
            const passwordValues = data.form.password;
            if(value===""){
                callback(new Error("请输入密码"))
            }else if(!reg_password){
                callback(new Error("请输入6-20位的密码,包含数字、字母"))
            }else if(passwordValues && passwordValues!==value){
                    callback(new Error("两次密码不一致"))
            }else{
                callback()
            }
        }
        
        const form_rules = reactive({
            username:[{validator:validata_username_rules,trigger:'change'}],
            password:[{validator:validata_password_rules,trigger:'change'}],
            passwords:[{validator:validata_passwords_rules,trigger:'change'}],
        })
        const toggleMenu = ((type)=>{
            data.current_menu = type
        })
       
        return{
            toggleMenu,...toRefs(data),form_rules
        }
    }
}
</script>