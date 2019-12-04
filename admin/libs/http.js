// 闭包实现沙箱模式
(function (w) {
    // 基地址
    var baseURL = 'http://localhost:8080/api/v1';
    // 利用字符串拼接实现完整的网络路径
    var BigNew = {
        baseURL: baseURL,//基地址
        user_login: baseURL + '/admin/user/login',//用户登录
        user_info:baseURL + '/admin/user/detail',// 用户信息
        user_edit:baseURL + '/admin/user/edit',// 用户编辑信息
    };
    // 暴露接口
    w.BigNew = BigNew;
})(window);