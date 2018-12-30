//
// Copyright (c) 2017 北京大愚智能科技有限公司
//

function toRpx(node) {
    if (Array.isArray(node.value)) {
        return node.value.map(toRpx).join(' ');
    } else {
        if (node.unit && node.unit.backupUnit) {
            return node.value + node.unit.backupUnit;
        } else {
            return node.value + 'rpx';
        }
    }
}

module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('rpx', toRpx);
    },
};
