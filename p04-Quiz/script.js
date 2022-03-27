let nilai = 0

function handleCorrect() {
    let form = document.getElementById("form-quiz");
    console.log("cek elemen2 di form",form);

    let q1 = form.elements["q1"].value;
    let q2 = form.elements["q2"].value;
    let q3 = form.elements["q3"].value;
    let q4 = form.elements["q4"].value;
    console.log("cek radio", q1, q2, q3, q4);

    if (q1 == "" || q2 == "" || q3 == "" || q4 == "") {
        alert(`Minta tolong diisi semua dulu ya 😉`)
    } else {
        nilai = 0;
        let jawaban = [];
        jawaban.push(q1, q2, q3, q4);
        console.log(jawaban);

        jawaban.forEach(value => {
            if (value == "true") {
                nilai += 25
            } else {
                nilai += 0
            }
        });
        console.log("nilai", nilai);

        document.getElementById("nilai").innerHTML = `Nilai anda ${nilai.toString()}`
    }
};

function handleReset() {
    let q1 = document.getElementsByName("q1");
    let q2 = document.getElementsByName("q2");
    let q3 = document.getElementsByName("q3");
    let q4 = document.getElementsByName("q4");

    // cara 1
    q1.forEach((item) => item.checked = false)
    q2.forEach((item) => item.checked = false)
    q3.forEach((item) => item.checked = false)
    
    // cara 2
    for (i = 0; i < q4.length; i++) {
        q4[i].checked = false;
    }
    nilai = 0;
    jawaban = [];
    document.getElementById("nilai").innerHTML = ""
};