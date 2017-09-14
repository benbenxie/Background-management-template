<template>
    <div class="container">
        <!--aside-->
        <div class="side theme-side">
            <div class="side-scroll">
                <div class="panel-group" id="accordion">
                    <div class="panel" v-for="(item,index) in items" v-if="item.id<10" :key="index">
                        <div class="panel-heading theme-side-title">
                            <h4 class="panel-title">
                                <a data-toggle='collapse' data-parent='#accordion' :href="'#'+item.id">
                                    <i class="agent agent-mk"></i>
                                    {{item.title}}
                                </a>
                            </h4>
                        </div>
                        <div :id="item.id " class="panel-collapse collapse">
                            <div class="panel-body theme-side-body" v-for="(value,index) in items"
                                 v-if="value.pid==item.id" :key="index">
                                <router-link @click.native="addTab(value,$event)" :to="value.path">
                                    <i class="agent agent-menu"></i>
                                    {{value.title}}
                                </router-link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--body-->
        <div class="body">
            <div class="body-tab">
                <div class="body-tab-title">
                    <router-link to="/" @click.native="homeTab()" :class="{ 'theme-back':tabs==''||isActive==-1 }">首页
                    </router-link>
                    <div v-for="(tab,index) in tabs" :key="index" :class="{ 'theme-back':index === isActive }">
                        <router-link @contextmenu.prevent.native="show($event,index)" @click.native.stop="switchTab(index,$event)"
                                     :to="tab.path">
                            {{tab.title}}
                        </router-link>
                        <i @click.stop.prevent="delTab(index,$event)" class="agent agent-xx"></i>
                    </div>
                </div>
                <div class="body-tab-content" id="">
                    <transition>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
        <!--contextmenu-->
        <div class="contextmenu">
            <ul>
                <li><a class="btn btn-block">刷新</a> </li>
                <li><a @click.prevent="delTab(isContextmenu,$event)" class="btn btn-block">关闭当前</a> </li>
                <li><a @click.prevent="delTab(isContextmenu,1)" class="btn btn-block">关闭其他</a> </li>
                <li><a @click.prevent="delTab(100,$event)" class="btn btn-block">关闭所有</a> </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Router from 'vue-router'
    Vue.use(Router)

    const str = [
        {
            id: "1",
            title: "客户模块",
            path: ""
        },
        {
            id: "11",
            pid: "1",
            title: "客户列表",
            path: "/khlist"
        },
        {
            id: "13",
            pid: "1",
            title: "客户管理",
            path: "/khgl"
        },
        {
            id: "14",
            pid: "1",
            title: "短信发送",
            path: "/dxfs"
        },
        {
            id: "2",
            title: "语音模块",
            path: ""
        },
        {
            id: "21",
            pid: "2",
            title: "未接来电",
            path: "/wjld"
        },
        {
            id: "22",
            pid: "2",
            title: "已接来电",
            path: "/yjld"
        },
        {
            id: "23",
            pid: "2",
            title: "历史录音",
            path: "/lsly"
        },
        {
            id: "24",
            pid: "2",
            title: "实时监控",
            path: "/ssjk"
        },
        {
            id: "3",
            title: "统计模块",
            path: ""
        },
        {
            id: "31",
            pid: "3",
            title: "话务统计",
            path: "/hwtj"
        },
        {
            id: "32",
            pid: "3",
            title: "业务统计",
            path: "/ywtj"
        },
        {
            id: "33",
            pid: "3",
            title: "评价统计",
            path: "/pjtj"
        },
        {
            id: "5",
            title: "其他模块",
            path: ""
        },
        {
            id: "51",
            pid:'5',
            title: "知识库",
            path: "/zsk"
        },
        {
            id: "52",
            pid:'5',
            title: "即时通讯",
            path: "/jstx"
        },
        {
            id: "6",
            title: "系统设置",
            path: ""
        },
        {
            id: "61",
            title: "系统参数",
            pid: "6",
            path: "/xtcs"
        },
        {
            id: "62",
            title: "部门管理",
            pid: "6",
            path: "/bmgl"
        },
        {
            id: "63",
            title: "用户管理",
            pid: "6",
            path: "/yhgl"
        },
        {
            id: "64",
            title: "角色管理",
            pid: "6",
            path: "/jsgl"
        },
        {
            id: "65",
            title: "菜单管理",
            pid: "6",
            path: "/cdgl"
        },
        {
            id: "66",
            title: "字典管理",
            pid: "6",
            path: "/zdgl"
        }
    ]

    export default {
        name: 'app',
        data ()
    {
        return {
            isActive: 0,
            items: str,
            tabs: [],
            isContextmenuShow:false,
            isContextmenu:0
        }
    }
    ,
    methods:{
        homeTab()
        {
            this.isActive = -1;
        }
    ,
        addTab(title, e)
        {
            $(e.currentTarget).addClass('white')
            let arrResult = [];
            for (var i = 0; i < this.tabs.length; i++) {
                arrResult.push(this.tabs[i]);
            }
            arrResult.push(title);
            this.tabs = [];
            arrResult = $.unique(arrResult);
            for (var j = 0; j < arrResult.length; j++) {
                this.tabs.push(arrResult[j]);
                if (arrResult[j] == title) {
                    this.isActive = j
                }
            }
        }
    ,
        delTab(i, e)
        {
            if(e===1){
                let arr=[];
                arr[0]=this.tabs[i];
                this.tabs='';
                this.tabs=arr;
                this.isActive=0;
                this.$router.push(this.tabs[0].path);
                return
            }
            if (i > 0) {
                if(i<100){
                    this.tabs.splice(i, 1)
                    this.isActive = i - 1;
                    this.$router.push(this.tabs[i-1].path);
                }else{
                    this.tabs = '';
                    this.isActive = -1;
                    this.$router.push('/home');
                }
            } else {
                this.tabs.shift();
                if (this.tabs == '') {
                    this.$router.push('/home');
                } else {
                    if (this.isActive > 0) {
                        this.isActive = this.isActive - 1;
                    } else {
                        this.$router.push('/home');
                        this.isActive = -1;
                    }

                }
            }

        }

    ,
        switchTab(index, e)
        {
            this.isActive = index;
        }
    ,
        show(e,index)
        {
            var e = event || window.event;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
//            console.log(e)_
//            alert('x: ' + x + '\ny: ' + y);
            $('.contextmenu').css({'left':x+'px','top':y+'px'})
            $('.contextmenu').show();
            this.isContextmenu=index;
            this.isContextmenuShow=!this.isContextmenuShow;
            if(this.isContextmenuShow){
                $(document).click(function(){
                    $('.contextmenu').hide();
                })
            }
        }
    }
    }


</script>

<style scoped>
    .theme-side{
        background-color: #343742;
    }
    .theme-side-title{
        background-color: #454952;
        color: #ccc;
        height: 45px;
        vertical-align: bottom;
    }
    .theme-side-body{
        background-color: #343742;

    }
    .theme-side-body a{
        display: inline-block;
        height: 100%;
        min-width: 180px;
        color:#ccc;
        cursor: pointer;
        text-decoration: none;
    }
    .theme-side-body a:hover{
        color:#fff;
        text-decoration: none;
    }
    .theme-side-body a.white {
        color: #fff;
    }
    .contextmenu{
        background-color: #fff;
        position: fixed;
        border: #ededed;
        display: none;
        z-index: 9999;
    }
    .contextmenu ul{
        padding-left: 0;
    }
    .contextmenu a:hover{
        background-color: #ededed;
    }
    .theme-side-body a:hover .agent-menu, .white .agent-menu {
        background-position: -140px 0;
    }
    .panel-group .panel-heading + .panel-collapse > .panel-body{
        border: none;
    }
    .panel-heading{
        padding: 14px 15px;
    }
</style>