module.exports = {
    /**
     * 通过树节点定义数组生成JSON对象，该数组要先按PID进行AESC排序
     * @param arr {Array}
     * @returns {Array}
     */
    getTreeData(arr) {
        let key=0;
        var root = {text: null};
        if (arr.length > 0) {
            var objMap = {};
            root.items = [];
            arr.forEach(function (item) {
                var node = {
                    id: item.id,
                    pid: item.pid,
                    name: item.name,
                    href: item.href,
                    orderNo: item.orderNo,
                    path: item.path,
                    key:key++
                };
                objMap[item.id] = node;
                if (item.pid == 0) {
                    root.items.push(node);
                } else {
                    var parent = objMap[item.pid];
                    if (parent["children"]) {
                        parent["children"].push(node);
                    } else {
                        parent["children"] = [];
                        parent["children"].push(node);
                    }
                }
            });
        }
        return root.items;
    }

}
