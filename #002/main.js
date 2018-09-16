// Listener for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

document.getElementById('myForm').reset();

//Save bookmark
function saveBookmark(e){
    //get form value
    
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    
    //form validation
    if(!siteName || !siteUrl){
        alert('please enter the information');
        return false;
    }

    
    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    
    //test if bookmark is null
    
    if(localStorage.getItem('bookmarks') === null){
        //init array
        var bookmarks = [];
        //add to array
        bookmarks.push(bookmark);
        //set o local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       } else {
           //get bookmark from local storage
           var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
           //add bookmark to array
           bookmarks.push(bookmark);
           //reset back to local storage
           localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       }
    
        //refetch bookmark
       fetchBookmarks();
    
    // prevent form from submitting
    e.preventDefault();
}

//making delete bookmark function
function deleteBookmark(url){
    //get bookmark from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for(var i =0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            //remove from array
            bookmarks.splice(i, 1);
        }
        
    }
     //reset back to local storage
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     //refetch bookmark
     fetchBookmarks();
}

//fetch bookmarks

function fetchBookmarks(){
    //get bookmark from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    //build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>'+name+
                                      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a>'
                                      '</h3>'+
                                      '</div>';
    }
    
}