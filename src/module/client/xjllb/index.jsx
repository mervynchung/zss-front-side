/*利润表*/
module.exports = {
    path: 'add/xjllb(/)',
    breadcrumbName:'利润分配表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}