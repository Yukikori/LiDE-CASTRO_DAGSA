var year = new Date().getFullYear();
var copyrightYear = document.getElementById("copyrightYear")

if (year != 2022) {
    copyrightYear.innerText = `2022-${year}`
    console.log(`Current year not 2022, used 2022-${year}`)
} else {
    copyrightYear.innerText = `2022`
    console.log(`Current year is 2022`)
}