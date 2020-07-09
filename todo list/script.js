window.onload = function() {
    let task = document.getElementById('task')
    let show = document.getElementById('show')
    let add = document.getElementById('add')

    add.onclick = function() {

        // One Way
        let li = document.createElement('li')
        li.innerText = task.value


        let btn = document.createElement('button')
        btn.innerText = 'x'

        btn.onclick = function(event) {
            console.log(event.target.parentElement)
            event.target.parentElement.remove()
        }



        let ubt = document.createElement('button')
        ubt.innerText = '👆'
        ubt.onclick = function(event) {
            // eent.target =Up button
            // event.target.parenteleemnt= the <li> item
            // event.target.parentElement.parentElement is todo lisrt

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }


        let dbt = document.createElement('button')
        dbt.innerText = '👇'
        dbt.onclick = function(event) {
            // eent.target =Up button
            // event.target.parenteleemnt= the <li> item
            // event.target.parentElement.parentElement is todo lisrt

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, //insert next elemnt
                event.target.parentElement, //before current element
            )
        }





        li.appendChild(ubt)
        li.appendChild(dbt)
        show.appendChild(li)
        li.appendChild(btn)







        // Another Way  (bad performance)
        // show.innerHTML += '<li>' + task.value + '</li>'




    }

}