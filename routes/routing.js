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
            href: "/",
            page_type: "home-page"
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
            href: "/contact-us",
            page_type: "contact-page"
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
            href: "/about-us",
            page_type: "page"
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
            href: "/policy/privacy-policy",
            page_type: "policy-page"
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
            href: "/site-map",
            page_type: "page"
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
        href: 'ERROR',
        page_type: "error-page"
    },
    layout: './layouts/main-layout'
  })
})

module.exports = router