<template>
   <div>
       <!--top-->
       <div class="top flex margin-bottom">
           <!--userinfo-->
           <div class="margin-right userinfo">
               <div class="border userinfo-pic">
                   <span class="agent agent-head"></span>
                   <span class="user-number">{{userinfo.gonghao}}</span>
                   <span class="theme-color">[{{userinfo.zhuangtai}}]</span>

               </div>
               <ul class="border-notop">
                   <li>
                       <span class="kh-title">姓名</span> :
                       <span>{{userinfo.xinming}}</span>
                   </li>
                   <li>
                       <span class="kh-title">角色</span> :
                       <span>{{userinfo.juese}}</span>
                   </li>
                   <li>
                       <span class="kh-title">坐席</span> :
                       <span>{{userinfo.zuoxi}}</span>
                   </li>
                   <li>
                       <span class="kh-title">部门</span> :
                       <span>{{userinfo.bumen}}</span>
                   </li>
                   <li>
                       <span class="kh-title">岗位</span> :
                       <span>{{userinfo.gangwei}}</span>
                   </li>
               </ul>
               <div class="border-notop ">
                   <iframe id="fancybox-frame" name="fancybox-frame1500255264768"
                           frameborder="0" scrolling="no" hspace="0"  src="http://i.tianqi.com/index.php?c=code&a=getcode&id=38&h=60&w=610"></iframe>
               </div>
           </div>
           <!--right-->
           <div class="top-content flex">
               <!--data-->
               <div class="margin-right call-data">
                   <div class="margin-bottom border realdata">
                       <h5>呼叫中心数据
                           <div class="time-choose btn-group">
                               <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">今日 <span class="caret"></span></a>
                               <ul class="dropdown-menu" role="menu">
                                   <li><a href="#">三天内</a></li>
                                   <li><a href="#">一周内</a></li>
                                   <li><a href="#">本月</a></li>
                               </ul>
                           </div>
                       </h5>
                        <div class="flex data-container">
                            <div class="data">
                                <div class="agent agent-in"></div>
                                <div class="fr data-box">
                                    <span class="data-title fr">呼入量</span> <br/>
                                    <span class="realdata">24</span>
                                </div>
                            </div>
                            <div class="data">
                                <div class="agent agent-out"></div>
                                <div class="fr data-box">
                                    <span class="data-title fr">呼出量</span> <br/>
                                    <span class="realdata">13241</span>
                                </div>
                            </div>
                            <div class="data">
                                <div class="agent agent-all"></div>
                                <div class="fr data-box">
                                    <span class="data-title fr">总数</span> <br/>
                                    <span class="realdata">415</span>
                                </div>
                            </div>
                        </div>
                   </div>
                   <div class="border realdata">
                       <h5>客户管理数据
                           <div class="time-choose btn-group">
                               <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">今日 <span class="caret"></span></a>
                               <ul class="dropdown-menu" role="menu">
                                   <li><a href="#">三天内</a></li>
                                   <li><a href="#">一周内</a></li>
                                   <li><a href="#">本月</a></li>
                               </ul>
                           </div>
                       </h5>
                       <div class="flex data-container">
                           <div class="data">
                               <div class="agent agent-addcust"></div>
                               <div class="fr data-box">
                                   <span class="data-title fr">新增客户数</span> <br/>
                                   <span class="realdata">2234</span>
                               </div>
                           </div>
                           <div class="data">
                               <div class="agent agent-addrecord"></div>
                               <div class="fr data-box">
                                   <span class="data-title fr">新增记录数</span> <br/>
                                   <span class="realdata">223</span>
                               </div>
                           </div>
                           <div class="data">
                               <div class="agent agent-deal"></div>
                               <div class="fr data-box">
                                   <span class="data-title fr">成交金额</span> <br/>
                                   <span class="realdata">223</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <!--message-->
               <div class="msg border">
                   <h5>消息提醒 <span>({{msg.length}})</span></h5>
                   <ul class="msg-content">
                       <li v-for="item in msg">
                           <span class="kh-title">[{{item.title}}]</span>
                           <span>{{item.content}}</span>
                           <span class="fr kh-title">{{item.time}}</span>
                       </li>

                   </ul>
               </div>
           </div>
       </div>
       <!--bottom-->
       <div class="flex ">
           <!--queue-->
           <div class="queue margin-right">
               <h5>呼叫列队<span class="fr">当前 <span class="theme-color">5</span> 人排队</span></h5>
               <ul class="msg-content">
                   <li v-for="item in msg">
                       <span class="kh-title">[{{item.title}}]</span>
                       <span>{{item.content}}</span>
                       <span class="fr kh-title">{{item.time}}</span>
                   </li>
               </ul>
           </div>
           <!--pic-->
           <div class="pic">
               <!--title-->
                <h5>xx统计数据
                    <div class="time-choose btn-group">
                        <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">今日 <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">三天内</a></li>
                            <li><a href="#">一周内</a></li>
                            <li><a href="#">本月</a></li>
                        </ul>
                    </div>
                </h5>
               <!--report-->
               <div >
                   <div id="home-report1"></div>
                   <div id="home-report2"></div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    var echarts=require('echarts')
    require('echarts/theme/essos');
    let str1=
        {
            'touxiang':'./src/assets/images/touxiang.png',
            'gonghao':'8001',
            'zhuangtai':'置闲中',
            'xinming':'张三',
            'juese':'呼叫中心用户',
            'zuoxi':'8001',
            'bumen':'电商部',
            'gangwei':'售后服务'
        }
    let str2=[
        {
            'title':'站内消息',
            'content':'通知标题哦通知标题哦通知标题哦',
            'time':'14:20',
            'id':1
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
            'time':'14:20',
            'id': 2
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
            'time':'14:20',
            'id': 3
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
            'time':'14:20',
            'id': 4
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 5
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 6
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 7
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 8
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 9
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 10
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 11
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 12
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 13
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 14
        },
        {
            'title': '待办事项',
            'content': '电话回访xx客户',
                'time':'14:20',
            'id': 15
        }
    ]
    let str3=[
        {
            name : '呼入量',
            type : 'bar',
            data : [2653,1623,2134,123,1234]
        }, {
            name : '呼出量',
            type : 'bar',
            data : [334,323,1234,2345,1234]
        }, {
            name : '接通率',
            type : 'line',
            yAxisIndex : 1,
            data : [222,454,345,346,3422,324]
        } ]
    export default {
        name: 'app',
        data ()
    {
        return {
            userinfo: str1,
            msg:str2,
            chart: null,
            // 初始化图表配置
            opinion: [ '呼入量', '呼出量', '接通率' ],
            opinionData:str3
        }
    },
    methods: {
        drawGraph1(id) {
            this.chart = echarts.init(document.getElementById(id),'essos')
            this.chart.showLoading()
            this.chart.setOption({
                title : {
                    text: '未来一周气温变化',
//                    subtext: '副标题'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['最高气温','最低气温']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series : [
                    {
                        name:'最高气温',
                        type:'line',
                        data:[11, 11, 15, 13, 12, 13, 10],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'最低气温',
                        type:'line',
                        data:[1, -2, 2, 5, 3, 2, 0],
                        markPoint : {
                            data : [
                                {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            })
            this.chart.hideLoading()
        },
        drawGraph2(id) {
            this.chart = echarts.init(document.getElementById(id),'essos')
            this.chart.showLoading()
            this.chart.setOption({
                title : {
                    text: '访问来源',
//                    subtext: '副标题',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            })
            this.chart.hideLoading()
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawGraph1('home-report1')
            this.drawGraph2('home-report2')
        })
    },
    deactivated(){
        this.$destroy(true)
    }
    }
</script>

<style scoped>
    .userinfo-pic span{
        display: inline-block;
        height: 100px;
        line-height: 100px;
        vertical-align: top;
        margin-bottom: 8px;
    }
    .agent-head{
        width: 100px;
    }
    li{
         padding-top: 10px ;
     }
    li:last-child{
        padding-bottom: 10px;
    }
    .dropdown-menu{
        left: auto;
        right: 0;
    }
    .queue,.userinfo,.msg{
        flex:1;
    }
    .call-data{
        flex:2;
    }
    .pic,.top-content {
        flex: 3;
    }
    .realdata{
        min-height: 100px;
        font-size: 26px;
    }
    .kh-title{
        color: #999;
    }
    .msg-content{
        overflow-y:auto;
    }
    .msg ul{
        height: 388px;
    }
    .queue ul{
        height: 310px;
    }
    #home-report1{
        width: 60%;
        height: 300px;
        margin-top: 10px;
        display: inline-block;
    }
    #home-report2{
        width: 39%;
        height: 300px;
        margin-top: 10px;
        display: inline-block;
    }
    .userinfo-pic{
        border-bottom: none;
        padding-left: 40px;
        padding-top: 10px;
    }
    .userinfo-pic span{
        font-size: 18px;
    }
    .user-number{
        font-weight: bold;
        margin-left: 20px;
    }
    .data-container{
        height: 170px;
        line-height: 170px;
    }
    #fancybox-frame{
        height: 100px;
        margin-top: 39px;
    }
    .data-container>div{
        border-right: 1px solid #ededed;
        padding: 20px;
    }
    .data-container>div:last-child{
        border: none;
    }
    .data{
        flex: 1;
    }
    .data>div{
        display: inline-block;
    }
    .data-box{
        line-height: 50px;
    }
    .data-title{
        font-size: 16px;
    }
    .time-choose{
        position: absolute;
        right: 10px;
        bottom: 2px;
    }
</style>