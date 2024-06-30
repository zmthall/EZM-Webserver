class HeroShotManager {
    constructor() {
        this.heroShot = {
            container: document.querySelector('[data-hero-shot-container]'),
            text: document.querySelector('[data-hero-shot-text]'),
            video: {
                video: {
                    loop: true,
                    muted: true,
                    autoplay: true
                },
                source: {
                    src: '/videos/happy-shopping-compressed.mp4',
                    type: 'video/mp4'
                }
            },
            image: {
                src: '/images/index/happy-shopping_1600.jpg',
                alt: 'Hero shot with a picture of a lady holding shopping bags with a big smile on her face'
            }
        }

        const _this = this

        this.onPageLoad(_this)
    }

    onPageLoad(_this) {
        document.addEventListener('DOMContentLoaded', () => {
            if(window.screen.width > 768)
                _this.loadVideo(_this)
            else 
                _this.loadImage(_this)

            setTimeout(() => {
                _this.heroShot.text.classList.add('show')
            }, 1000);
        })
    }

    loadVideo(_this) {
        const videoEl = document.createElement('video')
        const sourceEl = document.createElement('source')

        const videoSettings = _this.heroShot.video
        videoEl.loop = videoSettings.video.loop
        videoEl.muted = videoSettings.video.muted
        videoEl.autoplay = videoSettings.video.loop
        videoEl.setAttribute('data-hero-shot', 'video')
        videoEl.classList.add('index-hero-shot-video')
        
        sourceEl.src = videoSettings.source.src
        sourceEl.type = videoSettings.source.type

        videoEl.append(sourceEl)

        _this.heroShot.container.append(videoEl)
        _this.heroShot.video = document.querySelector('[data-hero-shot="video"]')
    }

    loadImage(_this) {
        const imageEl = document.createElement('img')

        const imageSettings = _this.heroShot.image

        imageEl.src = imageSettings.src
        imageEl.alt = imageSettings.alt
        imageEl.setAttribute('data-hero-shot', 'image')

        imageEl.classList.add('index-hero-shot-image')

        _this.heroShot.container.append(imageEl)
        _this.heroShot.image = document.querySelector('[data-hero-shot="image"]')
    }

}

const heroShotManager = new HeroShotManager()