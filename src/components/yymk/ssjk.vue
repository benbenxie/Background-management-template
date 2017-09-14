<template>
    <div>
    <!-- 第一行 -->
    <div class="row title">
        <div class="col-sm-6">
            <!--<h2>湖南畅远团队</h2>-->
        </div>
        <div class="col-sm-1 col-xs-4">

        </div>
        <div class="col-sm-1 col-xs-4">
            <div>
                呼入量
            </div>
            <div id="callincount"></div>
        </div>
        <div class="col-sm-1 col-xs-4">
            <div>呼出量</div>
            <div id="calloutcount"></div>
        </div>
        <div class="col-sm-1 col-xs-4">
            <div>转坐席</div>
            <div id="callinagentcount"></div>
        </div>

        <div class="col-sm-1 col-xs-4">
            <div>接听量</div>
            <div id="callanswercount"></div>
        </div>
        <div class="col-sm-1 col-xs-4">
            <div>接通率</div>
            <div id="callanswerrate"></div>
        </div>

    </div>
    <!-- 主体 -->
    <div class="row">
        <!-- 左边 -->
        <div class="col-sm-8">
            <div class="row">
                <div class="col-sm-12">
                    <h5>话务分析</h5>
                </div>
                <div class="col-sm-12">
                    <div id="huawu" style="height: 300px; width: 100%;"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-12">
                        <h5>
                            服务水平
                        </h5>
                    </div>
                    <div class="col-sm-12">
                        <div id="fuwu" style="height: 200px"></div>
                    </div>
                </div>

            </div>

        </div>

        <!-- 右边 -->
        <div class="col-sm-4">
            <div class="row">
                <div class="col-sm-12">
                    <h5>
                        坐席工作量<span style="float: right">在线坐席 4/11</span>
                    </h5>
                </div>
                <div class="col-sm-12">
                    <!-- grid -->
                    <table id="grid-table"
                           style="height: auto; font-size: 1em; font-weight: normal;"></table>
                </div>
            </div>

        </div>
    </div>

    <!-- 底部 -->
    <div class="row">
        <!-- 左侧 -->
        <div class="col-sm-8">
            <div class="row">
                <div class="col-sm-12">
                    <h5>客户满意度</h5>
                </div>
                <div class="col-sm-6">
                    <div id="diaocha" style="height: 200px;"></div>
                </div>
                <div class="col-sm-6">
                    <div id="manyi" style="height: 200px;"></div>
                </div>
            </div>
        </div>
        <!-- 右侧 -->
        <div class="col-sm-4">
            <div class="row">
                <div class="col-sm-12">
                    <h5>关键指标</h5>
                </div>
                <div class="col-sm-12  target">
                    <div class=" target-box">
                        <div class="target-data fl">
                            <!--<h6>平均坐席接听数</h6>-->
                            <!-- <p>上周均值:12个</p> -->
                        </div>
                        <div class="target-number ">
                            <!--<span class="number" id="agentcountavg"></span>个 -->
                            <!-- <i
							class="glyphicon glyphicon-arrow-down"></i> -->
                        </div>
                    </div>

                    <div class=" target-box">
                        <div class="target-data fl">
                            <!--<h6>平均通话时长</h6>-->
                            <!-- <p>上周均值:100秒</p> -->
                        </div>
                        <div class="target-number ">
                            <!--<span class="number" id="calldurationavg"></span>秒 -->
                            <!-- <i
							class="glyphicon glyphicon-arrow-down"></i> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    var echarts=require('echarts')
    require('echarts/theme/essos');
    export default {
        data() {
        return {
            chart: null,
            // 初始化图表配置
            opinion: [ '呼入量', '呼出量', '接通率' ],
            opinionData: [
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
        }
    },
    methods: {

        drawGraph(id) {
            this.chart = echarts.init(document.getElementById(id),'essos')
            this.chart.showLoading()
            this.chart.setOption({
                tooltip : {
                    trigger : 'axis'
                },
                toolbox : {
                    show : true,
                    feature : {
                        mark : {
                            show : true
                        },
                        dataView : {
                            show : true,
                            readOnly : false
                        },
                        magicType : {
                            show : true,
                            type : [ 'line', 'bar' ]
                        },
                        restore : {
                            show : true
                        },
                        saveAsImage : {
                            show : true
                        }
                    }
                },
                calculable : true,
                legend : {
                    data : this.opinion
                },
                xAxis : [ {
                    type : 'category',
                    data : 321
                } ],
                yAxis : [ {
                    type : 'value',
                    name : '',
                    axisLabel : {
                        formatter : 11
                    },
                    textStyle : {
                        fontSize : '10'
                    }
                }, {
                    type : 'value',
                    name : '',
                    axisLabel : {
                        formatter : '11 %'
                    },
                    textStyle : {
                        fontSize : '10'
                    }
                } ],
                series :this.opinionData
            })
            this.chart.hideLoading()
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawGraph('huawu')
        })
    },
    deactivated(){
        this.$destroy(true)
    }
    }

</script>

<style>

</style>