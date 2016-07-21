/*模块设置功能*/
module.exports = {
    path: 'xtsjfx/jgnjsjfxb(/)',
    breadcrumbName:'机构年检数据分析表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}