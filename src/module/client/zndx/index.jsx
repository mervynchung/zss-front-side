/*站内短信*/
module.exports = {
    path: '/client/zndx(/)',
    breadcrumbName:'站内短信',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}