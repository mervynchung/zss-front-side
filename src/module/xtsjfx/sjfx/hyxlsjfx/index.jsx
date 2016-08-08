/*执业资质数据分析*/
module.exports = {
    path: 'jgsjfx/hyxlsjfx(/)',
    breadcrumbName:'机构数据分析/行业学历数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}