$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
        allPrevBtn = $('.prevBtn');
  
    allWells.hide();
  
    navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
          $item = $(this);
  
      if (!$item.hasClass('disabled')) {
        navListItems.removeClass('btn-primary').addClass('btn-default');
        $item.addClass('btn-primary');
        allWells.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
      }
    });
  
    allPrevBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
  
      prevStepWizard.removeAttr('disabled').trigger('click');
    });
  
    allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;
  
      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
        if (!curInputs[i].validity.valid){
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
      }
  
      if (isValid)
        nextStepWizard.removeAttr('disabled').trigger('click');
    });
  
    // Redirect to register#step-2
    if(window.location.hash === '#step-2') {
      $('div.setup-panel div a[href="#step-1"]').removeClass('btn-primary').addClass('btn-default');
      $('div.setup-panel div a[href="#step-2"]').removeClass('btn-default').addClass('btn-primary');
      $('#step-1').hide();
      $('#step-2').show();
    }
  
    // Show the initial step on page load
    $('div.setup-panel div a.btn-primary').trigger('click');
  });
  