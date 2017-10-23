// 1part

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


// 2part

    function addAttendee(){
        $('.attendee-list').append(
            $('script[data-template="attendee"').text()
        )
        syncRemoveButtons()
    }
    function syncRemoveButtons(){
        if (getAttendeeCount() === 1){
            $('.attendee-list .attendee .remove-attendee').first().hide()
        }
        else {
            $('.attendee-list .attendee .remove-attendee').show()
        }
    }
    function syncPurchaseButton(){
        $('#checkout-button span.amount').html(
            '$' + data.cost * getAttendeeCount()
        )
    }
    $('add-attendee').on('click', function (event){
        event.preventDefault()
        addAttendee()
        $(this).trigger('attendee:add')

    }).on('attendee:add', function(){
        syncPurchaseButton()
        syncRemoveButtons()
    })
    $('#app').on('attendee:remove', function(){
        event.preventDefault()
        var $row = $(event.target).closest('.attendee.row')
        $row.remove()
        $('#app').trigger('attendee:remove')
    })
    $('#app').on('attendee:remove', function(){
        syncPurchaseButton()
        syncRemoveButtons()
    })
    $('#unit-price').html('$' + data.cost + ' ea.')
    addAttendee()
    syncPurchaseButton()
})