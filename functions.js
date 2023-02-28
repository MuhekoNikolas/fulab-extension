


function redirectToTab(event, pageId){
    pageInfo = extensionTabInfo[pageId]
    if(pageInfo==null){
        return
    }
    requestedUrl = pageInfo[url]
    window.location.href = requestedUrl
}

function addNavbarToPage(){
    navBar = document.querySelector(".tab") || document.createElement("div")
    navBar.classList.add("tab")
    navBar.innerHTML = navBarHtml
    document.body.insertBefore(navBar, document.body.children[0])
}