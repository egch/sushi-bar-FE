// reference: https://scotch.io/tutorials/submitting-ajax-forms-with-jquery
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        var formData = {
            'username'              : $('input[name=username]').val(),
            'email'             : $('input[name=email]').val(),
            'password'    : $('input[name=password]').val()
        };

    
        $.ajax({
            type        : 'POST', 
            url         : 'http://localhost:8080/registration',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
             },
            data        : JSON.stringify(formData), 
            dataType    : 'json', 
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});