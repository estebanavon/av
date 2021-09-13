$(document).ready(function(){
    if ( window.location !== window.parent.location ) {  
    } else {
        $('body').append('<nav class="nav"><svg style="transform:scale(0.8);" width="154.2px" height="35px"><use xlink:href="#brand"></use></svg><div class="decorator"></div></nav>')
        $('.container_simulador').css('paddingTop','115px');
    }


    let selectedValue,coin = "$";
    $('.coin').each(function(){
        $(this).append(coin)
    })

    
    $('.selector_simulador').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        selectedValue = $(this).attr('value');
        console.log(selectedValue)
    });
});