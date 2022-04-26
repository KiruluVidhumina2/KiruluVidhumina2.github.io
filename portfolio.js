const nightMode = document.querySelector('#night');
const grad = document.querySelectorAll('.grad');
const who = document.querySelector('#who');
const whoTopic = document.querySelector('#who h1');
const whop = document.querySelector('#whop')
const btn = document.querySelector('#button');
const olResult = document.querySelector('#olResults');
const alResult = document.querySelector('#alResults');
const hi = document.querySelector('#hi');
const kirulu = document.querySelector('#kirulu');
const im = document.querySelector('#im');
const contactBtn = document.querySelector('#contact-btn');
const navBar = document.querySelector('#nav_bar');
const gridCover = document.querySelector('#gridCover');
const varTopic = document.querySelector('#varTopic');
const varCover = document.querySelector('#varCover');

// var tl = new TimelineMax();
// const controller = new ScrollMagic.Controller();



// tl.from("#whop", 1, {opacity: 0, scale: 0});

// const scene = new ScrollMagic.Scene({
//     triggerElement: "#who"
// })

//     .setTween(tl)
//         .addTo(controller)






document.addEventListener('scroll', function(){
    const clientHeight = document.documentElement.clientHeight;
    const whoy = who.getBoundingClientRect().y;
    const aboutY = document.getElementById('aboutMe').getBoundingClientRect().y;
    const skillsY = document.getElementById('skills').getBoundingClientRect().y;
    const resultY = document.getElementById('edu').getBoundingClientRect().y;
    const blogY = document.getElementById('blog').getBoundingClientRect().y;
    const navY = document.getElementById('nav_bar').getBoundingClientRect().y;

    
    console.log(whoy, clientHeight, resultY, navY);

    if(navY < -4){
      document.getElementById('nav_links').style.background = 'linear-gradient(144deg, rgba(96,212,14,1) 0%, rgba(0,178,237,1) 100%)';
    }else{
      document.getElementById('nav_links').style.background = 'transparent';
    }

    if(whoy < 385.421875) {
        console.log('here')
        whoTopic.style.animation = 'pop 1.5s';
        whoTopic.style.visibility = 'visible';
        whop.style.animation = 'pop 1.5s';
        whop.style.visibility = 'visible';
        document.getElementById('myImage').style.animation = 'pop 1.5s';
        document.getElementById('myImage').style.animationDelay = '200ms';
        document.getElementById('myImage').style.opacity = '100%';
    }

    if(aboutY < 507.546875){
      document.getElementById('aboutTopic').style.animation = 'pop 1.5s';
      document.getElementById('aboutTopic').style.visibility = 'visible';
    }

    if(aboutY < 537.546875){
      for(let i = 0; i < document.getElementsByClassName('aboutMeDescription').length; i++){
        document.getElementsByClassName('aboutMeDescription')[i].style.animation = 'pop 1.5s';
        document.getElementsByClassName('aboutMeDescription')[i].style.visibility = 'visible';
      }
    }

    if (skillsY < 350.546875){
      document.getElementById('skillTopic').style.animation = 'pop 1s';
      document.getElementById('skillTopic').style.opacity = '100%';
      document.getElementById('skillIcon').style.paddingTop = '20px';
      document.getElementById('skillIcon').style.opacity = '100%';
      document.getElementById('bars').style.animation = 'pop 1s';
      document.getElementById('bars').style.animationDelay = '500ms';
      document.getElementById('bars').style.opacity = '100%';
    }

    if(resultY < 300.546875){
      document.getElementById('eduTopic').style.animation = 'pop 1s';
      document.getElementById('eduTopic').style.opacity = '100%';
      document.getElementById('eduIcon').style.paddingTop = '10px';
      document.getElementById('eduIcon').style.opacity = '100%';
      document.getElementById('resultBox').style.animation = 'pop 1s';
      document.getElementById('resultBox').style.animationDelay = '400ms';
      document.getElementById('resultBox').style.opacity = '100%';
    }

    if(blogY < 300.546875){
      document.getElementById('blogHeading').style.animation = 'pop 1s';
      document.getElementById('blogHeading').style.opacity = '100%';
      document.getElementById('blog1').style.transform = 'scale(1)';
      document.getElementById('blog2').style.transform = 'scale(1)';
    }

    console.log('ev')
});

