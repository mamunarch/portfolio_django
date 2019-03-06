/* recommendation_part slick start */
$(document).ready(function () {

  $('#recommendation_auto_play').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        }
      ]
  });

});
/* recommendatio_part slick end */

/* smooth scroll start */
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});
/* smooth scroll end */

/* project_info_part toggle js start */
$(document).ready(function(){
  $(".project_info_part .project_header").click(function(){
      $("#project_info").toggleClass("show_filter");
  });
});
/* project_info_part toggle js end */

/* blog_part toggle js start */
$(document).ready(function(){
  $(".blog_part .side_bar .filter").click(function(){
      $(".blog_part .blog_type").toggleClass("show_filter");
  });
});
/* blog_part toggle js end */

/* latest_work_part toggle js start */
$(document).ready(function(){
  $(".latest_work_part .filter").click(function(){
      $(".latest_work_part .simplefilter,.latest_work_part .search-row").toggleClass("show_filter");
  });
});
/* latest_work_part toggle js end */

/* modal option js start */
$(document).ready(function() {
    $("#op_type").change(function() {
        var val = $(this).val();
        if (val == "project") {
            $("#op_category").html("<p>Great! Before we get started, I just have a few more questions…</p><div class='option_label'><label>I need<span>*</span></label></div><ul><li><input id='design' type='radio' name='need' value='design'><label for='design'>Web Design</label></li><li><input id='development' type='radio' name='need' value='development'><label for='development'>Web Development</label></li><li><input id='template' type='radio' name='need' value='template'><label for='template'>Template Design</label></li><li><input id='psd_html' type='radio' name='need' value='psd_html'><label for='psd_html'>Psd to HTML conversion</label></li><li><input id='wp' type='radio' name='need' value='wp'><label for='wp'>WP Template Customization</label></li></ul><div class='option_label'><label>Timeline<span>*</span></label></div><ul><li><input id='urgent' type='radio' name='time' value='urgent'><label for='urgent'>Within the next 2 weeks</label></li><li><input id='22_dayes' type='radio' name='time' value='22_dayes'><label for='22_dayes'>2 – 4 weeks</label></li><li><input id='3_months' type='radio' name='time' value='3_months'><label for='3_months'>1 – 3 months</label></li><li><input id='6_months' type='radio' name='time' value='6_months'><label for='6_months'>3 – 6 months</label></li><li><input id='12_months' type='radio' name='time' value='12_months'><label for='12_months'>6 – 12 months </label></li></ul><div class='option_label'><label>Budget<span>*</span></label></div><ul><li><input id='big_value' type='radio' name='budget' value='big_value'><label for='big_value'>More than $50,000</label></li><li><input id='upper_mid' type='radio' name='budget' value='upper_mid'><label for='upper_mid'>2$25,000 – $50,000</label></li><li><input id='mid' type='radio' name='budget' value='mid'><label for='mid'>$10,000 – $25,000</label></li><li><input id='lower_misd' type='radio' name='budget' value='lower_misd'><label for='lower_misd'>$5,000 – $10,000</label></li><li><input id='low' type='radio' name='budget' value='low'><label for='low'>Less than $5,000</label></li></ul><div class='option_label'><label for='projet_des'>Please describe your project requirements<span>*</span></label></div><textarea id='projet_des' placeholder='Describe your project requirements here...' required></textarea><input class='contact_submit' type='submit' value='Submit'><br><button type='button' data-dismiss='modal'>Cancel</button>");
        } else if (val == "connect") {
            $("#op_category").html("<p>Great! I love making new connections. Please be as descriptive as possible with your message and I’ll do my best to get back to you in a timely manner.</p><label for='connect'>What would you like to connect on?<span>*</span></label><textarea id='connect' placeholder='Leave your message here...' required></textarea><input class='contact_submit' type='submit' value='Submit' ><br><button type='button' data-dismiss='modal'>Cancel</button>");

        } else if (val == "question") {
            $("#op_category").html("<div class='option_label'><label for='question'>What's your question?<span>*</span></label></div><textarea id='question' placeholder='Leave your question here...' required></textarea><h4>I’ll do my best to get back to you in a timely manner :]</h4><input class='contact_submit' type='submit' value='Submit' ><br><button type='button' data-dismiss='modal'>Cancel</button>");

        } else if (val == "nothing") {
            $("#op_category").html("<button type='button' data-dismiss='modal'>Cancel</button>");

        }
    });
});
/* modal option js end */


