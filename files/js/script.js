var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_edge_or_ie;    

var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
var edge = ua.indexOf('Edge/');
var spacerHeight = $('.title-block-spacer').height();  
var checkMobile = false;

window.mobilecheck = function() {
var checkMobile = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return checkMobile;
};

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
function makeNavSticky(){
  if ($(document).scrollTop() > 200) { 
    $('.navbar-default').addClass('smaller');

  } else {
    $('.navbar-default').removeClass('smaller');
  } 
}
function hoverPackages(){
  if($(window).width() > 991){
    $('.package_link').hover(
      function() {
        $(".package_link").not(this).addClass("fade_out");
      },
       function() {
        $(".package_link").not(this).removeClass("fade_out");
      },
    );
  }
}
function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
  var target = $(this).attr('href');
  // If the target is not empty
    if(target != '#'){
    e.preventDefault();
    e.stopPropagation();
    // set target to anchor's "href" attribute
    if(target == "#package-dj") {
        $("#message").val("Hi, I'm interested in the DJ package. ");    
        target = "#contact";  
        setTimeout(function(){
          $( "#name" ).focus();
        }, 1200);  
    }
    if(target == "#package-sax") {
        $("#message").val("Hi, I'm interested in the DJ + Sax package. ");    
        target = "#contact";  
        setTimeout(function(){
          $( "#name" ).focus();
        }, 1200);  
    }
    if(target == "#package-singer") {
        $("#message").val("Hi, I'm interested in the DJ + Singer package. ");    
        target = "#contact";  
        setTimeout(function(){
          $( "#name" ).focus();
        }, 1200);  
    }
    // scroll to each target
      $(target).velocity("scroll", { 
        duration: 1000,
        offset: -55
      });
    }
  });
}
function truncateInstagramPostString(){
  var html_before_tags;
  $('.j-message p').each(function(){
    html_before_tags = $(this).html().split('<br>•')[0];
    $(this).html(html_before_tags);
  });
}
function listenForJuicerClick(){
  $('.j-paginate').click(function(){
    // Poll Instagram posts load to remove text every 100ms
    var poll_load = setInterval(function(){
      truncateInstagramPostString();
      // Re-attach the event listener to any new elements
      listenForJuicerClick();
    }, 100);
    // Stop interval polling after 1.5 seconds
    setTimeout(function(){
      clearTimeout(poll_load);
    }, 1500)
  });
  $(document).click(function(){
    setTimeout(function(){
      truncateInstagramPostString();
    }, 10)
  });
}

function bubbleButtonAnim(){
  var ofs, x, y;
  $('.btn-animated').on('mouseenter', function(e){
    ofs = $(this).offset();
    x = (e.pageX - ofs.left);
    y = (e.pageY - ofs.top);
    var name = $(this).text().toLowerCase().split(' ')[0];
      
    $(this).append('<div class="blob ' + name + '" style="left:' + x + 'px; top: ' + y + 'px;"></div>');
      
    var blob = $(this).find('.blob');
    setTimeout(function(){
        blob.addClass("expand");
    },20);
  });
  $('.btn-animated').on('mouseleave', function(e){
    ofs = $(this).offset();
    x = (e.pageX - ofs.left);
    y = (e.pageY - ofs.top);
    var blob = $(this).find('.blob');
    blob.css({'left':x, 'top':y});
    blob.removeClass("expand");
    setTimeout(function(){
        blob.remove();
    },800);
  });
}
$(window).scroll(function() {
    makeNavSticky();
});
$(window).resize(function () {
  // Remove the fade_out class from any of the package links
  // in case they were hovered when the resize occurred
  $(".package_link").removeClass("fade_out");
});
Pace.restart();
Pace.on("done", function(){

  // Allow scrolling
  $('body').removeClass('no_scroll');
  var y = $(window).scrollTop();  //your current y position on the page
  $('.pace').addClass('disappear');
  $('.loading').addClass("disappear");

  // Only show main text banner after loading complete
  $('.title-main').css('display', 'block');
});
$(document).ready(function () {
  bindVelocity();
  hoverPackages();
  makeNavSticky();
  bubbleButtonAnim();
  $('.center').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false
    autoplay: true,
    autoplaySpeed: 4000
  });


  $('body').scrollspy({
    target: '#topnav',
    offset: 50
  });
  setTimeout(function(){
    truncateInstagramPostString();
  }, 400);
  setTimeout(function(){
    $('.parallax').paroller({
      factor: '0.2',
      type: 'foreground',
      direction: 'vertical'
    }); 
    truncateInstagramPostString();
    listenForJuicerClick();
  }, 2000);
  
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});