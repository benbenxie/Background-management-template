<template>
   <div>
       <div class="search-box">
           <h5 class="margin-bottom">信息筛选</h5>
           <div class="border-notop">
               <form class="form-inline ">
                   <div class="search-container">
                       <div class="form-group ">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                   </div>
                   <div class="search-container">
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input class="form-control" type="text" @click="openByDialog" :value="calendar4.display" readonly>
                       </div>
                       <div class="form-group">
                           <label for="">搜索名称 :</label>
                           <input type="text" class="form-control"/>
                       </div>
                       <div class="form-group"></div>
                   </div>

               </form>
           </div>
           <div class="border-notop clear margin-bottom">
               <a class="fr btn btn-sm btn-default reset-btn">重置</a>
               <a class="fr btn btn-sm theme-back search-btn">搜索</a>
           </div>
           </form>
       </div>

        <div class="content">
            <div class="all-class margin-right border">
                <h5>所有知识分类</h5>
                <div class="tree-menu border-notop">
                    <ul v-for="menuItem in theModel">
                        <my-tree :model="menuItem"></my-tree>
                    </ul>
                </div>
            </div>
            <div class="class-content border">
                <h5>
                    <a class="btn btn-sm theme-back"> <span class="glyphicon glyphicon-plus"></span> 新增</a>
                    <a class="btn btn-sm btn-default">XX</a>
                    <a class="btn btn-sm btn-default">XX</a>
                    <a class="btn btn-sm btn-default">XX</a>
                    <a class="btn btn-sm btn-default">XX</a>
                </h5>
            </div>
        </div>
       <!--选择日期-->
       <transition name="fade">
           <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
               <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
           </div>
       </transition>

       <transition name="fade">
           <div class="calendar-dialog" v-if="calendar4.show">
               <div class="calendar-dialog-mask" @click="closeByDialog"></div>

               <div class="calendar-dialog-body">
                   <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></calendar>
               </div>

           </div>
       </transition>
   </div>
</template>

<script>
    let myData = [
        {
            'id': '1',
            'menuName': '一级菜单',
            'menuCode': '10',
            'children': [
                {
                    'menuName': '二级菜单',
                    'menuCode': '11'
                },
                {
                    'menuName': '二级菜单',
                    'menuCode': '12',
                    'children': [
                        {
                            'menuName': '三级菜单',
                            'menuCode': '121'
                        },
                        {
                            'menuName': '三级菜单',
                            'menuCode': '122'
                        },
                        {
                            'menuName': '三级菜单',
                            'menuCode': '123'
                        },
                        {
                            'menuName': '三级菜单',
                            'menuCode': '124'
                        },
                        {
                            'menuName': '三级菜单',
                            'menuCode': '124'
                        }
                    ]
                },
                {
                    'menuName': '二级菜单',
                    'menuCode': '13'
                }
            ]
        },
        {
            'id': '2',
            'menuName': '一级菜单',
            'menuCode': ''
        },
        {
            'id': '3',
            'menuName': '一级菜单',
            'menuCode': '30',
            'children': [
                {
                    'menuName': '二级菜单',
                    'menuCode': '31'
                },
                {
                    'menuName': '二级菜单',
                    'menuCode': '32',
                    'children': []
                }
            ]
        },
        {
            'id': '4',
            'menuName': '一级菜单',
            'menuCode': '',
            'children': []
        }
    ];
    import calendar from './../calendar.vue'
    import myTree from './../treeMenu.vue'
    export default {
        name: 'app',
        components: {
            calendar,
            myTree
        },
        data(){
        return {
            theModel: myData,
    calendar3:{
        display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
            this.calendar3.show=false;
            this.calendar3.value=value;
            this.calendar3.display=value.join("/");
        }
    },
    calendar4:{
        display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
            console.log(begin,end)
            this.calendar4.show=false;
            this.calendar4.value=[begin,end];
            this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
        }
    },
    }
    },
    methods:{
        openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;

            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        },
        closeByDialog(){
            this.calendar4.show=false;
        }
    }
    }

</script>

<style scoped>
    .form-group{
        flex: 1;
        margin-bottom: 10px;
        text-align: center;
    }
    .reset-btn{
        margin:10px 20px 10px 10px;
    }
    .search-btn{
        margin-top: 10px;
    }
    .search-container{
        display: flex;
        display: -webkit-flex;
    }
    .content{
        display: -webkit-flex;
        display: flex;
    }
    .all-class{
        flex: 2;
    }
    .class-content{
        flex: 9;
    }
    .tree-menu>ul{
        padding-left: 10px;
    }

    .flex{
        box-sizing: border-box;

        display: -webkit-box;
        -webkit-box-pack: start;
        -webkit-box-align: start;

        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: top;

        display: flex;
        justify-content: space-between;
        align-items: top;
        flex-flow:row wrap
    }
    .flex>div{
        margin:10px;
        padding:20px;
        width:25%;
        min-width:300px;
        border: 1px solid #eee;
        border-radius: 2px;
        position: relative;
    }
    .flex>div>span{
        position: absolute;
        left:0px;
        top:0px;
        padding:2px 10px;
        font-size:10px;
        border-radius:0 0 2px 0;
        background:#ea6151;
        color:#fff;
    }
    .flex>div>input{
        box-sizing: border-box;
        width:100%;
        margin-top:20px;
        border-radius: 2px;
        border:1px solid #dedede;
        padding:10px;
        font-size: 16px;
        padding-left: 36px;
        color:#666;
    }

    /*transition*/
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease-in-out;
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
        transform: translateY(-10px);

    }

    /*下拉框*/
    .calendar-dropdown{
        background: #fff;
        position: absolute;
        left:0;
        top:0;
        padding:20px;
        border: 1px solid #eee;
        border-radius: 2px;
    }
    .calendar-dropdown:before {
        position: absolute;
        left:30px;
        top: -10px;
        content: "";
        border:5px solid rgba(0, 0, 0, 0);
        border-bottom-color: #DEDEDE;
    }
    .calendar-dropdown:after {
        position: absolute;
        left:30px;
        top: -9px;
        content: "";
        border:5px solid rgba(0, 0, 0, 0);
        border-bottom-color: #fff;
    }

    /*弹出框*/
    .calendar-dialog{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
    }

    .calendar-dialog-mask{
        background:rgba(255,255,255,.5);
        width:100%;
        height:100%;
    }

    .calendar-dialog-body{
        background: #fff;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        padding:20px;
        border: 1px solid #eee;
        border-radius: 2px;
    }
</style>