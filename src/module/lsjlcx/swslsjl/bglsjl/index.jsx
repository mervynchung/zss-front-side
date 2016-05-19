/*变更历史记录*/
module.exports = {
    path: 'lsjlcx/swslsjl/bglsjl(/)',
    breadcrumbName:'历史记录查询 / 事务所历史记录 / 变更历史记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}