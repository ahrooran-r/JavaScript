let isAccountLocked = true
let userRole = 'shit'

if (isAccountLocked && userRole === 'admin'){
    console.log ('Account is locked but you are authorized to unlock it again')
} else if (isAccountLocked && userRole !== 'admin'){
    console.log ('Account is locked for you!')
} else {
    console.log ('Account is unlocked!')
}