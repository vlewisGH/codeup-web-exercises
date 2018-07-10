"use strict";

$(document).ready(function(){
    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];
    $('#add-names-btn').click(function() {
        $('#names-list').append('<ul>');
        people.forEach(function (person) {
           $('<li>'+person.name+'</li>').css('color',person.favColor).appendTo('#names-list');
        });
        $('#names-list').append('</ul>');
    });
});