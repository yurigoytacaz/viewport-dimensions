function viewportDimensions(){
    if( $('span#viewportDimensions').length ){
        $('span#viewportDimensions').remove();
    }else{
        $('<span id="viewportDimensions" style="background:red;padding:5px 10px;color:#fff;font-size:14px;font-weight:bold;position:fixed;top:0;right:0;z-index:99999;" />').appendTo('body');
        viewportDimensionsUpdate();
    }
}

function viewportDimensionsUpdate(){
    $('span#viewportDimensions').html($(window).width() + 'x' + $(window).height());
    // console.log('vDimensions: update');
}

$(window).resize(function(){
    clearTimeout(vDimensions);
    var vDimensions = setTimeout(viewportDimensionsUpdate(), 10);
});

$(document).keyup(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    switch(code) {
        case 16:
            viewportDimensions();
        break;
    }
});
