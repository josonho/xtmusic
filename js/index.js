

$(document).ready(function () {

    playJD();
    function playJD() {
        var x;
        var w;
        var ww;
        var tag = false;

        $('.t-btn').mousedown(function () {
            tag = true;
        });
        $('body').mouseup(function () {
            tag = false;
        });
        a();
        b();

        function a() {

            $('.tiao').mousemove(function (ev) {
                if (tag == true) {
                    x = $(".t-red").offset().left;
                    var oEvent = ev || event;
                    var oLeft = oEvent.clientX;
                    var oTop = oEvent.clientY;
                    w = oLeft - x;
                    ww = w + 'px';
                    if (oLeft >= 372 && oLeft <= 857 ) {
                        $('.t-red').width(w);
                        $('.t-btn').css('left', ww)
                    }
                    else {
                        tag = false;
                    }
                }
            })

        }

        function b() {

            $('.tiao').click(function (ev) {
                x = $(".t-red").offset().left;
                var oEvent = ev || event;
                var oLeft = oEvent.clientX;
                var oTop = oEvent.clientY;
                w = oLeft - x;
                ww = w + 'px';
                if (oLeft >= 404 && oLeft <= 884 && oTop >= 104 && oTop <= 116) {
                    $('.t-red').width(w);
                    $('.t-btn').css('left', ww)
                }
            })

        }


    };


  /*  $(".images-d").mouseenter(function () {
        $(".images-d").removeClass("red");
        $(this).addClass("red");
    })
    $(".images-d").mouseleave(function () {

    })*/

    $(".images-l").mouseenter(function () {
        $(".images-l").addClass("images-ll");
    });
    $(".images-l").mouseleave(function () {
        $(".images-l").removeClass("images-ll");
    });
    $(".images-r").mouseenter(function () {
        $(".images-r").addClass("images-rr");
    });
    $(".images-r").mouseleave(function () {
        $(".images-r").removeClass("images-rr");
    });

    $(function () {
        var imga=["images/index/banner_01.jpg","images/index/banner_02.jpg","images/index/banner_03.jpg","images/index/banner_04.jpg","images/index/banner_05.jpg","images/index/banner_06.jpg","images/index/banner_07.jpg","images/index/banner_08.jpg"];
        var colora=["#000000","#fff9a0","#ffa796","#fafafb","#141a23","#192429","#b0d2cc","#31b078"];
        var i=0;
        var time = "";
        var flag=true;
        main();
        function main() {
            xd(i);
            setTime();
            $(".body-image").on("mouseout",setTime);
            $(".body-image").on("mouseover",clearTime);
        }
        function change() {
            $(".body-image").css("background",colora[i]);
            $(".big-image-img").attr("src",imga[i]);
            xd(i);
        }
        function imgIndex(fh) {
            if(fh=="+"){
                i++;
                if(i>7){
                    i=0;
                }
            }
            if (fh=="-") {
                i--;
                if(i<0){
                    i=7;
                }
            }

        }
        $(".images-l").click(function () {
            imgIndex("-");
            change();
        });
        $(".images-r").click(function () {
            imgIndex("+");
            change();
        });

        function xd(i) {
            $('.images-d-g li .images-d').removeClass('red');
            $('.images-d-g li .images-d').eq(i).addClass('red');
        }


        // 小点点击
        $(".images-d-g li").mouseenter(function () {
            i=$(this).index();
            change();
        });
        
        function imgN() {
            imgIndex("+");
            change();
            $(".big-image-img").animate({ opacity: 1 }, 200, 'linear');
            flag=true;
        }
        function setTime() {
             time=setInterval(function () {
                if(flag){
                    flag=false;
                    $(".big-image-img").animate({opacity:0.1},800,'linear',imgN)
                }
            },6000)
        }
        function clearTime() {
            clearInterval(time);
        }
    });

    $('.return').hide();
    window.onscroll = function () {
        //console.log(window.scrollY);
        var y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (y > 50) {
            $('.return').show();
        } else {
            $('.return').hide();
        }
    };


    $(".return").mouseenter(function () {
        $(".return").css("background-color", "#ededed");
    });
    $(".return").mouseleave(function () {
        $(".return").css("background-color", "#f4f4f4");
    });
/*    利用stop()处理动画死循环，这里指停止所有动画再开始新的动画
    利用delay()延迟动画启动
            判断一个对象的css属性
        if ($(".play-main").css('marginBottom')== "-40px"){
            alert($(".play-main").css('marginBottom'));
        }*/
    var lock=-1;
    $(".lock-g").click(function (){
        lock=lock*(-1);
        // 变换锁的图片，注意此处不能是toggleClass(".lock-g-toggle")，这里面不能加点
        $(".lock-g").toggleClass("lock-g-toggle")
    });
            $(".play-main").mouseleave(function (e) {
                $(".play-main").stop();
                if (lock==-1) {
                    $(".play-main").stop().delay(1500).animate({marginBottom: "-40px"}, 1500);
                }
                if (lock==1) {
                    $(".play-main").stop();
                }
            });
            $(".play-main").mouseenter(function (f) {
                $(".play-main").stop();
                if (lock==-1) {
                    $(".play-main").stop().animate({marginBottom: "0px"});
                }
                if (lock==1) {
                    // $(".play-main").stop().animate({marginBottom: "0px"});
                    $(".play-main").stop();
                }
            })
});
