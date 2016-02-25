jQuery(window).load(function(){

  jQuery('body.page-edit form').areYouSure({
    'message': 'You have unsaved changes.'
  });
  
});