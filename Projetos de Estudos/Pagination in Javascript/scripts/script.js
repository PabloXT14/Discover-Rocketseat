//Selecting all required elements
const ulTag = document.querySelector("ul");


function element(totalPages, page) {
    let liTag = '';
    let beforePages = page - 1;
    let afterPages = page + 1;


    //if page value is greater than 1 then add new li which is previous button
    if(page > 1) {
        liTag += `<li class="btn prev"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        liTag += `<li class="numb"><span>${pageLength}</span></li>`;
    }


    //if page value is less than totalPages then add new li which is next button
    if(page < totalPages) {
        liTag += `<li class="btn next"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }
    ulTag.innerHTML += liTag;
}

element(20, 5);