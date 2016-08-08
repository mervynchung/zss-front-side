module.exports =  {
    path: '/jgsjfx/hynlsjfx',
    breadcrumbName:'行业年龄数据分析',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
        })
    }
};

