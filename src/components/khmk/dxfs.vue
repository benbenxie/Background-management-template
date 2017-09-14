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
            content:'模版1内容'
        },
        {
            value:2,
            name:'模版2',
            content:'模版2内容'
        },
        {
            value:3,
            name:"模版3",
            content:'模版3内容'
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
