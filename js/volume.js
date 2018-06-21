function calcVolume(length,width,height){
    return length * width * height;
}

$('#calc_btn').click(function(){
    var inputs = {
        length: parseFloat($('#getLengthTxt').val()),
        width: parseFloat($('#getWidthTxt').val()),
        height: parseFloat($('#getHeightTxt').val())
    };

    $('#calc_output').text(calcVolume(inputs.length,inputs.width,inputs.height));
});