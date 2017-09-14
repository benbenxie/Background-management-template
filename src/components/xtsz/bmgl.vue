<template>
    <div class="flex">
        <!--left-->
        <div class="left border margin-right">
            <h5>部门列表</h5>
            <div class="left-content">
                <h5 class="margin-bottom">
                    <a class="btn btn-sm theme-back"><span class="glyphicon glyphicon-plus"></span> 添加</a>
                    <a class="btn btn-sm btn-default"> XX</a>
                    <a class="btn btn-sm btn-default"> XX</a>
                    <a class="btn btn-sm btn-default"> XX</a>
                    <a class="btn btn-sm btn-default">XX</a>
                </h5>
                <div class="left-list">
                    <table class="table  ">
                        <thead>
                        <tr>
                            <th>部门名称</th>
                            <th>xx名称</th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(data,index) in lists"   >
                            <td>{{data.bumen}}</td>
                            <td>{{data.neirong}}</td>
                            <td>{{data.beizhu}}</td>
                            <td><a class="theme-color">编辑</a> | <a class="theme-color">管理员工</a></td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
        </div>

        <!--right-->
        <div class="right border">
            <h5>员工列表</h5>
            <div class="right-content">
                <div class="no-people border">
                    <div class="agent agent-pro"></div>
                    <div class="pro-content">
                        <span>点击部门列表中某个部门的 "管理员工" 操作，该部门的员工列表将在此显示。</span> <br/>
                        <span>此处可以进行删除员工、编辑员工等操作，如需新增员工，请前往 <a class="theme-color">员工管理</a> 页面。</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pagination from './../pagination.vue'
    let str=[
        {
            'id':'1',
            'bumen':'xx部',
            'neirong':'tech',
            'beizhu':'窝不是黄蓉'

        },
        {
            'id':'1',
            'bumen':'xx部',
            'neirong':'tech',
            'beizhu':'窝不是黄蓉'

        },
        {
            'id':'1',
            'bumen':'xx部',
            'neirong':'tech',
            'beizhu':'窝不是黄蓉'

        },
        {
            'id':'1',
            'bumen':'xx部',
            'neirong':'tech',
            'beizhu':'窝不是黄蓉'

        },
        {
            'id':'1',
            'bumen':'xx部',
            'neirong':'tech',
            'beizhu':'窝不是黄蓉'

        }
    ]
    export default {
        name: 'app',
        data ()
        {
        return {
            total: 130,     // 记录总条数
            display: 10,   // 每页显示条数
            current: 1,   // 当前的页数
            lists:str
        }
        },
        components: {
            'vPagination': pagination
        },
        methods: {
            pagechange:function(currentPage){
                console.log(currentPage);
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据

            }
        }
    }
</script>

<style scoped>
    .left,.right{
        flex: 1;
    }
    .right-content,.left-content{
        padding: 10px;
        min-height: 700px;
    }
    .pro-content{
        display: inline-block;
    }
    .left-btns div{
        display: inline-block;
        width: 5px;
        height: 100%;
    }
    .table{
        border: solid 1px #ededed;
    }
    .table > tbody > tr > td,.table > thead > tr > th{
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
    }
    .no-people{
        padding: 10px;
    }
</style>