/* Filterizr js start */
$(document).ready(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
});

if ($('').filterizr) {
  var filterizd = $('.filtr-container').filterizr({
    animationDuration: 0.7,
    easing: 'ease',
  });
};
/* Filterizr js end */

/* blog isotop js start */
$(document).ready(function(){
    if ($('').isotope) {

  $('.post_container').isotope({
    itemSelector: '.single_post',
    layoutMode: 'vertical'
  });

  // Module Search
  $('#ModuleSearch').keyup(function () {
      var search = $(this).val();
      var $container = $('.post_container');
      var $items = $container.find(".single_post");
      var sorts = {
          score: function ($item) { return $item.data("score"); },
          name: function ($item) { return $item.find(".blog_title").text(); }
      };
      // If blank search trigger show all modules
      if (search == "") {
          $('#ShowAllModules').trigger("click");
          return;
      }
      // Clear matches
      clearClass($items, "match");
      // Calculate sort score and set match
      $.each($items, function (i, row) {
          var score = LiquidMetal.score($(row).find(".blog_title").text(), search);
          var isMatch = score > 0.5;
          $(row).data("score", score);
          if (isMatch) $(row).addClass("match");
      });
      // Isotope sort
      $container.isotope({ getSortData: sorts, sortBy: 'score', sortAscending: true });
      $container.isotope({ filter: '.match' });
      $('.filter_key li').removeClass("active");
  });

  // Utility function for this set of functions
     function clearClass($items, className) {
      $.each($items, function (i, item) { 
        $(item).removeClass(className); 
          });
      };

    $('.filter_key').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.post_container').isotope({ filter: filterValue });
      });
    $('.filter_key li').click(function() {
        $('.filter_key li').removeClass('active');
        $(this).addClass('active');
      });
    };
    var LiquidMetal=function(){function o(e,t){var n=e.charAt(t);return"A"<=n&&n<="Z"}function u(e,t){var n=e.charAt(t-1);return s.indexOf(n)!=-1}function a(e,t,n,r){for(var i=n;i<r;i++){e[i]=t}return e}var e=0;var t=1;var n=.8;var r=.9;var i=.85;var s="  _-";return{lastScore:null,lastScoreArray:null,score:function(t,r){if(r.length===0)return n;if(r.length>t.length)return e;var i=[];var s=t.toLowerCase();r=r.toLowerCase();this._scoreAll(t,s,r,-1,0,[],i);if(i.length==0)return 0;var o=0,u=[];for(var a=0;a<i.length;a++){var f=i[a];var l=0;for(var c=0;c<t.length;c++){l+=f[c]}if(l>o){o=l;u=f}}o/=t.length;this.lastScore=o;this.lastScoreArray=u;return o},_scoreAll:function(s,f,l,c,h,p,d){if(h==l.length){var v=f.charAt(0)==l.charAt(0);var m=v?r:n;a(p,m,p.length,s.length);d.push(p.slice(0));return}var g=l.charAt(h);h++;var y=f.indexOf(g,c);if(y==-1)return;var b=c;while((y=f.indexOf(g,c+1))!=-1){if(u(s,y)){p[y-1]=1;a(p,i,b+1,y-1)}else if(o(s,y)){a(p,i,b+1,y)}else{a(p,e,b+1,y)}p[y]=t;c=y;this._scoreAll(s,f,l,c,h,p,d)}}}}()
});

/* blog isotop js end */

function openNav() {
  document.getElementById("Sidenav").style.right = "0";
}

function closeNav() {
  document.getElementById("Sidenav").style.right = "-260px";
}