<template>
    <div >
        <div class="select margin-bottom">
            <div class="">
                短信模版:
                <select name="" @change="choose($event)">
                    <option v-for="item in model" :value="item.value">
                        {{item.name}}
                    </option>
                </select>
            </div>
            <div>
                <label for="phone">
                    手机号:
                </label>
                <input type="number" id='phone'/>
            </div>
            <a class="btn btn-sm theme-back">发送</a>
        </div>
        <div class="content">
            <textarea name="" id="message" ></textarea>
        </div>
    </div>
</template>

<script>
    let model=[
        {
            value:1,
            name:'模版1',
            content:'尊敬的罗女士您好！欢迎您使用城际快线出行！您3月12日13:00平江至长沙的行程已预约成功，司机会在出发时间半小时之前联系您，请您保持手机通畅，您的订单号为：1489230157250006，请在支付时出示给驾驶员核对！您也可以下载app参与线上活动，首单立减20元！如有疑问可致电客服热线96512，祝您出行愉快！'
        },
        {
            value:2,
            name:'模版2',
            content:'尊敬的钱先生您好！离星沙最近的办理网点地址是：星沙中南汽车世界A区07号，联系方式：15274918454。如有疑问可致电客服热线96512，祝您生活愉快！'
        },
        {
            value:3,
            name:"模版3",
            content:'尊敬的刘先生您好！ETC查询码可查看，首次办理安装单的右下角处。'
        }
    ]
    export default {
        name: 'dxfs',
        data ()
    {
        return {
            model
        }
    },
    mounted(){
        message.value=this.model[0].content
    },
    methods:{
        choose(e){
            let val=e.currentTarget.value
            for( var i in this.model){
                if(this.model[i].value==val){
                    message.value=this.model[i].content
                }
            }
        }
    }
    }

</script>

<style scoped>
    .select>div{
        display: inline-block;
    }
    .content textarea{
        resize:none;
        width: 500px;
        height: 200px;
    }

</style>