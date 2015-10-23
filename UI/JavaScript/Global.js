require.config({
    baseUrl: '/guidelines/UI/JavaScript',
    paths: {
        jquery: 'Vendor/jquery-1.11.2.min',
        'jquery-easing': 'Vendor/jquery.easing.1.3',
        'snap': 'Vendor/snap.svg-min',
        'svg-icons': 'Vendor/svgicons'
    },
    shim: {
        'jquery-easing': ['jquery'],
        'svg-icons': ['snap']
    }
});

require(["Components/Navigation"], function (navigation) {
    navigation.init();
});