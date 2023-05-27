window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){

    }
}

const toTop = () => window.scrollTo({top: 0, behavior: "smooth"});