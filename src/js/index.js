try {

    // UIElement
    let toggleBar  = document.querySelector('.toggle-bar')
    let navBar = document.querySelector('.nav-bar')
    let progressiveBar = document.querySelectorAll(".progressive-bar")

    //Static variable
    let skillCounter = 0;

    function loadSkillCounter() {
        let progressiveCounts = document.querySelectorAll(".progressive-count")

        progressiveCounts.forEach(function (item, ind) {
            inCrementSkillCounter(item, +item.dataset.value, ind)
        })
    }

    function inCrementSkillCounter(item, value, ind) {

        if (skillCounter > value) {

            // loadSkillCounter()
            return
        }
        console.log(value)

        skillCounter = skillCounter + 1
        item.innerHTML = `${skillCounter}%`
        progressiveBar[ind].style.width = `${skillCounter}%`
        progressiveBar[ind].style.height = `${"35px"}`


    }

    window.addEventListener("scroll", function (e) {

        if (window.scrollY >= 1030 && window.scrollY <= 1300) {

            // console.log(true) 
            setInterval(() => loadSkillCounter(), 150)
        }
        // console.log(false) 


    })

    toggleBar.addEventListener('click', (e)=>onHangleToggleBar(e, navBar))

} catch (error) {
    console.log(error)
}

// setInterval(()=>loadSkillCounter(), 50) 