/**
 * Created by knowthis on 15/11/5.
 */
$(function () {
    //参数
    var MXC_slider_config ={
        'slider_speed':3000,
        'slider_time': 500
    };
    var MXC_slider = $(".MXC_slider"),
        MXC_slider_main =$(".MXC_slider_main"),
        MXC_slider_content = $(".MXC_slider_content");


    //设置基础的字体大小
    var html_width = MXC_slider.width();
    MXC_slider.css({"font-size":"10px",'height':0.390625*html_width+'px'});

    //添加导航
    var MXC_slider_num = $(".MXC_slider_content li") ;
    var MXC_slider_num_str ='<ul class="MXC_slider_nav">';
    for(var i=0;i<MXC_slider_num.length;i++){
        MXC_slider_num_str +='<li></li>';
    }
    MXC_slider_num_str+='</ul>';
    MXC_slider_main.append(MXC_slider_num_str);

    //定时滚动
    var index = 0,n_index=0;
    var MXC_slider_nav = $("ul.MXC_slider_nav li");
    $(MXC_slider_nav[0]).css("background-color",'#ffffff');
    setInterval(function () {
        MXC_slider_content.animate({
            'transform':'translate3d(-'+html_width*index+'px,0px,0px)'
        },
            MXC_slider_config.slider_time,
            'ease-in',
            function () {

                n_index = index % MXC_slider_num.length;
                console.log(n_index);
                index+=1;
                $(MXC_slider_num[n_index]).css({"left":html_width*index});
                $(MXC_slider_nav[n_index]).css("background-color",'#ffffff');
                $(MXC_slider_nav[n_index-1]).css("background-color",'#635A5A');
                if(!n_index){
                    $(MXC_slider_nav[MXC_slider_num.length-1]).css("background-color",'#635A5A');
                }

        })
    },MXC_slider_config.slider_speed)

});