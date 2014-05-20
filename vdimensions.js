function viewportDimensionsToggle(){
    if( viewportDimensionsExist ){
        viewportDimensionsRemove();
    }else{
        viewportDimensionsCreate();
    }
}

function viewportDimensionsCreate(){
    $('<span id="viewportDimensions" style="background:rgba(255,0,0,.8);padding:8px 10px 5px;color:#fff;font-size:15px;font-family:Helvetica;position:fixed;bottom:0;right:0;z-index:99999;" />').appendTo('body');
    viewportDimensionsUpdate();
    viewportDimensionsExist = true;
}

function viewportDimensionsRemove(){
    $('span#viewportDimensions').fadeOut(300);
    setTimeout(function(){
        $('span#viewportDimensions').remove();
    },300);
    viewportDimensionsExist = false;
}

function viewportDimensionsUpdate(){
    $('span#viewportDimensions').html($(window).width() + 'x' + $(window).height());
}

var viewportDimensionsManually = false;
var viewportDimensionsExist = false;
var vDimensions = null;

$(window).resize(function(){
    if(!viewportDimensionsManually){
        clearTimeout(vDimensions);
        vDimensions = setTimeout(viewportDimensionsRemove, 1000);
    }
    if( !viewportDimensionsExist ){
        viewportDimensionsToggle();
    }else{
        viewportDimensionsUpdate();
    }
});

$(document).keyup(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    // console.log(code);
    switch(code) {
        case 18:
            viewportDimensionsManually = !viewportDimensionsManually;
            viewportDimensionsToggle();
        break;
    }
});