const navBary = navBar.getBoundingClientRect().y;
if(navBary < 10){
  hi.style.top = '30vh';
  hi.style.opacity = '100%';
  im.style.top = '44vh';
  im.style.opacity = '100%';
  kirulu.style.top = '52vh';
  kirulu.style.opacity = '100%';
  contactBtn.style.top = '65vh';
  contactBtn.style.opacity = '100%';
}


function alevel(){
    btn.style.left = '50%';
    olResult.style.left = '-15vw';
    alResult.style.left = '13vw';
    olResult.style.opacity = '0%';
    alResult.style.opacity = '100%';
}



function olevel(){
    btn.style.left = '0px';
    olResult.style.left = '13vw';
    alResult.style.left = '35vw';
    alResult.style.opacity = '0%';
    olResult.style.opacity = '100%';
}




var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);

      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.style.visibility = 'visible';
          status.innerHTML = "Message Successfully Sent!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

var successful = document.getElementById("status");



document.getElementById('navBars').addEventListener('click', function(){
  document.getElementById('slideNav').style.left = '0';
})

document.getElementById('cross').addEventListener('click', function(){
  document.getElementById('slideNav').style.left = '100%';
})

document.getElementById('aboutMeTag').addEventListener('click',function(){
  document.getElementById('slideNav').style.left = '100%';
})

document.getElementById('blogTag').addEventListener('click',function(){
  document.getElementById('slideNav').style.left = '100%';
})

varCover.addEventListener('mouseover', function(){
  varTopic.style.transition = '.5s';
  varTopic.style.transform = 'scale(1.2)';
})

varCover.addEventListener('mouseleave', function(){
  varTopic.style.transform = 'scale(1)';
})

gridCover.addEventListener('mouseover', function(){
  gridCover.style.backgroundSize = '110%';
  gridCover.style.filter = 'saturate(100%)';
})

gridCover.addEventListener('mouseleave', function(){
  gridCover.style.filter = 'saturate(0%)';
  gridCover.style.backgroundSize = '100%';
})



//dark mode button in normal nave bar
document.getElementById('darkMode').addEventListener('click', function(){ 
  document.getElementById('nav_bar').style.backgroundImage = 'url(images/bg1.jpg),linear-gradient(grey, black)';
  document.getElementById('nav_bar').style.backgroundBlendMode = 'multiply';
  document.getElementById('name').style.color = 'white';
  document.getElementById('contact-btn').style.color = 'white';
  document.getElementById('contact-btn').style.borderColor = 'white';
  document.getElementById('messageIcon').style.color = 'rgba(96,212,14,1)';
  document.getElementById('topic').style.color = 'white';
  document.querySelector('#cssGrid').style.background = '#303030';
  document.querySelector('#cssVar').style.background = '#303030';

  for(let i = 0; i < document.getElementsByClassName('section').length; i+=2){
    document.getElementsByClassName('section')[i].style.background = 'black';
    document.getElementsByClassName('section')[i].style.color = 'white';
  }

  for(let i = 1; i <= document.getElementsByClassName('section').length; i+=2){
    document.getElementsByClassName('section')[i].style.background = '#303030';
    document.getElementsByClassName('section')[i].style.color = 'white';
  }

  document.querySelector('#cssGrid').style.color = 'white';
  document.querySelector('#cssVar').style.color = 'white';
  document.getElementById('who').style.color = 'white';
  document.getElementById('aboutMe').style.color = 'black';
  document.getElementById('aboutTopic').style.color = 'white';
  document.getElementById('contactForm').style.color = 'white';
  document.querySelector('#modeBtn').style.border = '2px solid white';
  document.querySelector('#toggleCircle').style.left = '0%';
  document.querySelector('#toggleCircle').style.backgroundColor = 'white';
  document.querySelector('#toggleCircleNew').style.left = '0%';
  document.getElementById('blog1Topic').style.color = 'white';
  document.getElementById('blog2Topic').style.color = 'white';
  document.getElementById('sendIcon').style.color = 'white';


  const icons = document.getElementsByTagName('i');
  const tags = document.getElementsByClassName('tag');

  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = 'white';
  };
  i=0;
  for(let i = 0; i < icons.length; i++){
    tags[i].style.color = 'white';
  };
});


