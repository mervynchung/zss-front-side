var input = ["Ded","Fred-Jim-Bob", "Fred-Jim", "Fred-Thomas-Rob"];
function populate(tree, path) {
    var node = {};
    var label = path.shift();
    var p_node = tree[tree.length - 1] || {};
    if (!tree.length || p_node.label != label) {
        node.label = label;
        node.children = [];
        if (path.length) {
            populate(node.children, path);
        }
        tree.push(node);
    } else if (path.length) {
        populate(p_node.children, path);
    }
}

console.log(JSON.stringify(output))