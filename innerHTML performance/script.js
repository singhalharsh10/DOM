window.onload = function() {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')

    print.onclick = function() {
        let start = new Date().getTime();
        let N = parseInt(num.value)

        let a = ' ' //string variable

        for (let i = 1; i <= N; i++) {
            // One Way
            // a += '<li>' + i + '</li>'

            // Another Way
            let item = document.createElement('li')
            item.innerText = i
            list.appendChild(item)


        }


        list.innerHTML = a

        console.log(new Date().getTime() - start);

    }

}