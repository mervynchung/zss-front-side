/*利润表*/
module.exports = {
    path: 'add/zcfzb(/)',
    breadcrumbName:'资产负债表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}