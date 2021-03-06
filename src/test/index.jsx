import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/lib/index.css';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const __level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(__level, key, tns[index].children);
    });
};
generateData(z);
console.log(gData)


function loopData(data, callback) {
    const loop = (d, level = 0) => {
        d.forEach((item, index) => {
            const pos = `${level}-${index}`;
            if (item.children) {
                loop(item.children, pos);
            }
            callback(item, index, pos);
        });
    };
    loop(data);
}

function getFilterExpandedKeys(data, expandedKeys) {
    const expandedPosArr = [];
    loopData(data, (item, index, pos) => {
        if (expandedKeys.indexOf(item.key) > -1) {
            expandedPosArr.push(pos);
        }
    });
    const filterExpandedKeys = [];
    loopData(data, (item, index, pos) => {
        expandedPosArr.forEach(p => {
            if ((pos.split('-').length < p.split('-').length
                && p.indexOf(pos) === 0 || pos === p)
                && filterExpandedKeys.indexOf(item.key) === -1) {
                filterExpandedKeys.push(item.key);
            }
        });
    });
    return filterExpandedKeys;
}

const Demo = React.createClass({
    getDefaultProps() {
        return {
            multiple: true,
        };
    },
    getInitialState() {
        return {
            expandedKeys: getFilterExpandedKeys(gData, ['0-0-0', '0-0-1']),
            checkedKeys: ['0-0-0'],
            selectedKeys: [],
        };
    },

    render() {
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.key}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.key} />;
        });
        return (
            <Tree checkable  defaultExpandAll>
                {loop(gData)}
            </Tree>
        );
    },
});

ReactDOM.render(<Demo />, document.getElementById('react-content'));