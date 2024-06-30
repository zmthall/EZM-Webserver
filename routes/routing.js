const express = require('express')
const helper = require('../files/helper.js')
var router = express.Router()

var fs = require("fs"), json;

function readJsonFileSync(filepath, encoding){
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

json = getConfig('data.json');

router.get('/', (request, response) => {
    response.render('index', {
        config: json,
        helper: helper,
        page: {
            title: 'High Quality Merchandise Retailer',
            name: 'Home',
            href: '/',
            meta: 'Welcome to Merchandise EZ, your one-stop shop for high-quality and affordable products. Discover our range of innovative gadgets and accessories. Shop now and enjoy the best deals!',
            page_type: 'index-page',
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/index.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('/policy/accessibility', (request, response) => {
    response.render('accessibility', {
        config: json,
        helper: helper,
        page: {
            title: 'Accessibility',
            name: 'Accessibility',
            href: '/policy/accessibility',
            page_type: 'policy-page',
            meta: `Discover Merchandise EZ's commitment to accessibility. Learn about our efforts to ensure our website and services are accessible to everyone, including those with disabilities.`,
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/page.css'
                },
                style3: {
                    href: '/stylesheets/policy.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('/contact-us', (request, response) => {
    response.render('contact-us', {
        config: json,
        helper: helper,
        page: {
            title: 'Contact Us',
            name: 'Contact Us',
            href: '/contact-us',
            page_type: 'contact-page',
            meta: 'Get in touch with Merchandise EZ for any inquiries, support, or feedback. Our team is here to help you with your shopping needs. Contact us today!',
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/page.css'
                },
                style3: {
                    href: '/stylesheets/contact.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('/about-us', (request, response) => {
    response.render('about-us', {
        config: json,
        helper: helper,
        page: {
            title: 'About Us',
            name: 'About Us',
            href: '/about-us',
            page_type: 'page',
            meta: 'Learn more about Merchandise EZ, our mission, and the values that drive us. Discover how we provide top-quality products and excellent customer service. Read our story.',
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/page.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('/policy/privacy-policy', (request, response) => {
    response.render('privacy-policy', {
        config: json,
        helper: helper,
        page: {
            title: 'Privacy Policy',
            name: 'Privacy Policy',
            href: '/policy/privacy-policy',
            page_type: 'policy-page',
            meta: 'Read Merchandise EZs privacy policy to learn how we collect, use, and protect your personal information. Your privacy is important to us.',
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/page.css'
                },
                style3: {
                    href: '/stylesheets/policy.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('/site-map', (request, response) => {
    response.render('site-map', {
        config: json,
        helper: helper,
        page: {
            title: 'Site Map',
            name: 'Site Map',
            href: '/site-map',
            page_type: 'page',
            meta: 'Explore the full layout of Merchandise EZ with our sitemap. Find links to all our product categories, information pages, and more to navigate our site easily.',
            page_styling: {
                style1: {
                    href: '/stylesheets/style.css'
                },
                style2: {
                    href: '/stylesheets/page.css'
                }
            },
            page_scripts: {
                script1: {
                    href: '/scripts/script.js'
                }
            }
        },
        layout: './layouts/main-layout'
    })
})

router.get('*', (request, response) => {
  response.render('404', {
    config: json,
    helper: helper,
    page: {
        title: 'Page not Found: 404',
        name: 'Page Not Found',
        href: 'ERROR',
        page_type: 'error-page',
        page_styling: {
            style1: {
                href: '/stylesheets/style.css'
            },
            style2: {
                href: '/stylesheets/page.css'
            },
            style3: {
                href: '/stylesheets/error.css'
            }
        },
        page_scripts: {
            script1: {
                href: '/scripts/script.js'
            }
        }
    },
    layout: './layouts/main-layout'
  })
})

module.exports = router