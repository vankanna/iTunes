function printResults(items){
    items.forEach(function(item) {
        console.log(item)
        $('#itemContainer').append(`<div class="item">
        <div class="imageHolder">
            <img src="${item.artworkUrl100}" alt="Book Cover">
        </div>
            <div class="info"><h4>${item.collectionName}</h4>
            <p>By: ${item.artistName}</p>
        </div>
    
        <div class="clearfloat"></div>
        </div>

    `);
    });

}
function searchItunes() {
    var term = $('#searchTerm').val();
    console.log(term);
    var jqxhr = $.ajax( "https://itunes.apple.com/search?term=" + term + "&limit=10" )
        .done(function( data ) {
            var json = $.parseJSON(data)
            printResults(json.results)
        })
        .fail(function(err) {
            console.log(err)
            alert( "error" );
        })
        .always(function() {
            alert( "complete" );
        });

}

$( document ).ready(function() {
  

    

});


    // $('#itemContainer').append(`
    // <h3>${data.results[i].collectionName}</h3>
    // <p>By: ${data.results[i].artistName.join(', ')}</p>
    // <img src="${data.results[i].collectionViewUrl}" alt="Book Cover">
    // `);