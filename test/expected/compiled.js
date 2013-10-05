(function(namespace) {

namespace.template_1 = function() {
var template='<ul>\n<% for ( var i = 0; i < users.length; i++ ) { %>\n	<li><a href="<%=users[i].url%>"><%=users[i].name%></a></li>\n<% } %>\n</ul>';
(this.template_1 = _.template(template))();
};

namespace.template_2 = function() {
var template='<div>\n  <% for ( var i = 0; i < images.length; i++ ) { %>\n    <div>\n    	<img src="<%= images[i].url %>" alt="<%= images[i].alt %>" />\n    </div>\n  <% } %>\n</div>';
(this.template_2 = _.template(template))();
};

})(window.CustomNamespace = window.CustomNamespace || {});