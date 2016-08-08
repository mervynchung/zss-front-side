/*测试*/
module.exports =  {
    path: 'xttjbb/hyryqktj',
    breadcrumbName:'行业人员情况统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};
