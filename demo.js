$(function (){

    //this code after the request would run before the results are returned
})

$( document ).ready(function() {
    $('#fetch').on('click', function(e){
        $.get(
            //the endpoint
            'https://itunes.apple.com/search',
            //query params
            {
                term:'javascript',
                limit:'10'
            },
            //function to call when a result is returned
            function(data){
                console.log(data)
                console.log("what")
                //data is what you see in postman
                for(i in data.results){
                    $('#itemContainer').append(`
                        <h3>${data.results[i].collectionName}</h3>
                       <p>By: ${data.results[i].artistName.join(', ')}</p>
                       <img src="${data.results[i].collectionViewUrl}" alt="Book Cover">
                       `);
                }
            }
            //$.post()
            //$.ajax();
        )
    });});