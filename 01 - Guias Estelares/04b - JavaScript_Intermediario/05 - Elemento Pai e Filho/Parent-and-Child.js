window.onload = () => {
    const container = document.querySelector(".container");

    /* === Selecionando filho === */
    const child1 = container.children[0];
    const child2 = container.children[1];
    const lastMenuChild = container.querySelector(".menu").lastElementChild;


    child1.style.backgroundColor = '#a3f4f6';
    child2.style.backgroundColor = '#8257e6';
    lastMenuChild.style.backgroundColor = 'orangered';

    /* === Selecionando pai === */
    child1.parentElement.style.backgroundColor = 'chartreuse';

}