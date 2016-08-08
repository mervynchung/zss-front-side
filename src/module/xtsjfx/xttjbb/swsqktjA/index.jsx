/*测试*/
module.exports =  {
    path: 'xttjbb/swsqktjA',
    breadcrumbName:'事务所情况统计A',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};
