(function(window) {

	window.Templates = {

		subfixtures: {
			
			template_3: function(obj) {
				var template='<ul>\n<% for ( var i = 0; i < users.length; i++ ) { %>\n	<li><a href="<%=users[i].url%>"><%=users[i].name%></a></li>\n<% } %>\n</ul>';
				return (this.template_3 = _.template(template))(obj);
			},

			template_4: function(obj) {
				var template='<div>\n  <% for ( var i = 0; i < images.length; i++ ) { %>\n    <div>\n    	<img src="<%= images[i].url %>" alt="<%= images[i].alt %>" />\n    </div>\n  <% } %>\n</div>';
				return (this.template_4 = _.template(template))(obj);
			}

		}

	}

})(window);