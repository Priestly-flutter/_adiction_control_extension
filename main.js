console.log("X-Control is up and running your search will be monitored");

var images =  document.getElementsByTagName('img')

for(elt of images){
    //dummy script
    elt.src = '${browser.runtime.getURL("19.jpg")}'
    elt.alt = 'an alt text'
}