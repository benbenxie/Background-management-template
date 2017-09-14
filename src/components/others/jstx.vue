<template>
    <div class="chat">
        <div class="left border">
            <div class="flex">
                <div v-for="(item,index) in topMenu" class="left-top" :class="{'current':isCurrent==index}" >
                    {{item}}
                </div>
            </div>
            <div class="search-box ">
                <input type="text" class="form-control" placeholder="搜索联系人,名称"/>
            </div>
            <div class="left-content">
                <div>
                    <p class=""><span class="agent agent-weixin"></span> 长沙-小李子 <span class="fr">10:30</span></p>
                    <div class="chat-content">
                        <span>滚床单吗?</span>
                        <span class="fr theme-back">1</span>
                    </div>

                </div>
                <div>
                    <p class=""><span class="agent agent-phone"></span> 长沙-静静 <span class="fr">10:30</span></p>
                    <div class="chat-content">
                        <span>滚!</span>
                        <span class="fr theme-back">3</span>
                    </div>

                </div>
                <div>
                    <p class=""><span class="agent agent-pc"></span> 长沙-向元灰 <span class="fr">10:30</span></p>
                    <div class="chat-content">
                        <span>去你家还是我家?</span>
                        <span class="fr theme-back">2</span>
                    </div>

                </div>
                <div>
                    <p class=""><span class="agent agent-weibo"></span> 长沙-周疼 <span class="fr">10:30</span></p>
                    <div class="chat-content">
                        <span>去你的</span>
                        <span class="fr theme-back">12</span>
                    </div>

                </div>

                <div>
                    <p class=""><span class="agent agent-qq"></span> 长沙-瑶瑶 <span class="fr">10:30</span></p>
                    <div class="chat-content">
                        <span>去你的去你的去你的去你的去你的</span>
                        <span class="fr theme-back">99+</span>
                    </div>

                </div>

            </div>
        </div>
        <div class="right">
           <div class="tabs">
                <div @click="switchTab(index)" v-for="(tab,index) in tabs" class="tab" :class="{hover:index==isHover}">
                    {{tab.name}}
                </div>
           </div>
            <div class="right-box flex">
                <!--chat-->
                <div class="right-content ">
                    <!--top-->
                    <div class="ip-info border">
                        <div class="src-pic">
                            <span class="agent agent-qq"></span>
                        </div>
                        <div class="src-ip">
                            <p>长沙-静静</p>
                            <p> ip:1.1.1.1</p>
                        </div>
                        <div class="src-btns fr">
                            <a class="btn btn-default">
                                <span class="agent agent-top"></span><br/>
                                置顶
                            </a>
                            <a class="btn btn-default">
                                <span class="agent agent-transfer"></span><br/>
                                转接
                            </a>
                            <a class="btn btn-default">
                                <span class="agent agent-order"></span><br/>
                                工单
                            </a>
                            <a class="btn btn-default">
                                <span class="agent agent-close"></span><br/>
                                关闭
                            </a>
                        </div>
                    </div>
                    <!--content-->
                    <div id="chat-info" class="chat-info border-notop">
                        <div class="clear margin-bottom" v-for="chat in mychat" :class="{'clear':chat.name==='我'}">
                            <div :class="{'fr':chat.name==='我'}">
                                <p>{{chat.name}} {{chat.time}}</p>
                                <div class="realinfo border">
                                    <img :src="chat.src" alt=""/>
                                    {{chat.content}}
                                </div>
                            </div>
                        </div>
                     
                    </div>
                    <!--edit-->
                    <div class="edit border-notop">
                        <!--表情 图片 文件-->
                        <div class="dropdown">
                            <a class="agent agent-bq dropdown-toggle" data-toggle="dropdown"></a>
                            <div class="dropdown-menu text-right" role="menu">
                                <img @click.stop="chat($event)" src="../../assets/images/bq01.gif" alt=""/>
                                <img @click.stop="chat($event)" src="../../assets/images/bq02.jpg" alt=""/>
                                <img @click.stop="chat($event)" src="../../assets/images/bq03.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a class="agent agent-tp"></a>
                        </div>
                        <div class="dropdown">
                            <a class="agent agent-wj"></a>
                        </div>

                        <!--输入框-->
                        <textarea @keyup.enter="chat($event)"  id="chatMsg" spellcheck="false"></textarea>
                        <!--发送按钮-->
                        <div class="clear">
                            <a class="btn btn-default fr" @click="chat($event)" >发送(enter)</a>
                        </div>
                    </div>
                </div>

                <!--src-->
                <div class="right-source border">
                    <div class="flex">
                        <div>访问信息</div>
                        <div>客户信息</div>
                        <div>业务记录</div>
                        <div>工单</div>
                        <div>知识库</div>
                    </div>
                    <!--content-->
                    <div class="src-content">
                        <div class="src-container" v-for="item in srcinfo">
                            <div class="src-title">
                                {{item.title}} :
                            </div>
                            <div class="realsrc margin-bottom">
                                <p>{{item.content}}</p>
                                <p>{{item.src}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function trim(s){
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
    let tabs=[
       {
           name:'长沙-静静',
           id:'1'
       },
       {
           name:'长沙-小灰灰',
           id:'2'
       },
       {
           name:'长沙-周疼',
           id:'3'
       },
       {
           name:'长沙-遥遥',
           id:'4'
       }
   ]
    let mychat=[
       {
           name:'长沙静静',
           time:'10:25:01',
           content:'请问可以滚床单吗?'
       },
       {
           name:'我',
           time:'10:25:01',
           content:'滚！'
       },
       {
           name:'长沙静静',
           time:'10:25:01',
           content:'去你家还是我家?'
       },
       {
           name:'我',
           time:'10:25:01',
           content:'去你的！'
       },
       {
           name:'我',
           time:'10:25:01',
           src:'src/assets/images/bq01.gif'
       }
   ]
    let srcinfo=[
        {
            title:'来源',
            content:'百度搜索',
            src:'http://www.baidu.com'
        },
        {
            title:'搜索词',
            content:'呼叫中心'
        },
        {
            title:'系统',
            content:'win8'
        },
        {
            title:'浏览器',
            content:'IE 10'
        },
        {
            title:'ip',
            content:'1.1.1.1(长沙)'
        },
//        {
//            title:'对话发起页',
//            content:'通信和云呼叫中心解决方案 ',
//            src:'http://www.canv.cc/index/produce/id/3'
//        },
//        {
//            title:'访问着陆页',
//            content:'湖南畅远技术有限公司',
//            src:'http://www,canv.cc'
//        }
    ]
    export default {
        name: 'jstx',
        data ()
        {
        return {
            topMenu: ['最近','类别','类别','类别'],
            isCurrent:0,//左侧
            isHover:0,//tabhover
            tabs,
            mychat,
            srcinfo
        }
    },
    methods:{
        switchTab(i){
            this.isHover=i
        },
        chat(e){
            let now =new Date();
            let h=now.getHours();
            let m=now.getMinutes();
            let s=now.getSeconds();
            let src='';
            let content;
            if(e.currentTarget.src){
                src=e.currentTarget.src
            }else if(trim(chatMsg.value) !=''){
                content= chatMsg.value;
                console.log(typeof(content))
            }else{
                return;
            };
            this.mychat.push({
                name:'我',
                time:h+":"+m+":"+s,
                src:src,
                content:content
            })
            chatMsg.value='';
        }
    },
    watch:{
        mychat(){
            this.$nextTick(() => {
                let div=document.getElementById('chat-info');
                div.scrollTop = div.scrollHeight;
            })
        }
        }
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    .chat{
        position: relative;
    }
    .left{
        width: 300px;
        min-height: 800px;
    }
    .right{
        position: absolute;
        left: 300px;
        top: 0;
        right: 0px;
    }
    .left-content>div{
        border-bottom: solid 1px #ededed;
        cursor: pointer;
    }
    .left-content>div:hover{
        background-color: #f2f2f2;
    }
    .chat-content span:first-child{
        display: inline-block;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .chat-content .fr{
        padding: 0 5px;
        text-align: center;
        min-width: 20px;
        border-radius: 10px;
    }
    .left-top{
        cursor: pointer;
        color: #B6B6B6;
        flex: 1;
        text-align: center;
        padding: 10px 0;
        font-size: 16px;
    }
    .current{
        color: #333;
    }

    .left-content>div{
        padding: 10px 20px;
    }
    .search-box{
        padding: 10px 20px;
        background-color: #EBEBEB;
    }
    .form-control{
        padding-right: 40px;
        height: 24px;
        border-radius: 12px;
        background:#fff url("../../assets/images/search.png") no-repeat 95% 0;;
    }
    .tab{
        padding: 10px;
        display: inline-block;
        background-color: #f2f2f2;
        border:solid 1px #ededed;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        cursor:pointer;
    }
    .hover{
        background-color: #fff;
        border-bottom: none;
    }
    .right-box{
        margin: 20px;
    }
    .right-content{
        flex: 3;
    }
    .right-source{
        flex: 2;
    }
    .ip-info{
        background-color: #F2F2F2;
        padding: 10px 0;
        vertical-align: bottom;
    }
    .ip-info>div{
        display: inline-block;
        margin-left: 10px;

    }
    .src-pic{
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #fff;
        border-radius: 50%;
        vertical-align: top;
    }
    .src-ip{
        height: 60px;
        padding-top: 10px;
    }
    .src-ip p:first-child{
        font-size: 20px;
    }
    .src-ip p:last-child{
        font-size: 10px;
    }
    .src-btns a{
        margin-right: 10px;
        padding-top: 10px;
    }
    .src-btns .agent{
        margin: 0;
    }
    .chat-info{
        padding: 10px 20px;
        height: 400px;
        overflow-y:auto;
    }
    .realinfo{
        display: inline-block;
        background-color: #F2F3FA;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
    }
    .chat-info .fr{
        text-align: right;
    }
    .edit{
        padding: 10px;
    }
    .edit .dropdown{
        display: inline-block;
    }
    .edit .dropdown-menu{
        top: auto;
        bottom: 45px;
    }
    .edit .dropdown-menu img{
        width: 50px;
        height: 50px;
    }
    .edit textarea{
        resize:none;
        width: 100%;
        height: 100px;
        border: none;
    }
    .edit textarea:focus{
        outline: none;
    }
    .right-source .flex>div{
        flex: 1;
        padding: 10px;
        text-align: center;
        background: #f2f2f2;
        border-bottom: solid 1px #ededed;
    }
    .src-content{
        padding: 20px 10px;
    }
    .src-container>div{
        display: inline-block;
    }
    .src-title{
        width: 100px;
        vertical-align: top;
    }
</style>