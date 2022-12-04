var year = new Date().getFullYear();

if (year != 2022) {
    document.getElementById("copyrightYear").textContent = `2022-${year}`
    console.log(`Current year not 2022, used 2022-${year}`)
} else {
    document.getElementById("copyrightYear").textContent = `2022`
    console.log(`Current year is 2022`)
}