document.getElementById('lightMode').addEventListener('click', function(){
  document.getElementById('nav_bar').style.backgroundImage = 'url(images/bg1.jpg),linear-gradient(144deg, rgba(96,212,14,1) 0%, rgba(0,178,237,1) 100%)';
  document.getElementById('nav_bar').style.backgroundBlendMode = 'multiply';  
  document.getElementById('name').style.color = 'black';
  document.getElementById('contact-btn').style.color = 'black';
  document.getElementById('contact-btn').style.borderColor = 'black';
  document.getElementById('messageIcon').style.color = 'rgba(96,212,14,1)';
  document.querySelector('body').style.color = 'black';
  document.querySelector('body').style.background = 'white';
  document.getElementById('topic').style.color = 'black';
  document.getElementById('aboutTopic').style.color = 'black';
  document.getElementById('blogTag').style.color = 'white';
  document.querySelector('#cssGrid').style.background = 'white';
  document.querySelector('#cssVar').style.background = 'white';
  document.querySelector('#cssGrid').style.color = 'black';
  document.querySelector('#cssVar').style.color = 'black';
  document.getElementById('sendIcon').style.color = 'black';


  for(let i = 0; i < document.getElementsByClassName('section').length; i++){
    document.getElementsByClassName('section')[i].style.background = 'white';
    document.getElementsByClassName('section')[i].style.color = 'black';
  }
  
  document.getElementById('who').style.color = 'black';
  document.getElementById('aboutTopic').style.color = 'black';
  document.querySelector('#modeBtn').style.border = '2px solid black';
  document.querySelector('#toggleCircle').style.left = '50%';
  document.querySelector('#toggleCircle').style.backgroundColor = 'black';
  document.querySelector('#toggleCircleNew').style.left = '50%';

  
  const icons = document.getElementsByTagName('i');
  const tags = document.getElementsByClassName('tag');

  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = 'black';
  };

  for(let i = 0; i < tags.length-2; i++){
    tags[i].style.color = 'black';
  };

  document.getElementById('cross').style.color = 'white';
  document.getElementById('twitterBig').style.color  = 'white';
  document.getElementById('linkedinBig').style.color  = 'white';
  document.getElementById('facebookBig').style.color  = 'white';
  document.getElementById('instagramBig').style.color  = 'white';
  document.getElementById('githubBig').style.color  = 'white';

});

//dark mode button in sliding nave bar
document.getElementById('darkModeNew').addEventListener('click', function(){
  document.getElementById('nav_bar').style.backgroundImage = 'url(images/bg1.jpg),linear-gradient(grey, black)';
  document.getElementById('nav_bar').style.backgroundBlendMode = 'multiply';
  document.getElementById('name').style.color = 'white';
  document.getElementById('contact-btn').style.color = 'white';
  document.getElementById('contact-btn').style.borderColor = 'white';
  document.getElementById('topic').style.color = 'white';
  document.querySelector('body').style.background = '#303030';
  document.querySelector('#cssGrid').style.background = '#303030';
  document.querySelector('#cssVar').style.background = '#303030';

  for(let i = 0; i < document.getElementsByClassName('section').length; i+=2){
    document.getElementsByClassName('section')[i].style.background = 'black';
    document.getElementsByClassName('section')[i].style.color = 'white';
  }

  for(let i = 1; i <= document.getElementsByClassName('section').length; i+=2){
    document.getElementsByClassName('section')[i].style.background = '#303030';
    document.getElementsByClassName('section')[i].style.color = 'white';
  }

  document.querySelector('#cssGrid').style.color = 'white';
  document.querySelector('#cssVar').style.color = 'white';
  document.getElementById('who').style.color = 'white';
  document.getElementById('aboutMe').style.color = 'black';
  document.getElementById('aboutTopic').style.color = 'white';
  document.getElementById('contactForm').style.color = 'black';
  document.querySelector('#modeBtn').style.border = '2px solid white';
  document.querySelector('#toggleCircle').style.left = '0%';
  document.querySelector('#toggleCircle').style.backgroundColor = 'white';
  document.querySelector('#toggleCircleNew').style.left = '0%';
  document.getElementById('blog1Topic').style.color = 'white';
  document.getElementById('blog2Topic').style.color = 'white';
  document.getElementById('sendIcon').style.color = 'white';


  const icons = document.getElementsByTagName('i');
  const tags = document.getElementsByClassName('tag');

  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = 'white';
  };
  i=0;
  for(let i = 0; i < icons.length; i++){
    tags[i].style.color = 'white';
  };
});

