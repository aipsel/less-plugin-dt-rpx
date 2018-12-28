module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('rpx', function (size) {
            return size.value + 'rpx';
        });
    },
};
