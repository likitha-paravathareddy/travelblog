
$(document).ready(function () {
    var url = 'http://127.0.0.1:3007/users';
    $.get(url, function (data, status) {
        user_data = JSON.parse(data);
        mail = localStorage.getItem("currentLoggedUser");

        for (let i = 0; i < user_data.length; i++) {

            const obj = user_data[i]

            if (user_data[i].mail == mail) {
                document.getElementById("name").value = obj.name
                document.getElementById("username").value = obj.phnnumber
                document.getElementById("address").value = obj.address
                document.getElementById("mail").value = obj.mail
                document.getElementById("heading").innerHTML = obj.name
                const edit = document.getElementById("edit")
                edit.addEventListener("click", () => {
                    const save = document.getElementById("save")
                    save.addEventListener("click", () => {
                        obj.name = document.getElementById("name").value
                        obj.phnnumber = document.getElementById("username").value
                        obj.address = document.getElementById("address").value
                        obj.mail = document.getElementById("mail").value
                        document.getElementById("name").value = obj.name
                        document.getElementById("username").value = obj.phnnumber
                        document.getElementById("address").value = obj.address
                        document.getElementById("mail").value = obj.mail
                        document.getElementById("heading").innerHTML = obj.name

                    })


                })
            }
        }
    });
});
