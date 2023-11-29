{

    document.documentElement.classList.remove('no-js');



    function setSavedTheme(){
        const savedTheme = localStorage.getItem("theme") ;
        if (savedTheme) {
            setTheme(savedTheme) ;
            document.getElementById("themeToggle").checked = savedTheme ==="alternate" ;
        }
    }

    document.addEventListener("DOMContentLoaded",setSavedTheme) ;

function setTheme(theme) {
    const root = document.documentElement ; 
    if (theme === "alternate") {
        root.style.setProperty("background","var(--alternate-main-color)") ;
        root.style.setProperty("color","var(--alternate-text-color)") ; 
        document.querySelector("header h1").style.backgroundColor = "black" ;
        document.querySelector("header h1").style.color = "white" ;
        document.querySelector("header > nav ").style.backgroundColor = "purple" ; 

    }
    else {
        root.style.setProperty("background","var(--main-color)") ;
        root.style.setProperty("color","var(--text-color)") ;    
        document.querySelector("header h1").style.backgroundColor = "brown" ;
        document.querySelector("header h1").style.color = "var(--header-color)" ;
        document.querySelector("header > nav ").style.backgroundColor = "tan" ; 


    }

}

function toggleTheme(){
    const currentTheme = localStorage.getItem('theme') || 'normal' ;
    const newTheme =  currentTheme==="normal"?"alternate" : "normal" ;
    localStorage.setItem("theme",newTheme) ;
    setTheme(newTheme) ;
    
}



}

