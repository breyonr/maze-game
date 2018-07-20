const player = document.querySelector('#player')
const lava = document.querySelector('#lavafloor')
const trap1 = document.querySelector('#trap1')
const spike = document.querySelector('#spike')
const water = document.querySelector('#waterfloor')
const safe = document.querySelector('#safe')
const lava2 = document.querySelector('#lavafloor2')
const newfloor = document.querySelector('#newfloor')
const stair = document.querySelector('#stair')
let y = 4
spike.setAttribute(`position`, `0 ${y} 0`)

player.addEventListener('collide', e => {
    if (lava.id == e.detail.body.el.id) {
        console.log("you fell in lava - restart")
        alert('Ouch! You fell in lava - restart')
        player.setAttribute(`position`, `0 0 0`)
    }
})
player.addEventListener('collide', e => {
    if (lava2.id == e.detail.body.el.id) {
        console.log("you fell in lava - restart")
        alert('Ouch! You fell in lava - restart')
        player.setAttribute(`position`, `0 0 0`)
    }
})

safe.addEventListener('click', e => {
    lava2.setAttribute(`position`, `"10.25 -15 -16"`)
    console.log("saftey button clicked")
    // newfloor.setAttribute('material', 'transparent:false')

})
stair.addEventListener('click', e => {
    lava.setAttribute(`position`, `"10.25 -20 -16"`)
    console.log("stair hack clicked")
    // newfloor.setAttribute('material', 'transparent:false')

})

player.addEventListener('collide', e => {
    //console.log("somthing hit")
     if (spike.id == e.detail.body.el.id) {
            location.reload();
            // player.setAttribute(`position`, `0 0 0`)
            // spike.setAttribute(`position`, `0 7 0`)
        }
   else if (trap1.id == e.detail.body.el.id) {
        console.log("you colide with trap1")
       

        spike.innerHTML = `<a-animation attribute="position"  to="-5 0 -13" dur="500"></a-animation>`
    }
    
})



            // console.log("Collider (below):");
            //  console.log(e.detail.body.el.id);
            //  console.log(goal.id)
            // console.log("Collider ID: " + e.detail.target.el.id);


            player.addEventListener('collide', e => {
                if (waterplane.id == e.detail.body.el.id) {
                    console.log("you touched the water! try again")
                    player.setAttribute(`position`, `0 0 0`)
                }
            })
