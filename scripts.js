function saveDataToFile() {
    const saveText = "tmp, hello, world\none, two, three";

    // file setting
    const text = saveText;
    const name = "sample.xlsx";
    const type = "text/plain";

    // create file
    const a = document.createElement("a");
    const file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
}



/**  timeout | null */
let debauncedTimeout = null

document.getElementById("testinput").addEventListener('input', (e) => {
    if (d) {
        clearTimeout(d)
    }

    d = setTimeout(() => {
        console.log(e.target.value)
        d = null
    }, 500)
})