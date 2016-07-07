/*利润表*/
module.exports = {
    path: 'cwbb/lrb(/)',
    breadcrumbName:'利润表',//面包屑名字是指左侧栏目的名字
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./component'))
            // 该./component是指lrb目录下的component.jsx
        })
    }
}