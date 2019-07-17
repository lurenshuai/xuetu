$(function(){
    // 学历下拉菜单的显示隐藏
    $(".education").click(function(){
        $(".education-none").css("display","block")
        
    })
    for(let i=0;i<$('.choose1').length;i++){
        $($('.choose1')[i]).click(function(){
            console.log($('.choose1')[i].innerText)
            var chooseCont = $('.choose1')[i].innerText
            $('.inner-one').val(chooseCont)
            $(".education-none").css("display","none")
        })
    }

    // 学习下拉菜单的显示隐藏
    $(".school").click(function(){
        $(".school-none").css("display","block")
    })
    for(let i=0;i<$('.choose2').length;i++){
        $($('.choose2')[i]).click(function(){
            console.log($('.choose2')[i].innerText)
            var chooseCont = $('.choose2')[i].innerText
            $('.inner-two').val(chooseCont)
            $(".school-none").css("display","none")
        })
    }

    // 学历专业下拉菜单显示隐藏
    $(".major").click(function(){
        $(".major-none").css("display","block")
    })
    for(let i=0;i<$('.choose3').length;i++){
        $($('.choose3')[i]).click(function(){
            console.log($('.choose3')[i].innerText)
            var chooseCont = $('.choose3')[i].innerText
            $('.inner-three').val(chooseCont)
            $(".major-none").css("display","none")
        })
    }

    // 意向城市下拉菜单显示隐藏
    $(".city").click(function(){
        $(".city-none").css("display","block")
    })
    for(let i=0;i<$('.choose4').length;i++){
        $($('.choose4')[i]).click(function(){
            console.log($('.choose4')[i].innerText)
            var chooseCont = $('.choose4')[i].innerText
            $('.inner-four').val(chooseCont)
            $(".city-none").css("display","none")
        })
    }

    // 清空
    $('.clear-font').click(function(){
        $('.inner-one').val('')
        $('.inner-two').val('')
        $('.inner-three').val('')
        $('.inner-four').val('')
        $('.buttons').css({
            background: '#ebebeb',
            color: '#666'
        })
    })

    // 判断是否为空
    $('.bottom-one').click(function(){
        if($('.inner-one').val() != '' &&
        $('.inner-two').val() != '' &&
        $('.inner-three').val() != '' &&
        $('.inner-four').val() != ''){
            $('.buttons').css({
                background: '#30D3AC',
                color: '#fff'
            })
        }
    })

    
})