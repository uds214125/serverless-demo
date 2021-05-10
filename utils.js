'use strict';

const cheerio = require('cheerio');

let getData = async (html) => {
    let data = [], desc = [], img = [];
    let dataObj = {};
    const $ = cheerio.load(html);

    dataObj.title = $('#productTitle').text();
    
    $('#feature-bullets > ul').each((i, elem) => {
        dataObj.description += $(elem).text();
    });
    $('#imgTagWrapperId > img').each((i, elem) => {
        img.push($(elem).attr('src'));
    });
    data.push({
        title: (dataObj.title).replace(/\n/g, ''),
        description: (dataObj.description).replace(/\n/g, ''),
        images: img
    });
    return data;
};

module.exports = { getData };