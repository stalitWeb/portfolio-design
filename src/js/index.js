
let skillCount = 0;
let progressiveBar = document.querySelectorAll(".progressive-bar")

function loadSkillCount() {
    let progressiveCounts = document.querySelectorAll(".progressive-count")

    progressiveCounts.forEach(function(item, ind) {
        inCrementSkillCount(item, +item.dataset.value, ind)
    })
}

function inCrementSkillCount (item, value, ind) {

    if ( skillCount > value ) {
       
        // loadSkillCount()
        return 
    }
    console.log(value)

    skillCount = skillCount + 1
    item.innerHTML = `${skillCount}%`
    progressiveBar[ind].style.width = `${skillCount}%`
    progressiveBar[ind].style.height = `${"30px"}`


}

window.addEventListener("scroll", function(e){ 

    if (window.scrollY >= 1030 && window.scrollY <= 1300 ) {

        // console.log(true) 
        setInterval(()=>loadSkillCount(), 500)
    }
    // console.log(false) 
    

})

// setInterval(()=>loadSkillCount(), 50) 