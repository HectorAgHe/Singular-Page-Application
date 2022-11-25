const mainContent = document.querySelector('#container');
const navbar = document.querySelector('./navbar');

const loadData = e =>{
    e.preventDefault();
    if(e.target.clasList.contains('')|| e.target.clasList.contains('')){

    }
}
window.addEventListener('DOMContentLoaded', () =>{
    fetch('..pages/home.html')
    .then(page =>{
        //const div = document.createElement('div);
        return page.text();
        
    })
    .then(contentHtml => {
        const div = document.createElement('div');
        console.log(contentHtml);
        div.innerHTML = contentHtml;
        mainContent.appendChild(div);
    });
    navbar.addEventListener('click', loadData);
});