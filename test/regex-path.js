console.log("a".match(/^[\S]+$/));
console.log(" ".match(/^[\S]+$/));

var a = /^(\/?|)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;