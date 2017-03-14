/*变更情况统计*/
module.exports = {
    path: 'jggl/swsbgqktj(/)',
    breadcrumbName:'机构管理 / 事务所变更情况统计',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}