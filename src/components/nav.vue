<template>
    <!--nav-->
    <div id="v-navbar" class="navbar navbar-default">
        <!--<script type="text/javascript">-->
        <!--try{ace.settings.check('navbar' , 'fixed')}catch(e){}-->
        <!--</script>-->

        <div class="navbar-container">
            <!-- #section:basics/sidebar.mobile.toggle -->
            <!--<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">-->
                <!--<span class="sr-only">Toggle sidebar</span>-->

                <!--<span class="icon-bar"></span>-->

                <!--<span class="icon-bar"></span>-->

                <!--<span class="icon-bar"></span>-->
            <!--</button>-->

            <!-- /section:basics/sidebar.mobile.toggle -->
            <div class="navbar-header pull-left ">
                <!-- #section:basics/navbar.layout.brand -->
                <div class="navbar-brand logo">
                    <small>
                        JICC呼叫中心

                    </small>
                </div>


                <div class="navbar-brand navbar-user">
                    <i class="agent agent-kf"></i>
                    8001
                    <span class="theme-color ">【闲置中】</span>
                </div>

                <div class="navbar-brand navbar-queue">
                    <span class="agent agent-queue" ></span><span>#1234</span><span class="caret"></span>
                    <ul class="dropdown-menu" >
                        <li><a href="#">1234</a></li>
                        <li><a href="#">1234</a></li>
                        <li><a href="#">1234</a></li>
                        <li><a href="#">1234</a></li>
                    </ul>
                </div>

                <div class="navbar-brand ">
                    <div class="agent-search theme-back"><input type="text" style="outline:none;color:#333"
                                                                class="input-sm phone-search "
                                                                placeholder="输入手机号搜索">
                    </div>

                </div>


                <div class="navbar-brand">
                    <small>
                        <a class="btn btn-sm theme-back ">
                            <i class="agent agent-hj"></i>
                            呼叫
                        </a>
                    </small>
                </div>

                <div class="navbar-brand">
                    <small>
                        <a class="btn theme-back btn-sm">
                            <i class="agent agent-gd"></i>
                            挂断
                        </a>
                    </small>
                </div>

                <div class="navbar-brand">
                    <small>
                        <a class="btn theme-back btn-sm">
                            <i class="agent agent-zx"></i>
                            置闲
                        </a>
                    </small>
                </div>

                <div class="navbar-brand">
                    <small>
                        <a class="btn theme-back btn-sm">
                            <i class="agent agent-zm"></i>
                            置忙
                        </a>
                    </small>
                </div>

                <div class="navbar-brand">
                    <small>
                        <a class="btn theme-back btn-sm">
                            <i class="agent agent-jt"></i>
                            监听
                        </a>
                    </small>
                </div>

                <div class="navbar-brand">
                    <small>
                        <a class="btn theme-back btn-sm">
                            <i class="agent agent-jk"></i>
                            监控
                        </a>
                    </small>
                </div>
            </div>

            <div class="navbar-brand fr margin-right navbar-set">
                <span class="agent agent-set"></span>
                <ul class="dropdown-menu user-dropdown">
                    <li><a>站内消息</a></li>
                    <li><a>知识库</a></li>
                    <li><a>帐号设置</a></li>
                    <li><a>退出登录</a></li>
                </ul>
            </div>
            <div class="navbar-brand fr">
                <span class="agent agent-msg"></span>
                <span class="theme-color">12</span>
            </div>
        </div>
        <!-- /.navbar-container -->
    </div>
</template>

<script>
    export default {
        data() {
        return {
            mes:''
        }
    }
    }
</script>

<style scoped>
    .logo {
        background-color: #b4403b;
        color: #fff;
        width: 200px;
    }
    .navbar-header .logo:hover{
        background-color: #b4403b;
        color: #fff;
    }
    .navbar-brand{
        padding: 10px 0 0 10px;
    }
    .navbar-queue,.navbar-user{
        line-height: 30px;
        position: relative;
    }
    .agent-queue,.agent-msg,.agent-set,.navbar-user i{
        padding-top: 0px;
        padding-bottom: 5px;
    }
    .navbar-queue span{
        cursor: pointer;
    }
    .navbar-set{
        padding: 10px 15px 0 20px;
    }
    .navbar-set:hover,.navbar-queue:hover{
        background-color: #f2f2f2;
    }
    .navbar-set:hover ul,.navbar-queue:hover ul{
        display: block;
    }
    .dropdown-menu{
       top: 95%;
    }
    .dropdown-menu > li > a{
        padding: 5px 20px;
    }

</style>