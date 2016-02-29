jQuery(window).load(function(){

  jQuery('body.page-edit form').areYouSure({
    'message': 'You have unsaved changes.'
  });
  
  // check for Editor fields also
  jQuery('body.page-edit form').on("change keyup paste", "textarea", function(){
    jQuery('body.page-edit form').addClass('dirty');
  });
  
});