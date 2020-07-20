import $ from 'jquery';

$('.tab_content').hide();
$('.tab_content:first').show();

/* tab mode */
$('.brochure__tabs li').click(function () {
  $('.tab_content').hide();
  var activeTab = $(this).attr('rel');
  $('#' + activeTab).fadeIn();

  $('.brochure__tabs li').removeClass('active');
  $(this).addClass('active');

  $('.tab_drawer_heading').removeClass('d_active');
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass('d_active');
});
/* drawer mode */
$('.tab_drawer_heading').click(function () {
  $('.tab_content').hide();
  var d_activeTab = $(this).attr('rel');
  $('#' + d_activeTab).fadeIn();

  $('.tab_drawer_heading').removeClass('d_active');
  $(this).addClass('d_active');

  $('.brochure__tabs li').removeClass('active');
  $(".brochure__tabs li[rel^='" + d_activeTab + "']").addClass('active');
});
