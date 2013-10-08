(function(window) {

	window.CustomNamespace = {

		template_1: function(obj){
			var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
			with(obj||{}){
			__p+='<ul>\n';
			 for ( var i = 0; i < users.length; i++ ) { 
			__p+='\n\t<li><a href="'+
			((__t=(users[i].url))==null?'':__t)+
			'">'+
			((__t=(users[i].name))==null?'':__t)+
			'</a></li>\n';
			 } 
			__p+='\n</ul>';
			}
			return __p;
		},

		fixtures: {
			
			template_1: function(obj){
				var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
				with(obj||{}){
				__p+='<ul>\n';
				 for ( var i = 0; i < users.length; i++ ) { 
				__p+='\n\t<li><a href="'+
				((__t=(users[i].url))==null?'':__t)+
				'">'+
				((__t=(users[i].name))==null?'':__t)+
				'</a></li>\n';
				 } 
				__p+='\n</ul>';
				}
				return __p;
			},

			template_2: function(obj){
				var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
				with(obj||{}){
				__p+='<div>\n  ';
				 for ( var i = 0; i < images.length; i++ ) { 
				__p+='\n    <div>\n    \t<img src="'+
				((__t=( images[i].url ))==null?'':__t)+
				'" alt="'+
				((__t=( images[i].alt ))==null?'':__t)+
				'" />\n    </div>\n  ';
				 } 
				__p+='\n</div>';
				}
				return __p;
			},

		},

	}

})(window);