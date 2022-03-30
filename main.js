function printResults(items){
    $('#itemContainer').empty();
    items.forEach(function(item) {
        $('#itemContainer').append(`<div class="item">
        <div class="imageHolder">
            <img src="${item.artworkUrl100}" alt="Book Cover">
        </div>
            <div class="info"><h4>${item.trackName}</h4>
            <p>By: ${item.artistName}</p>
            <a href="${item.collectionViewUrl}">See more...</a>
        </div>
    
        <div class="clearfloat"></div>
        </div>

    `);
    });

}
function searchItunes() {
    var term = $('#searchTerm').val();
    var jqxhr = $.ajax( "https://itunes.apple.com/search?term=" + term + "&limit=10" )
        .done(function( data ) {
            var json = $.parseJSON(data)
            console.log(json)
            printResults(json.results)
        })
        .fail(function(err) {
            alert( "error" );
        });

}

