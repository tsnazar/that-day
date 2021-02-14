var axios = require('axios');
var parse = require('node-html-parser').parse;

var wikiUrl = 'https://en.wikipedia.org/w/api.php';


async function get_image_info(el){
    try {
        var title = el.title;
        let download_query = await axios(wikiUrl, {params:{
                        action: 'query',
                        prop: 'pageimages',
                        titles: title,
                        format: 'json',
                        piprop:'original'
                    }});
        
        // console.log(download_query.data.query.pages[Object.keys(download_query.data.query.pages)]);
        el.urls = [download_query.data.query.pages[Object.keys(download_query.data.query.pages)].original.source];
        
        return el;
    }
    catch(err) {
        if(err.name == 'TypeError'){}
        else {console.log(err.response);}
    }
}

async function get_that_day_articles(){
    try{
        var params = {
            params: {
                action: 'parse',
                page: 'Main Page',
                format: 'json',
                prop: 'text',
                wrapoutputclass: '',
            }
        }
        let response = await axios(wikiUrl, params)
        
        var articles = [];
        var root = parse(response.data.parse.text['*']);
        var otd = root.querySelector('#mp-otd');
        var li_list = otd.querySelector('ul').querySelectorAll('li');
        for (let i=0; i< li_list.length; i++){
            var article = {};
            var el = li_list[i];
            article.title = el.querySelector('b').querySelector('a').getAttribute('title');
            article.year = el.text.split(' – ')[0];
            article.text = el.text.split(' – ')[1];
            article.rel_article = "https://en.wikipedia.org/" + el.querySelector('b').querySelector('a').getAttribute('href');
            articles.push(article);
        }
        
        const promises = articles.map(element=>get_image_info(element))
        await Promise.all(promises);
        
        return articles;
    }
    catch(err){
        console.err(err);
    }
    
}

module.exports = {get_that_day_articles}