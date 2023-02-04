$( document ).ready ( function ( ) {
    var $inp = $ ( '.form-control' )
    var $btn = $ ( '.btn' )
    var $listGroup = $( '.list-group' )
    $btn.click ( function ( ) {
        var val = $inp.val ( )
        $listGroup.append (`<li><input type="checkbox"><span>${val}</span> <button class="btn-close remove">x</button></li>`);
        $inp.val ( "" )
    })
    $listGroup.on ('click', '.btn-close', function ( ) {
        $ (this).parent ( ).remove ( )
    })
});