// Work in progress

// gets file path, anchor tags, socmed handle spans and reference link spans
var filePath = location.pathname;
var facebookHref = document.getElementById("facebook-link");
var twitterHref = document.getElementById("twitter-link");
var youtubeHref = document.getElementById("youtube-link");
var fbSpan = document.getElementById("facebook-handle");
var twtSpan = document.getElementById("twitter-handle");
var ytSpan = document.getElementById("youtube-handle");
var fbCite = document.getElementById("facebook-link-cite");
var twtCite = document.getElementById("twitter-link-cite");
var ytCite = document.getElementById("youtube-link-cite");

// get all spans with class "authorCitation"
var authorCite = document.querySelectorAll(".authorCitation")

// get booleans for pathnames
var beginnings = filePath.includes("beginnings-of-mobile-gaming");
var classicGenres = filePath.includes("classic-mobile-genres");
var newerGenres = filePath.includes("newer-mobile-genres");
var mobileGamingToday = filePath.includes("mobile-gaming-today");

// set href and socmed handles by calling a function
function setHrefHandlesAndCite(author, fbHandle, twtHandle, ytHandle) {
    if (typeof author === 'string' && typeof fbHandle === 'string' && typeof twtHandle === 'string' && typeof ytHandle === 'string') {
        var fbLink = `https://facebook.com/${fbHandle}/`;
        var twtLink = `https://twitter.com/${twtHandle}/`;
        var ytLink = `https://youtube.com/@${ytHandle}/`;

        facebookHref.setAttribute("href", fbLink);
        fbSpan.innerText = `@${fbHandle}`;
        twitterHref.setAttribute("href", twtLink);
        twtSpan.innerText = `@${twtHandle}`;
        youtubeHref.setAttribute("href", ytLink);
        ytSpan.innerText = `@${ytHandle}`;

        authorCite.forEach(span => {
            span.innerText = author;
        });

        fbCite.innerText = fbLink;
        twtCite.innerText = twtLink;
        ytCite.innerText = ytLink;
    } else {
        console.log("Check calling of function, make sure that all variables are strings")
    }
};

// conditions for specific webpages - call setHrefAndHandle
if (beginnings==true) {
    // use angry birds handles
    setHrefHandlesAndCite("Angry Birds", "angrybirds", "AngryBirds", "AngryBirds");
} else if (classicGenres==true) {
    // use bejeweled handles
    setHrefHandlesAndCite("Bejeweled", "bejeweled", "bejeweledgame", "Bejeweled");
} else if (newerGenres==true) {
    // use codm handles
    setHrefHandlesAndCite("Call of Duty: Mobile", "callofdutymobile", "PlayCODMobile", "callofdutymobile");
} else if (mobileGamingToday==true) {
    // use genshin handles
    setHrefHandlesAndCite("Genshin Impact", "Genshinimpact", "GenshinImpact", "GenshinImpact");
};