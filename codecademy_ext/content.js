window.addEventListener('load', () => {
    const url = window.location.href;
    const targetUrl = 'https://www.codecademy.com/';

    if (url.includes(targetUrl)) {
        const interval = setInterval(() => {
            if (document.querySelector('svg[aria-label="Loading next content"]')) {
                clearInterval(interval); 
                get_iframe();
            } else {
                console.log("loading");
            }
        }, 1000); // Check every second
        


        const button = document.createElement('button');
        const myfooter = document.querySelector("footer");
        let browser = document.querySelector('div[data-testid="web-browser"]');
        let iframe;
        const link = document.createElement("a");

        function get_iframe() {
            if (browser) {
                iframe = browser.querySelector('iframe[title="Codecademy Web Browser"]');
                if (iframe) {
                    console.log(iframe);
                    link.href = iframe.src;
                    clearInterval(intervalId);
                } else {
                    console.log("Iframe not found");
                }
            }
        }

        const intervalId = setInterval(get_iframe, 1000);
        
        link.target = "_blank";

        button.textContent = "Helloww";
        link.className = "gamut-wddb2j-ResetElement-createButtonComponent"
        button.style.zIndex = 100;
        link.innerText = "Open In New Tab"
        

        



        const footButtons = myfooter.firstChild.childNodes[2];

        footButtons.insertBefore(link,footButtons.firstChild);

         setInterval(() => {
            link.href = iframe.src;
            console.log("updated")
        }, 6000);
    }
})
