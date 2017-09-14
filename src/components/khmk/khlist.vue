<template>
    <div>
        <!--1F-->
        <h4 class="body-content-title">客户信息</h4>
        <div class="body-content-form">
            <div class="body-content-input">
                <span class="theme-color">*</span>客户姓名:
                <input type="text" class=" input-sm " name=""  />
            </div>
            <div class="body-content-input">
                <span class="transparent">*</span>客户姓名:
                <input type="text" class="input-sm " name=""  />
            </div>
            <div class="body-content-input">
                <span class="theme-color">*</span>客户姓名:
                <input type="text" class="input-sm " name=""  />
            </div>
            <div class="body-content-input">
                <span class="transparent    ">*</span>客户姓名:
                <input type="text" class="input-sm " name=""  />
            </div>
            <div class="body-content-input">
                <span class="transparent">*</span>客户姓名:
                <input type="text" class="input-sm " name=""  />
            </div>
            <div class="body-content-input">
                <span class="transparent">*</span>客户姓名:
                <input type="text" class="input-sm " name=""  />
            </div>
        </div>
        <div class="body-content-btns">
            <a class="btn btn-sm theme-back">保存</a>
            <a class="btn btn-sm btn-default">取消</a>
        </div>
        <!--2F-->
        <div>
            <h4 class="body-content-title">客户信息</h4>
            <div class="body-content-form">
                <div class="body-content-input">
                    <span class="theme-color">*</span>客户姓名:
                    <input type="text" class=" input-sm " name=""  />
                </div>
                <div class="body-content-input">
                    <span class="transparent">*</span>客户姓名:
                    <input type="text" class="input-sm " name=""  />
                </div>
                <div class="body-content-input">
                    <span class="theme-color">*</span>客户姓名:
                    <input type="text" class="input-sm " name=""  />
                </div>
                <div class="body-content-textarea">
                    <span class="fl"><span class="theme-color">*</span>客户姓名:&nbsp;</span>
                    <textarea name="" cols="76" rows="2"></textarea>
                </div>
            </div>
            <div class="body-content-btns">
                <a class="btn btn-sm theme-back">保存</a>
                <a class="btn btn-sm btn-default">取消</a>
            </div>
        </div>

        <!--3F-->
        <div class="">
            <ul class="nav nav-tabs margin-bottom">
                <li v-for="(tab,index) in tabs" :class="{active:active==index   }">
                    <a @click.prevent="toggle(index ,tab.view)">{{tab.name}}</a>
                </li>

            </ul>
            <component :is="currentView"></component>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('v1', {
        template: "<h5><a class='btn btn-sm theme-back'>添加</a><a class='btn btn-sm btn-default'>批量操作</a></h5>"
    })
    Vue.component('v2', {
        template: "<p>this is v2</p>"
    })
    Vue.component('v3', {
        template: "<p>this is v3</p>"
    })
    export default {
        name: 'khlist',
        data ()
        {
        return {
            active: 0,
            currentView: 'v1',
            tabs:[
                {
                    name:'历史通话',
                    view:'v1'
                },
                {
                    name:'xx',
                    view:'v2'
                },
                {
                    name:'oo',
                    view:'v3'
                }
                ]
        }
        },
    methods: {
        toggle(i, v){
            this.active = i
            this.currentView = v
        }
    }
    }
</script>

<style>

</style>