    import { createRouter, createWebHashHistory } from "vue-router";
    import HomeView from "../views/HomeView.vue";
    import { Login } from "@/api/account";
    const routes = [
        {
            path: "/",
            name: "home",
            // redirect:"Login",//重定向
            hidden:true,//渲染侧菜单拦时要不要判断
            // meta:{
            //     title:"根路径"
            // },
            component: HomeView,    
        },
        {
            path: "/login",
            name: "Login",
            // meta:{
            //     title:"登录"
            // },
            hidden:true,
            component: () =>
                import ("../views/account/Login.vue"),

            // component:Lonin,
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
        // },
        // {
        //     path: "/test",
        //     name: "test",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ "../views/TestView.vue"),
        // },   
        {
            path: "/home",
            name: "Home",
            meta:{
                title:"控制台",
                icon:"home"
            },
            component: () =>
                import ("../Layout/Index.vue"),
            children:[
                {
                    path:"/console",
                    name:"Console",
                    meta:{
                        title:"首页",
                        
                    },
                    component:()=>import("../views/console/Index.vue")

                }
            ]

        },
        {
            path: "/news",
            name: "News",
            meta:{
                title:"信息管理",
                icon:"YY_information"
            },
            component: () =>
                import ("../Layout/Index.vue"),
            children:[
                {
                    path:"/newsIndex",
                    name:"NewsIndex",
                    meta:{
                        title:"信息列表"
                    },
                    component:()=>import("../views/info/Index.vue")
        
                },
                {
                    path:"/newsCategory",
                    name:"NewsCategory",
                    meta:{
                        title:"信息分类"
                    },
                    component:()=>import("../views/info/Category.vue")
        
                },
                {
                    path:"/newsDatailed",
                    name:"NewsDatailed",
                    
                    hidden:true,
                    meta:{
                        title:"信息详情"
                    },
                    component:()=>import("../views/info/Detailed.vue")
        
                }
            ]
        },
        {
            path: "/user",
            name: "User",
            meta:{
                title:"用户管理",
                icon:"user"
            },
            component: () =>
                import ("../Layout/Index.vue"),
            children:[
                {
                    path:"/userIndex",
                    name:"UserIndex",
                    meta:{
                        title:"用户列表"
                    },
                    component:()=>import("../views/user/Index.vue")
        
                }
            ]
        },
        //测试用的
        // {
        //     path: "/test",
        //     name: "test",
        //     component: () =>
        //         import ("../views/TestView.vue")
        // }
    ];

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    export default router;