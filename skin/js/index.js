// JavaScript Document


$(function () {

    //案例详细页效果
    var iW = $('.img_scroll li').width();
    var iSz = $('.img_scroll li').size();
    var ii = 0;
    var time = 0;
    var iMax = (iSz - 1) * 100 - 1;
    $('.img_scroll').wrap('<div class="img_wrap" style="position:relative; height:432px;z-index:1; width:' + iW * iSz + 'px"></div>');
    $('.img_scroll').width(iW * iSz);

    img_doplay();
    function img_doplay() {
        $('.img_scroll').stop(true, true).animate({ marginLeft: ii * 10 }, 10);
    };
    $(' .prev3').hover(function () {
        $(this).animate({ opacity: 1.0 }, 500);
        time = setInterval(function () { if (ii >= (-iMax)) { ii-- }; img_doplay(); }, 10);
    }, function () {
        clearTimeout(time);
        $(this).animate({ opacity: 0.1 }, 500);
    });


    $(' .next3').hover(function () {
        $(this).animate({ opacity: 1.0 }, 500);
        time = setInterval(function () { if (ii < 0) { ii++ }; img_doplay(); }, 10);
    }, function () {
        clearTimeout(time);
        $(this).animate({ opacity: 0.1 }, 500);
    });
    /*$('.prev3,.next3').mouseout(function () {
    clearTimeout(time);
    })*/

    /* $('.ws_d_img').mouseover(function () {
    $(this).find(".prev3,.next3").show();
    })
    $('.ws_d_img').mouseout(function () {
    $(this).find(".prev3,.next3").hide();
    })*/


    //var hw = $(window).innerheight();
    var hw = window.innerheight;
    var hheader = $(".header").outerHeight(true);
    var hfoot = $(".foot").outerHeight(true);
    var hwrap = $(".wrap").outerHeight(true);
    if (hwrap < hw) {
        $(".main").height(hw - hheader - hfoot);
    }

    //首页
    $('.nav li:last').find("a").css("border", "none");
    //jQuery('.banner').slide({ mainCell: ".bd", autoPlay: true,effect:"leftLoop", interTime: 5000,delayTime:1400,trigger:"click"});
    jQuery('.scl_tcon').slide({ mainCell: ".bd", autoPlay: true, effect: "topLoop", interTime: 6000 });


	/*首页切换效果*/
	var inter;
	var windex=0;
	var bsize=$('.banner .bd li').size();
	$('.banner .bd li:first').show();
	$('.banner .hd li:first').addClass("on");
	$(".banner .hd li").click(function(){
		windex=$(".banner .hd li").index(this);
		$('.banner .bd').find('li').fadeOut(2000);
		$('.banner .bd').find('li').eq(windex).fadeIn(1000);
		clearInterval(inter);
		inter= setInterval(doplay,4000);
		$('.banner .hd li').removeClass("on");
		$('.banner .hd li').eq(windex).addClass("on");
	})
	$('.banner .bd li').mouseover(function(){
		clearInterval(inter);
		})
	$('.banner .bd li').mouseleave(function(){
		inter= setInterval(doplay,4000);
		})
	function doplay(){
		windex++;
		$('.banner .bd').find('li').fadeOut(2000);
		$('.banner .bd').find('li').eq(windex).fadeIn(1000);
		$('.banner .hd li').removeClass("on");
		$('.banner .hd li').eq(windex).addClass("on");
		if(windex>=bsize){
		windex=0;
		$('.banner .bd').find('li').fadeOut(2000);
		$('.banner .bd').find('li').eq(windex).fadeIn(1000);
		$('.banner .hd li').removeClass("on");
		$('.banner .hd li').eq(windex).addClass("on");
		
		}
	}
	
	
	function tit(){
		inter= setInterval(doplay,4000);
		}
	tit();
	
	/*首页切换效果*/
	



	
		
    if ($('.vdo_ctl').length > 0) {
        var qjy = $(".bd2 li").size();
        jQuery('.vdo_ctl').slide({ mainCell: ".bd2", effect: "leftLoop", vis: 3, prevCell: ".prev2", nextCell: ".next2", scroll: 3 });
        $(".bd2 li").eq(qjy).addClass("active");
    }

    //HR列表
    $('.hr li:first').find("h2").addClass("active").next(".hr_con").show();
    $('.hr .ht_tit').click(function () {
        if ($(this).next(".hr_con").is(":hidden")) {
            $(this).addClass("active")
			.next(".hr_con").show();
        }
        else {
            $(this).removeClass("active")
			.next(".hr_con").hide();
        }
    })
    $('.ind_list li:last').css("border", "none");




    //缩略图左右切换效果
    var iW2 = $('.thumbnail ul li').outerWidth(true);
    var iSz2 = $('.thumbnail ul li').size();
    var ii2 = 0;
    var time2 = 0;
    var iMax2 = (iSz2 / 4 - 1) * 100 + 9;
    $('.thumbnail ul').wrap('<div class="img_wrap" style="position:relative; width:' + iW2 * iSz2 + 'px"></div>');
    $('.thumbnail ul').width(iW2 * iSz2);

    li_doplay();
    function li_doplay() {
        $('.thumbnail ul').stop(true, true).animate({ marginLeft: ii2 * 10 }, 40);
    }
    $('.prev4').mouseover(function () {
        time2 = setInterval(function () { if (parseInt($(".thumbnail ul").css("margin-left")) > 1040 - (iSz2) * iW2) { ii2-- }; li_doplay(); }, 40);
    })
    $('.next4').mouseover(function () {
        time2 = setInterval(function () { if (ii2 < 0) { ii2++ }; li_doplay(); }, 40);
    })
    $('.prev4,.next4').mouseout(function () {
        clearTimeout(time2);
    })
    $('.vdo_ctl li').click(function () {

        $(this).addClass("active").siblings().removeClass("active");

    })

    //m_ul鼠标效果
    $('.m_ul li img').mouseover(function () {
        var ms_src1 = $(this).attr("src");
        var ms_src2 = $(this).next('.hdPartner').attr("src");
        $(this).attr("src", ms_src2).next('.hdPartner').attr("src", ms_src1);
    })
    $('.m_ul li img').mouseout(function () {
        var ms_src1 = $(this).attr("src");
        var ms_src2 = $(this).next('.hdPartner').attr("src");
        $(this).attr("src", ms_src2).next('.hdPartner').attr("src", ms_src1);
    })

    //文字滚动
    var sH = $('.scroll_txt').height();
    var oH = $('.stxt_con').height();
    var stSZ = Math.ceil(oH / 100);
    $(".scpv").click(function () {
        if (parseInt($(".stxt_con").css("margin-top")) < 0) {
            $(".stxt_con").stop(true, true).animate({ marginTop: "+=" + 50 })
        }
    });

    $(".scnt").click(function () {
        if (parseInt($(".stxt_con").css("margin-top")) > 240 - stSZ * 100)
            $(".stxt_con").stop(true, true).animate({ marginTop: "-=" + 50 })
    });
	if(oH<=228){
		$('.scpv,.scnt').hide();
		}
    /*20130807*/
    /* $('.srh_btn').click(function () {
        
		$(this).hide();
        $('.srh_con').css({"overflow":"hidden","width":10}).animate({width:204});
		$('.srh_con').find('.srh_txt').focus();
    })
	$('.srh_txt').focus(function(){
		$('.srh_btn').hide();
		});
	$('.srh_con').find('.srh_txt').blur(function(){
		$('.srh_con').animate({width:0});
		setInterval(function(){$('.srh_btn').show();},400)
		}) */
	/**/
	/*小屏幕的首页*/
	var wdnH =$(window).height();
	if(wdnH<=630){
		$('.ix_wrap').css({
			"padding-top":10+"px",
			"background-position":"0 "+"-33px"
			});
		$('.ix_footer').css({
			"margin-top":10+"px"
			});
		}
	window.onresize = function(){
		var wdnH =$(window).height();
	if(wdnH<=630){
		$('.ix_wrap').css({
			"padding-top":10+"px",
			"background-position":"0 "+"-33px"
			});
		$('.ix_footer').css({
			"margin-top":10+"px"
			});
		}
		}
	/**/

	$('.srh_btn').click(function(){
    $(".srh_txt").val($("#hdSearchKey").val());
		$('.srh_con').animate({
			width:204	
		});	
		$('.searchBox').animate({width:204});
		$(this).hide();
		$('.srh_con').find('.srh_txt').focus();
	});
	


	$(".s_btn").mousedown( function () { SubKey();} );
	$('.srh_con').find('.srh_txt').blur(function(){

    $("#hdSearchKey").val( $(".srh_txt").val());
     $(".srh_txt").val("");
     $('.srh_con').animate({width:0},function(){$('.srh_btn').show();});
	 $('.searchBox').animate({width:17});
    })
	
	
	$('.m_ul2 li').mouseover(function(){
		$(this).find(".mu_ov").show();
		})
	$('.m_ul2 li').mouseleave(function(){
		$(this).find(".mu_ov").hide();
		})

	
	$('.main_pager div a:first').css("margin-left","0");
	$('.website a:first').css("margin-left","0");
	/*20130828*/
	$('.web_list li:last').css("border-bottom","none");
	jQuery('.ind_list').slide({mainCell:".bd",effect:"topLoop",vis:2,prevCell:".ind_prev",nextCell:".ind_next"});
	
		var twH=$(window).outerHeight(true);
		var tdH=$(document).outerHeight(true);
		var tW=$(window).width();
		$('.bgover').css({
			"width":tW
			})
		if(tdH>twH){
			$('.bgover').css("height",tdH);
		}
		else{
		    $('.bgover').css("height",twH);	
			}
		var tpw = $('.team_det').outerWidth(true);
		var tph = $('.team_det').outerHeight(true);
		var lt = (tW-tpw)/2;
		var tp = (twH-tph)/2;

		$('.team_det').css({
			"left":lt
			})
		
		$('.show_det').click(function(){

        var index=$(this).index(".show_det");
     $("#hdNowIndex").val(index);

                       $.get("/zuopin/Ajax.aspx", { functionName: "GetZhuanJia", ID:$(this).attr("id") },
  function (result) {
 if (result != "") {
          $(".team_det").html(result);
         $('.bgover,.team_det').show();
              if (index==0) {
    $('.tm_pr').hide();
}
   if (index==7) {
    $('.tm_ne').hide();
}
      }

  });
  })
    
//  	$('.tm_pr').click(function(){
//        $("#hdNowIndex").val(parseInt($("#hdNowIndex").val()) -1);
//     if ($("#hdNowIndex").val()=="0") {
//     $('.tm_pr').hide();
//}
//                       $.get("/zuopin/Ajax.aspx", { functionName: "GetZhuanJia",ID:$(".chief_team .show_det").eq(parseInt($("#hdNowIndex").val()).attr("id") },
//  function (result) {
// if (result != "") {
//          $(".team_det").html(result);
//         $('.bgover,.team_det').show();
//      }

//  });
//  })

//    	$('.tm_ne').click(function(){
//              $("#hdNowIndex").val(parseInt($("#hdNowIndex").val()) + 1);
//         if ($("#hdNowIndex").val() == "7") {
//             $('.tm_ne').hide();
//         }

//         $.get("/zuopin/Ajax.aspx", { functionName: "GetZhuanJia", ID: $(".show_det").eq(parseInt($("#hdNowIndex").val())).attr("id") },
//  function (result) {
//      if (result != "") {
//          $(".team_det").html(result);
//          $('.bgover,.team_det').show();
//      }

//  });
//  })

		$('.bgover').click(function(){
			$('.bgover,.team_det').hide();
			})

            
	/*新聞切换效果*/
	var inter2;
	var windex2=0;
	var bsize2=$('.newsbanner .bd li').size();
	$('.newsbanner .bd li:first').show();
	$('.newsbanner .hd li:first').addClass("on");
	$(".newsbanner .hd li").click(function(){
		windex2=$(".newsbanner .hd li").index(this);
		/*$('.newsbanner .bd').find('li').fadeOut();*/
		$('.newsbanner .bd').find('li').eq(windex2).fadeIn(1000).siblings().fadeOut(2000);
		clearInterval(inter2);
		inter2= setInterval(doplay2,5000);
		$('.newsbanner .hd li').removeClass("on");
		$('.newsbanner .hd li').eq(windex2).addClass("on");
	})
	$('.newsbanner .bd li').mouseover(function(){
		clearInterval(inter2);
		})
	$('.newsbanner .bd li').mouseleave(function(){
		inter2= setInterval(doplay2,5000);
		})
	function doplay2(){
		windex2++;
		/*$('.newsbanner .bd').find('li').fadeOut();*/
		$('.newsbanner .bd').find('li').eq(windex2).fadeIn(1000).siblings().fadeOut(2000);
		$('.newsbanner .hd li').removeClass("on");
		$('.newsbanner .hd li').eq(windex2).addClass("on");
		if(windex2>=bsize2){
		windex2=0;
		/*$('.newsbanner .bd').find('li').fadeOut();*/
		$('.newsbanner .bd').find('li').eq(windex2).fadeIn(1000).siblings().fadeOut(2000);
		$('.newsbanner .hd li').removeClass("on");
		$('.newsbanner .hd li').eq(windex2).addClass("on");
		
		}
	}
	
	
	function tit2(){
		inter2= setInterval(doplay2,5000);
		}
	tit2();
	
	/*新聞切换效果*/
	

})

function getQueryStringByName(name) {

    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));

    if (result == null || result.length < 1) {

        return "";

    }

    return result[1];

}