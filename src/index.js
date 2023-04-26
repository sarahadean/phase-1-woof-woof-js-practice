
// STEP 4: TOGGLE GOOD DOG
// When a user clicks the Good Dog/Bad Dog button, two things should happen:

// The button's text should change from Good to Bad or Bad to Good
// The corresponding pup object in the database should be updated to reflect the new isGoodDog value

document.addEventListener('DOMContentLoaded', () => {
    //global variables
    const dogBar = document.querySelector("#dog-bar")
    
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(pups => {
        const firstPup = pups[0]
        pups.map(pup => {
            const span = document.createElement('span')
            const p = document.createElement('p')
            span.textContent = pup.name
           span.addEventListener('click', () => {displayPups(pup)
            })

            p.appendChild(span)
            dogBar.appendChild(p)
        })
        displayPups(firstPup)
    })
})
const pupImg = document.createElement('img')
const h2 = document.createElement('h2')
const button = document.createElement('button')

function displayPups(pup){
    const dogInfo = document.querySelector("#dog-info")
    pupImg.src = pup.image
    h2.textContent = pup.name
    button.textContent = pup.isGoodDog
    pup.isGoodDog? button.textContent = "Good Dog" : button.textContent = "Gooder Dog"
    button.addEventListener('click', () => {
    pup.isGoodDog = !pup.isGoodDog
    pup.isGoodDog? button.textContent = "Good Dog" : button.textContent = "Gooder Dog"
    })

    dogInfo.appendChild(pupImg)
    dogInfo.appendChild(h2)
    dogInfo.appendChild(button)
}
       










