window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbarshrink')
        } else {
            navbarCollapsible.classList.add('navbarshrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
});

function commentsubmit(){
    var author = document.getElementById('comment_author').value;
    var commentview = document.getElementById('commenting').value;
    if(author===""||author===null){
        alert('Please enter your name')
    }
    else{
        if(commentview===""||author===null)
        {
            alert('Please enter your message')
        }
        else
        {
            //Container
            const note = document.createElement('Div');
            note.classList.add('comments')
            note.setAttribute('id','note1')
            const noteap = document.getElementById('comment');
            noteap.appendChild(note);

            //LOGO
            const user = document.createElement('img');
            user.setAttribute('src','drawable/img_568656.png')
            user.setAttribute('alt','UserLogo')
            user.setAttribute('height','80px')
            user.setAttribute('style','margin-bottom: -25px')
            user.setAttribute('id','logo')
            const userap = document.getElementById('note1');
            userap.appendChild(user);

            //Username
            const username = document.createElement('p');
            username.classList.add('Username')
            username.setAttribute('id','username')
            const usernameap = document.getElementById('note1');
            usernameap.appendChild(username);

            //Comment
            const actualcom = document.createElement('p')
            actualcom.classList.add('Commentcontent')
            actualcom.setAttribute('id','actualcomment')
            const actualcomap = document.getElementById('note1')
            actualcomap.appendChild(actualcom)
            
            //breaking line
            const hr=document.createElement('hr')
            hr.setAttribute('style','display:block;')
            const hrap=document.getElementById('note1')
            hrap.appendChild(hr)

            //Inheriting Username
            
            username.textContent = author;
            
            //Inheriting Comment
            
            actualcom.textContent = commentview;
        }
    }    
}
