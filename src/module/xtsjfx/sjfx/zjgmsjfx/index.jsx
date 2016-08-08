/*资金规模数据分析*/
module.exports = {
    path: 'jgsjfx/zjgmsjfx(/)',
    breadcrumbName:'机构数据分析/资金规模数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            
        })
    }
}