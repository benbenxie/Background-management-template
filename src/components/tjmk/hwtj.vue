<template>
    <div>
        <div class="top border margin-bottom">
            <h5>查询条件</h5>

            <form action="" class="form-inline">
                <div class="top-content input-group">
                    <label for="dateSearch" class="input-group-addon">通话日期:</label>
                    <input id="dateSearch" class="form-control" type="text" @click="openByDialog" :value="calendar4.display" readonly>
                </div>
                <a class="btn btn-sm theme-back">查询</a>
            </form>

        </div>

        <div class="content">

        </div>

        <!--选择日期-->
        <transition name="fade">
            <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}"
                 v-if="calendar3.show">
                <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value"
                          :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
            </div>
        </transition>

        <transition name="fade">
            <div class="calendar-dialog" v-if="calendar4.show">
                <div class="calendar-dialog-mask" @click="closeByDialog"></div>

                <div class="calendar-dialog-body">
                    <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar"
                              :value="calendar4.value" @select="calendar4.select"></calendar>
                </div>

            </div>
        </transition>
    </div>
</template>

<script>
    import calendar from './../calendar.vue'
    export default {
        name: 'app',
        components: {
            calendar
        },
        data()
    {
        return {
            calendar3: {
                display: "2018/02/16",
                show: false,
                zero: true,
                value: [2018, 2, 16], //默认日期
                lunar: true, //显示农历
                select: (value)=>
        {
            this.calendar3.show = false;
            this.calendar3.value = value;
            this.calendar3.display = value.join("/");
        }
    }
    ,
    calendar4:{
        display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018, 2, 16], [2019, 2, 16]], //默认日期
                lunar:true, //显示农历
                select:(begin, end)=>
        {
            console.log(begin, end)
            this.calendar4.show = false;
            this.calendar4.value = [begin, end];
            this.calendar4.display = begin.join("/") + " ~ " + end.join("/");
        }
    }

    }
    },
    methods:{
        openByDrop(e)
        {
            this.calendar3.show = true;
            this.calendar3.left = e.target.offsetLeft + 19;
            this.calendar3.top = e.target.offsetTop + 70;

            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click", (e)=>
                {
                    this.calendar3.show = false;
                    document.removeEventListener("click", ()=>{
                    },false);
                },false);
        },1000)
        }
    ,
        openByDialog()
        {
            this.calendar4.show = true;
        }
    ,
        closeByDialog()
        {
            this.calendar4.show = false;
        }
    }
    ,
    }
</script>

<style scoped>
    h5{
        border-bottom: solid 1px #ededed;
    }
    .top-content{
        padding: 10px;
    }



    .flex {
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
        flex-flow: row wrap
    }

    .flex > div {
        margin: 10px;
        padding: 20px;
        width: 25%;
        min-width: 300px;
        border: 1px solid #eee;
        border-radius: 2px;
        position: relative;
    }

    .flex > div > span {
        position: absolute;
        left: 0px;
        top: 0px;
        padding: 2px 10px;
        font-size: 10px;
        border-radius: 0 0 2px 0;
        background: #ea6151;
        color: #fff;
    }

    .flex > div > input {
        box-sizing: border-box;
        width: 100%;
        margin-top: 20px;
        border-radius: 2px;
        border: 1px solid #dedede;
        padding: 10px;
        font-size: 16px;
        padding-left: 36px;
        color: #666;
    }

    /*transition*/
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease-in-out;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateY(-10px);

    }

    /*下拉框*/
    .calendar-dropdown {
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
        padding: 20px;
        border: 1px solid #eee;
        border-radius: 2px;
    }

    .calendar-dropdown:before {
        position: absolute;
        left: 30px;
        top: -10px;
        content: "";
        border: 5px solid rgba(0, 0, 0, 0);
        border-bottom-color: #DEDEDE;
    }

    .calendar-dropdown:after {
        position: absolute;
        left: 30px;
        top: -9px;
        content: "";
        border: 5px solid rgba(0, 0, 0, 0);
        border-bottom-color: #fff;
    }

    /*弹出框*/
    .calendar-dialog {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .calendar-dialog-mask {
        background: rgba(255, 255, 255, .5);
        width: 100%;
        height: 100%;
    }

    .calendar-dialog-body {
        background: #fff;
        position: absolute;
        left: 190px;
        top: 310px;
        transform: translate(-50%, -50%);
        padding: 20px;
        border: 1px solid #eee;
        border-radius: 2px;
    }
</style>