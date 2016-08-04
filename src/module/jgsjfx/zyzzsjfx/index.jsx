/*执业资质数据分析*/
module.exports = {
    path: 'jgsjfx/zyzzsjfx(/)',
    breadcrumbName:'机构数据分析/执业资质数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}