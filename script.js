const player = document.querySelector('#player')
const lava = document.querySelector('#lavafloor')
const trap1 = document.querySelector('#trap1')
const spike = document.querySelector('#spike')
const water = document.querySelector('#waterfloor')
const safe = document.querySelector('#safe')
const lava2 = document.querySelector('#lavafloor2')
const newfloor = document.querySelector('#newfloor')
const stair = document.querySelector('#stair')
const trophy = document.querySelector('#trophy')
const sword = document.querySelector("#sword")
const arrow = document.querySelector("#arrow")
const floor = document.querySelector("#floor")
const door = document.querySelector("#door")
const step = document.querySelector("#step")
const trap2 = document.querySelector("#trap3")
const trap3 = document.querySelector("#trap4")
const trap4 = document.querySelector("#trap2")
let y = 4;
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
player.addEventListener('collide', e => {
    if (trophy.id == e.detail.body.el.id) {
        console.log("trophy reached")
        alert('You reached the trophy! Good job!')
        player.setAttribute(`position`, `0 0 8`)
         player.setAttribute(`rotation`, `0 270 0`)
    }
})

safe.addEventListener('click', e => {
    lava2.setAttribute(`position`, `"10.25 -15 -16"`)
    console.log("saftey button clicked")
    // newfloor.setAttribute('material', 'transparent:false')

})
// trophy.addEventListener('click', e => {
//     player.setAttribute(`position`, `"0 0 9"`)
//     console.log("trophy clicked")
//     // newfloor.setAttribute('material', 'transparent:false')

// })
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
player.addEventListener('collide', e => {
    //console.log("somthing hit")
     if (arrow.id == e.detail.body.el.id) {
            location.reload();
            // player.setAttribute(`position`, `0 0 0`)
            // spike.setAttribute(`position`, `0 7 0`)
        }
   else if (sword.id == e.detail.body.el.id) {
        console.log("you colide with trap1")
       

        arrow.innerHTML = `<a-animation attribute="position"  to="-12.5 -3 -30" dur="800"></a-animation>`
    }
    
})
let not_collide = true
player.addEventListener('collide', e => {
    //console.log("somthing hit")
    
     if (trap2.id == e.detail.body.el.id  ) {
            not_collide = false
            // player.setAttribute(`position`, `0 0 0`)
            // spike.setAttribute(`position`, `0 7 0`)
            
        door.innerHTML = `<a-animation attribute="position"  to="-17.5 0 -17.5" dur="5000"></a-animation>`
        }
        if (trap3.id == e.detail.body.el.id) {
            not_collide = false
            // player.setAttribute(`position`, `0 0 0`)
            // spike.setAttribute(`position`, `0 7 0`)
            
        door.innerHTML = `<a-animation attribute="position"  to="-17.5 0 -17.5" dur="5000"></a-animation>`
        }
          if (trap4.id == e.detail.body.el.id && not_collide) {
            
            // player.setAttribute(`position`, `0 0 0`)
            // spike.setAttribute(`position`, `0 7 0`)
            
        door.innerHTML = `<a-animation attribute="position"  to="-17.5 0 4" dur="5000"></a-animation>`
        }
    
  
})
// player.addEventListener('collide', e => {
//     //console.log("somthing hit")
//      if (trap3.id == e.detail.body.el.id) {
            
//             // player.setAttribute(`position`, `0 0 0`)
//             // spike.setAttribute(`position`, `0 7 0`)
            
//         door.innerHTML = `<a-animation attribute="position"  to="-17.5 0 -17.5" dur="5000"></a-animation>`
//         }
  
// })
// player.addEventListener('collide', e => {
//     //console.log("somthing hit")
//      if (trap4.id == e.detail.body.el.id) {
            
//             // player.setAttribute(`position`, `0 0 0`)
//             // spike.setAttribute(`position`, `0 7 0`)
            
//         door.innerHTML = `<a-animation attribute="position"  to="-17.5 0 4" dur="5000"></a-animation>`
//         }
  
// })






            // console.log("Collider (below):");
            //  console.log(e.detail.body.el.id);
            //  console.log(goal.id)
            // console.log("Collider ID: " + e.detail.target.el.id);


            player.addEventListener('collide', e => {
                if (waterplane.id == e.detail.body.el.id) {
                    console.log("you touched the water! try again")
                    alert("you forgot how to swim and drowned, try again")
                    player.setAttribute(`position`, `0 0 0`)
                }
            })
             player.addEventListener('collide', e => {
                if (triangleplane.id == e.detail.body.el.id) {
                    console.log("you touched the floor! try again")
                    alert("try again")
                    player.setAttribute(`position`, `0 0 0`)
                }
            })
            player.addEventListener('collide', e => {
    if (laststep.id == e.detail.body.el.id) {
        console.log("end reached")
        alert('You reached the end! congratulations!')
        player.setAttribute(`position`, `0 0 8`)
         player.setAttribute(`rotation`, `0 270 0`)
    }
})
