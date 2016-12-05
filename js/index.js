$(function(){
	//获取卡片
	var cards = $('.card').toArray();
	//获取activeIndex
	var activeIndex = Math.floor($(cards).length/2);

	var active, next;

	$("#arrow-left").on('click', function(){
		//判断activeIndex是否为卡片的最后一个
		if(activeIndex < $(cards).length -1){
			//active为当前card
			active = $(cards[activeIndex]);
			//判断activeIndex是否在左侧
			if(activeIndex < Math.floor($(cards).length/2)){
				var leftCards = $('.left').toArray();
				leftCards.reverse();
				for(var i=0; i<leftCards.length; i++){
					$(leftCards[i]).removeClass('L'+(i+1)).addClass('L'+(i+2));
				}
			}
			//active向左滑动
			active.addClass('slideLeft').addClass('left').addClass('L1');
			active.removeClass('slideLeft');

			//下一个子节点移动到中间
			next = $(cards[activeIndex+1]);
			next.removeClass('right').removeClass('R1');
			//判断activeIndex是否在右侧
			if(activeIndex >= Math.floor($(cards).length/2)){
				var rightCards = $('.right').toArray();
				for(var i=0; i<rightCards.length; i++){
					$(rightCards[i]).removeClass('R'+(i+2)).addClass('R'+(i+1))
				}
			}
			active.removeClass('active');
			next.addClass('active');
			activeIndex++;

			
		}
	});

	$("#arrow-right").on('click', function(){
		if(activeIndex > 0){
			active = $(cards[activeIndex]);
			//
			if(activeIndex > Math.floor($(cards).length/2)){
				var rightCards = $('.right').toArray();
				for(var i=0; i<rightCards.length; i++){
					$(rightCards[i]).removeClass('R'+(i+1)).addClass('R'+(i+2));
				}
			}

	    	active.addClass('slideRight').addClass('right').addClass('R1');
	    	active.removeClass('slideRight');

	    	next = $(cards[activeIndex-1]);
	    	next.removeClass('left').removeClass('L1');
	    	if(activeIndex <= Math.floor($(cards).length/2)){
	    		var leftCards = $('.left').toArray();
	    		leftCards.reverse();
	    		for(var i=0; i<leftCards.length; i++){
	    			$(leftCards[i]).removeClass('L'+(i+2)).addClass('L'+(i+1));
	    		}
	    	}

	    	active.removeClass('active');
	    	next.addClass('active');
	    	activeIndex--;
		}
	})

})