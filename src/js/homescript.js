var menu = document.getElementById('menu');
var open = document.getElementById('open');
var burger = document.getElementById('burger');
var nav = document.getElementById('nav');
var sidebar = document.getElementById('sidebar');

var changeBurgerIds = ['hajime','feed', 'roleplay', 'portfolio', 'skills', 'about'];

var scrollIds = ['pastry', 'hajime', 'feed', 'roleplay', 'portfolio', 'skills'];

open.addEventListener('click', function() {
    menu.classList.toggle('is-open');

});

changeBurgerIds.forEach(function(id) {
    var element = document.getElementById(id);

    var waypoint = new Waypoint({
        element: element,
        handler: function(direction) {
          burger.classList.toggle('is-white');
          nav.classList.toggle('nav-is-white');
        },
        offset: 40
    });
});


changeBurgerIds.forEach(function(id) {
    var element = document.getElementById(id);

    var waypoint = new Waypoint({
        element: element,
        handler: function(direction) {
          sidebar.classList.toggle('sidebar-change');
        },
        offset: 600
    });
});



scrollIds.forEach(function(id) {
    var element = document.getElementById(id);

    var waypoint = new Waypoint({
        element: element,
        handler: function(direction) {
          element.classList.toggle('is-scrolled');
        },
        offset: '60%'
    });
});


var element = document.getElementById('about');
var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
        element.classList.toggle('is-scrolled');
    },
    offset: '60%'
});




