let isGuest1Vegan = false
let isGuest2Vegan = false

if (isGuest1Vegan && isGuest2Vegan){
    console.log ('Offer vegan dishes only')
} else if (isGuest1Vegan || isGuest2Vegan){
    console.log ('Offer both vegan and non-vegan')
} else {
    console.log ('Offer non vegan only')
}