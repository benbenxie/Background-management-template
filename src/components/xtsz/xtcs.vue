<template>
    <div>
        <div class="margin-bottom border">
            <h5>系统参数</h5>
            <div class="border-notop">
                <div class="row panel-body">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <div class="input-group">
                            <span class="input-group-addon">系统名称 :</span>
                            <input type="text" class="form-control" value="JICC呼叫系统" readonly/>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="input-group">
                            <span class="input-group-addon">系统版本 :</span>
                            <input type="text" class="form-control" value="v3.02" readonly/>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </div>
        <!--短信-->
        <div class="margin-bottom border">
            <h5>短信接口</h5>
            <div class="border-notop">
                <div class="row panel-body">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4">
                        <div class="input-group">
                            <span class="input-group-addon">短信接口 :</span>
                            <input type="text" class="form-control" value="" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon">短信SN :</span>
                            <input type="text" class="form-control" value="" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon">短信密码 :</span>
                            <input type="text" class="form-control" value="" />
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <a class="btn btn-sm theme-back">保存</a>
                    </div>
                </div>
            </div>
        </div>
        <!--cti-->
        <div class=" border">
            <h5>CTI接口</h5>
            <div class="border-notop">
                <div class="border-notop">
                    <div class="row panel-body">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-5">
                            <div class="input-group">
                                <span class="input-group-addon">服务器ip :</span>
                                <input type="text" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="input-group">
                                <span class="input-group-addon">端口 :</span>
                                <input type="text" class="form-control" value="" />
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <a class="btn btn-sm theme-back">保存</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data ()
    {
        return {
            msg: 'Hello Vue'
        }
    }
    }
</script>

<style scoped>

</style>