var navButton = document.getElementById('nav-button');
var navigation = document.getElementById('navigation');
var openClass = 'nav-open';
var openRegexp = new RegExp('\\b' + openClass + '\\b');

navButton.addEventListener('click', function () {
    var newClassName = '';

    if (openRegexp.test(navigation.className)) {
        newClassName = navigation.className.replace(openRegexp, '');
    }
    else {
        newClassName += navigation.className + ' ' + openClass;
    }

    navigation.className = newClassName.trim().replace(/\s\s/g, ' ');
});