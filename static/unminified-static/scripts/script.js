class WebHandler {
    constructor() {
        this.navigation = {
            mobileNavOpenButton: document.querySelector('[data-mobile-nav-button]'),
            movileNavCloseButton: document.querySelector('[data-mobile-nav-close-button]'),
            mobileNavDrawer: document.querySelector('[data-mobile-nav-drawer]')
        }

    }

    initializeOnLoad() {
        this.navigation.mobileNavOpenButton.addEventListener("click", (event) => {
            let drawer = this.navigation.mobileNavDrawer
            if(drawer.classList.contains("hidden")) {
                drawer.classList.remove("hidden")
            }
            setTimeout(() => {
                drawer.classList.add("open")
                document.body.classList.add("no-scroll")
            }, 1);
        })

        this.navigation.movileNavCloseButton.addEventListener("click", (event) => {
            let drawer = this.navigation.mobileNavDrawer
            if(drawer.classList.contains("open")) {
                drawer.classList.remove("open")
            }

            setTimeout(() => {
                drawer.classList.add("hidden")
                document.body.classList.remove("no-scroll")
            }, 500);
        })
    }
}

const webHandler = new WebHandler()
webHandler.initializeOnLoad()