(function(window) {

	window.Templates = {

		subfixtures: {
			
			template_3: function(obj) {
				obj || (obj = {});
				var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
				function print() { __p += __j.call(arguments, '') }
				with (obj) {
				__p += '<ul>\n';
				 for ( var i = 0; i < users.length; i++ ) { ;
				__p += '\n\t<li><a href="' +
				((__t = (users[i].url)) == null ? '' : __t) +
				'">' +
				((__t = (users[i].name)) == null ? '' : __t) +
				'</a></li>\n';
				 } ;
				__p += '\n</ul>';
				
				}
				return __p
			},

			template_4: function(obj) {
				obj || (obj = {});
				var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
				function print() { __p += __j.call(arguments, '') }
				with (obj) {
				__p += '<div>\n  ';
				 for ( var i = 0; i < images.length; i++ ) { ;
				__p += '\n    <div>\n    \t<img src="' +
				((__t = ( images[i].url )) == null ? '' : __t) +
				'" alt="' +
				((__t = ( images[i].alt )) == null ? '' : __t) +
				'" />\n    </div>\n  ';
				 } ;
				__p += '\n</div>';
				
				}
				return __p
			}

		}

	}

})(window);