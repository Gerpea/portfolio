"use client";

import React, { useCallback, useMemo } from 'react'
import styles from './styles.module.css'

const asciiLogo = `
                                       .--                                    
                                     :===: .                                  
                                     -===-..                                  
                                  .-==++==--:.    .                           
                                .-+++===++++=---.  :-                         
                               ==++====++++++==----===:                       
                             .+++======++*##########*+=-                      
                             .+++===++++#=.....*%@@@@#=.                      
                            :-+++++++*++        .@@@@: .                      
                            -+++++++%@=     ....:@@@@:..                      
                            :-****%@@@=    =@@@@%=====%-                      
                             .@@@@@@@@*=   =@@@#=+++++#-                      
                              #@@@@@@@@@#= :++:-++#*+++++-..                  
.           :----              *@@@@@@@@********************=.                
.               .-- ..         .:@@@@@@@%**##%@@@@@-**.......                 
.........           .:.           +@@@@@@@@@@@#######*=:                      
.:.                     -==-   :**%@@@@@@@@@%*-:=+=====:                      
 .:.  :+=---------------=++*%*=*@@@@@@@@@@@@#-.                               
   .:..:=+++++++++++++=++++++#%@@@@@@@@@@@@@@@-.                              
    -:::::%@@@#**+++++=++++++++*%%%%%%+======+- :++=+--.                      
      ::::::%%@@@%%*==+++++==+++*@@@@@=........ =#+++++=-                     
      ::::::::%@@@@@@@%++++++++++@@@@@-         =@+++++++=.                   
             .:=@@@@@@@@@#+#@@@@@@@@@@-         =@@@******==.                 
             .:::*@@@@@@@@@@@@@@@@@@@@-         =@@@@@@#++                    
             .:::::%%%@@@@@@@@@@@@@@@@-        .+@@@@@=.                      
             .::::::::=#@@@@@@@@@@@%#*-::::::::*%%%%=                         
               -#=::::::*#%@@@@@@@%#+:::::::::.                               
                 *+::::::::*******-:::::::-::                                 
                   .:::----:::::::::::::-+*.                                  
                     -=+***:........==-+*=                                    
                     :-+++==:       -=+++=-                                   
                       +======.   ==::=====---   :--                          
                     -==============::=============-                          
                      .+===========. -*===========:                           
                        .++=====-.      -=+====-:                             
                         -+***-.         -#**=.                               
                           ...            ...                                 
                                                                                          
`
const Logo: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const handleMouseEnter: React.MouseEventHandler<HTMLSpanElement> = useCallback((event) => {
    event.currentTarget.classList.add(styles.char)
  }, [])

  const characters = useMemo(() => (<>
    {Object.values(asciiLogo).map((char, i) => (
      <span key={i} onMouseEnter={handleMouseEnter}>{char}</span>
    ))}
  </>), [handleMouseEnter])

  return <div className={`${styles.logo} ${className}`} {...rest}>
    {characters}
  </div>
}

export default Logo