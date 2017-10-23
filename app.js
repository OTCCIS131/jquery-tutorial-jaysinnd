$(document).ready(function(){
    var data = {
        cost: 9.99
    };
    function getAttendeeCount(){
        return $('.attendee-list .row.attendee').length

    }
    function addAttendee(){
        $('.attendee-list').append(
            $('script[data-template="attendee"]').text()
        )
    }
    function syncPurchaseButton(){
        $('#checkout-button span.amount').html(
            '$' + data.cost * getAttendeeCount()
        )
    }
    $('#unit-price').html('$' + data.cost + ' ea.')
    addAttendee()
    syncPurchaseButton()
})