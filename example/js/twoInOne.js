/*
TWO IN ONE
https://github.com/Macylion/TwoInOne---Image-Splitter
by Maciej Kubus (c) 2018
*/

var tio_i = 0;
var App = {
	add: function(parent, img1, img2, pos, img3){						
		$(parent).append($('<div id="tio'+tio_i+'" class="tio-ic"></div>'));
		$('#tio'+tio_i).append('<div name="'+tio_i+'" class="tio-stick"></div>');
		$('#tio'+tio_i).append('<div class="tio-img" style="background-image: url('+"'"+img1+"'"+');"></div>');
		$('#tio'+tio_i).append('<div class="tio-img tio-top" style="background-image: url('+"'"+img2+"'"+');"></div>');
		if(img3){
			$('#tio'+tio_i+' .tio-stick').append('<img class="tio-spacer" src="'+img3+'">');
		}
		$('#tio'+tio_i+' .tio-stick').draggable({
			axis: "x",
			containment: "parent",
			drag: function(){
				$('#tio'+$(this).attr('name')+' .tio-img.tio-top').css('left', $('#tio'+$(this).attr('name')+' .tio-stick').position().left+'px');
				$('#tio'+$(this).attr('name')+' .tio-img.tio-top').css('background-position', '-'+$('#tio'+$(this).attr('name')+' .tio-stick').position().left+'px, 0');
			},
			stop: function(){
				$('#tio'+$(this).attr('name')+' .tio-img.tio-top').css('left', $('#tio'+$(this).attr('name')+' .tio-stick').position().left+'px');
				$('#tio'+$(this).attr('name')+' .tio-img.tio-top').css('background-position', '-'+$('#tio'+$(this).attr('name')+' .tio-stick').position().left+'px, 0');
			},
		});
		if(pos){
			if(pos === "center"){	
				$('#tio'+tio_i+' .tio-stick').css('left', $('#tio'+tio_i).width()/2+'px');
				$('#tio'+tio_i+' .tio-img.tio-top').css('left', $('#tio'+tio_i).width()/2+'px');
				$('#tio'+tio_i+' .tio-img.tio-top').css('background-position', '-'+($('#tio'+tio_i).width()/2)+'px, 0');
			}
			else if(pos === "right"){	
				$('#tio'+tio_i+' .tio-stick').css('left', $('#tio'+tio_i).width()-8+'px');
				$('#tio'+tio_i+' .tio-img.tio-top').css('left', $('#tio'+tio_i).width()-8+'px');
				$('#tio'+tio_i+' .tio-img.tio-top').css('background-position', '-'+($('#tio'+tio_i).width()-8)+'px, 0');
			}
		}
		tio_i++;
	},
}