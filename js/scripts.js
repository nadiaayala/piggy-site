$(function(){
    const $nameSubscriber = $('#nameSubscriber');
    const $emailSubscriber = $('#emailSubscriber');
    const $btnSubscriber = $('#btnSubscriber');
    const $form = $('#name');
    const $modal = $('#myModal');

    $btnSubscriber.on('click', function(e){
        e.preventDefault();        
        if(validate(5)){
            $btnSubscriber.attr("data-toggle", "modal");
            $btnSubscriber.attr("data-target", "#myModal");            
    }});
    function validate(minLength){
        if ($nameSubscriber.val().length<minLength){
        var $alertDiv = $('<div class="alert alert-danger alert-dismissible"> <p> O nome precisa ter mais que 5 caracteres!</p> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');
            $form.prepend($alertDiv);   
        return false;
    }
        else{
            return true;
        }
    }
   

});