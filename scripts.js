const d0 = document.querySelector("#ds00")
const d1 = document.querySelector("#ds001")
const d2 = document.querySelector("#ds002")
const d3 = document.querySelector("#ds003")
const d4 = document.querySelector("#ds004")
const d5 = document.querySelector("#ds005")
const d6 = document.querySelector("#ds006")


function showItem(e,id,t) {
    const titles = document.querySelectorAll('span span')
    const links = document.querySelectorAll('.nav-wrapper li');
    links.forEach(li => {
       li.classList.remove('active')
    });

    e.currentTarget.classList += ' active';
    titles.forEach(ti =>{
        if(t === ti.id){

            ti.textContent = e.currentTarget.textContent;
        }
    })
    const displayList = [d0,d1,d2,d3,d4,d5,d6];
    displayList.forEach(item =>{
        if(item.id == id){
            item.classList.remove('d-none');
        }
    })

}