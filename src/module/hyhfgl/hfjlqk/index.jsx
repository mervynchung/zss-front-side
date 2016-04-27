module.exports = {
    path: 'hyhfgl/hfjlqk(/)',
     ignoreScrollBehavior:true,
    breadcrumbName:'会费缴纳情况',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
}