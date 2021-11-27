function handleClassNameForAnimation(list, className, offset) 
{ 
    let self = this; 
    self.list = list; 
    self.offset = offset; 
    self.className = className; 

    for (let i = 0; i < self.list.length; i++) 
    { 
        let el = document.querySelectorAll(self.list[i]); 

        if (!el.length){ continue } 

        for(let j = 0; j < el.length; j++) 
        { 
            el[j].classList.add(self.className); 
        } 

        new WOW( 
            { 
                boxClass: self.className, 
                offset: self.offset, 
            } 
        ).init(); 
    } 
}

let listElForAnim_1 = [ 
    '.main-section',
    // '.main-image'
]; 
let listElForAnim_2 = [ 
    '.main-image img'
]; 
// let listElForAnim_3 = [ 
    
// ]; 

handleClassNameForAnimation(listElForAnim_1, 'fadeInUp', 100); 
handleClassNameForAnimation(listElForAnim_2, 'fadeIn', 100); 
// handleClassNameForAnimation(listElForAnim_3, 'widthIn', 50);