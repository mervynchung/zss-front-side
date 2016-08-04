module.exports = {
    path: '/hyhf/fpdy(/)',
    ignoreScrollBehavior:true,
    breadcrumbName:'发票打印',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}