// Hade problem med att min htmlColelction bara innehöll null
// https://stackoverflow.com/questions/28473568/object-htmlcollection0-keeps-returning-undefined/28473641
// Den här posten rådde mig att söka upp elementen inom window.onload
window.onload = function()
{
    let carousels = document.getElementsByClassName('carousel');

    // Här är fulkod som ger en array med bilderna vi vill snurra i karuselln (imgs)
    let imgs = [];
    let selected = 0;
    for (c of carousels) {
        // console.log("Fuck you!");
        let kids = c.children
        for (k of kids){
            // från https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
            let grandkids = k.children
            for (i of grandkids){
                imgs.push(i);
            }
            
        }
    }
    // Här kör vi kod på imgs
    setInterval(function(){
        if (selected < imgs.length) selected++;
        else selected = 0;
        for (var i = 0; i < imgs.length; i++){
            if (i == selected){
                imgs[i].style.display = "block";
            }
            else imgs[i].style.display = "none";
        }
    }, 3000);
    for (var i = 0; i < imgs.length; i++){
        if (i == selected){
            imgs[i].style.display = "block";
        }
        else imgs[i].style.display = "none";
    }
    jQuery(".carousel").show();
}
