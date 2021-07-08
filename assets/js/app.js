
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
// sidebar collpase and expande
$('.SidenavBar').on('mouseenter',function() {
    $(this).addClass('SidenavBar_expende');
    $('.WrapperArea').addClass('margin_left');
});

$('.SidenavBar').on('mouseleave',function() {
    $(this).removeClass('SidenavBar_expende');
    $('.WrapperArea').removeClass('margin_left');
});

$(document).ready(function() {
    $("#example,#example1,#example2,#example3").DataTable();
});

$(document).on('click', '.showBargain', function () {
    $('.hideBargain').toggle();
  });

$(document).on('click', '.showVendor', function () {
    $('.hideVendor').toggle();
});

$(document).ready(function() {

    // block and unblock user
    $('.blockUnblock_btn input').on('change',function() {
        if($(this).is(':checked')) {
            $('#blockModal').modal({show:'false'}); 
        }else {
            $('#unblockModal').modal({show:'false'});
        }
    })

    // enable and disable user
    $('.enableDisable_btn input').on('change',function() {
        if($(this).is(':checked')) {
            $('#disableModal').modal({show:'false'}); 
        }else {
            $('#enableModal').modal({show:'false'});
        }
    });




    // number counter on dashboard page`
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
})


$(document).on('click' ,'.labelClick' ,function(){
    if($('.setTo').hasClass('active')){
 $('.setTo').removeClass('active');
    }
    else{
        $('.setTo').addClass('active');     
    }
});

