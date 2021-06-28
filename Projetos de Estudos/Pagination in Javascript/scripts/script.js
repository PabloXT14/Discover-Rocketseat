//Selecting all required elements
const ulTag = document.querySelector("ul");
let totalPages = 20;

function element(totalPages, page) {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;


    //if page value is greater than 1 then add new li which is previous button
    if(page > 1) {
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
    }

    // if page value is greater than 2 then add new li tag with 1 value
    if(page > 2) {
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`
        if(page > 3) {//if page value is greater than 3 then add new li tag width(...)
            liTag += `<li class="dots"><span>...</span></li>`
        }
    }

    //How many pages or li show before the current li
    if(page == totalPages) {
        beforePages = beforePages - 2;
    } else if(page == totalPages - 1) {
        beforePages = beforePages - 2;
    }

    // How many pages or li show after the current li
    if(page == 1) {
        afterPages = afterPages + 2;
    } else if (page == 2){
        afterPages = afterPages + 1;
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        
        if(pageLength > totalPages) {
            continue;//sai do loop
        }
        //if pageLength is equal to 0 then add +1 to the pageLength value
        if(pageLength == 0) {
            pageLength = pageLength + 1;
        }

        // if page value is equal to pageLength then assign the active string in the activeLi variable
        if(page == pageLength) {
            activeLi = 'active';
        } else {
            activeLi = "";
        }

        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }


    // if page value is less than totalPages by -1 then show the last li or page which is 20
    if(page < totalPages - 1) {
        if(page < totalPages - 2) {//if page value is less than totalPages by - 2 then show the last (...) before last page
            liTag += `<li class="dots"><span>...</span></li>`
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
    }


    //if page value is less than totalPages then add new li which is next button
    if(page < totalPages) {
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }
    ulTag.innerHTML = liTag;
}

element(totalPages, 5);