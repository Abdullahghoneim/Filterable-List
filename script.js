// get input element 
var inputFilter = document.getElementById('filterInput');
// add event listner to inpu
inputFilter.addEventListener('keyup',filtername);

function filtername(){

    // get value of input 
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // get name of ul 

    let ul = document.getElementById('names');

    // get item ist of li 

    let li = document.querySelectorAll('li.collection-item');

    // loops items collection 
    
    for(i=0; i<li.length;i++){
        
        // get all the linkes with tag name 
        let a = li[i].getElementsByTagName('a')[0];
             
        // check if input equel with a tag name
        if(a.innerHTML.toUpperCase().indexOf(filterValue)> -1){
                li[i].style.display ='';
        }
            else{
                li[i].style.display='none';
            }



    }

}
