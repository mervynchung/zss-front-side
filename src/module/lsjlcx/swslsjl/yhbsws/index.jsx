/*已合并事务所*/
module.exports = {
    path: 'lsjlcx/swslsjl/yhbsws(/)',
    breadcrumbName:'历史记录查询 / 事务所历史记录 / 注销历史记录',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}