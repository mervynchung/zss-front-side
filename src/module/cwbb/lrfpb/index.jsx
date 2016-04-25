module.exports = {
    path: 'cwbb/lrfpb(/)',
     ignoreScrollBehavior:true,
    breadcrumbName:'利润分配表',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}