document.getElementById('lightModeNew').addEventListener('click', function(){
  document.getElementById('nav_bar').style.backgroundImage = 'url(images/bg1.jpg),linear-gradient(144deg, rgba(96,212,14,1) 0%, rgba(0,178,237,1) 100%)';
  document.getElementById('nav_bar').style.backgroundBlendMode = 'multiply';
  document.getElementById('name').style.color = 'black';
  document.getElementById('contact-btn').style.color = 'black';
  document.getElementById('contact-btn').style.borderColor = 'black';  
  document.querySelector('body').style.color = 'black';
  document.querySelector('body').style.background = 'white';
  document.getElementById('topic').style.color = 'black';
  document.getElementById('blogTag').style.color = 'white';
  document.querySelector('#cssGrid').style.background = 'white';
  document.querySelector('#cssVar').style.background = 'white';
  document.querySelector('#cssGrid').style.color = 'black';
  document.querySelector('#cssVar').style.color = 'black';
  document.getElementById('sendIcon').style.color = 'black';


  for(let i = 0; i < document.getElementsByClassName('section').length; i++){
    document.getElementsByClassName('section')[i].style.background = 'white';
    document.getElementsByClassName('section')[i].style.color = 'black';
  }
  
  document.getElementById('who').style.color = 'black';
  document.getElementById('aboutMe').style.color = 'black';
  document.getElementById('aboutTopic').style.color = 'black';
  document.getElementById('contactForm').style.color = 'black';
  document.querySelector('#modeBtn').style.border = '2px solid black';
  document.querySelector('#toggleCircle').style.left = '50%';
  document.querySelector('#toggleCircle').style.backgroundColor = 'black';
  document.querySelector('#toggleCircleNew').style.left = '50%';
  
  const icons = document.getElementsByTagName('i');
  const tags = document.getElementsByClassName('tag');

  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = 'black';
  };

  for(let i = 0; i < tags.length-2; i++){
    tags[i].style.color = 'black';
  };

  document.getElementById('cross').style.color = 'white';
  document.getElementById('twitterBig').style.color  = 'white';
  document.getElementById('linkedinBig').style.color  = 'white';
  document.getElementById('facebookBig').style.color  = 'white';
  document.getElementById('instagramBig').style.color  = 'white';
  document.getElementById('githubBig').style.color  = 'white';

});


function cssGridSlide(){
  document.getElementById('slider').style.right = '100%';
  document.getElementById('cssGrid').style.right = '0';
}

function cssVarSlide(){
  document.getElementById('slider').style.right = '100%';
  document.getElementById('cssVar').style.right = '0';
}


function back1(){
  document.getElementById('slider').style.right = '-100%';
  document.getElementById('cssGrid').style.right = '-100%';
}

function back2(){
  document.getElementById('slider').style.right = '-100%';
  document.getElementById('cssVar').style.right = '-100%';
}


const aboutTitle = document.getElementsByClassName('aboutTiles');

for(let i = 0; i < aboutTitle.length; i++){
  aboutTitle[i].addEventListener('mouseover', function(){
    aboutTitle[i].style.transform = 'scale(1.072)';
  });

  aboutTitle[i].addEventListener('mouseleave', function(){
    aboutTitle[i].style.transform = 'scale(1)';
  });
};


contactBtn.addEventListener('mouseover', function(){
  contactBtn.style.transition = '.5s';
  document.getElementById('messageIcon').style.opacity = '1';
})

contactBtn.addEventListener('mouseleave', function(){
  contactBtn.style.transition = '.5s';
  document.getElementById('messageIcon').style.opacity = '0';
})


