window.addEventListener("load",function () {

    var linkBase = "http://server-lexo.zz.com.ve";
    
    var btnCopyUser = document.getElementsByClassName("btn-copy-user");
    var btnCopyPass = document.getElementsByClassName("btn-copy-pass");
    var chkUsers = document.getElementsByClassName("checkbox");
    
    for (var i = 0 ; i < btnCopyUser.length; i++) {
        btnCopyUser[i].addEventListener('click', function () {
            let email = this.parentNode.parentNode.childNodes[3].innerHTML;
            // alert(this.parentNode.parentNode.childNodes[3].innerHTML);

            // Crea un campo de texto "oculto"
            var aux = document.createElement("input");

            // Asigna el contenido del elemento especificado al valor del campo
            aux.setAttribute("value", email);

            // Añade el campo a la página
            document.body.appendChild(aux);

            // Selecciona el contenido del campo
            aux.select();

            // Copia el texto seleccionado
            document.execCommand("copy");

            // Elimina el campo de la página
            document.body.removeChild(aux);
        });
        btnCopyPass[i].addEventListener('click', function () {
            let pass = this.parentNode.parentNode.childNodes[5].innerHTML;
            // alert(this.parentNode.parentNode.childNodes[3].innerHTML);

            // Crea un campo de texto "oculto"
            var aux = document.createElement("input");

            // Asigna el contenido del elemento especificado al valor del campo
            aux.setAttribute("value", pass);

            // Añade el campo a la página
            document.body.appendChild(aux);

            // Selecciona el contenido del campo
            aux.select();

            // Copia el texto seleccionado
            document.execCommand("copy");

            // Elimina el campo de la página
            document.body.removeChild(aux);
        });
    }
    for (var i = 0 ; i < chkUsers.length; i++) {
        chkUsers[i].addEventListener('click', function () {
            let row = this.parentNode.parentNode;
            let email = this.parentNode.parentNode.childNodes[3].innerHTML;
            
            if (this.checked) {
                var data = 'usado=usado&email=' + email;
                var request = new XMLHttpRequest();
                request.open('POST', linkBase + '/add_user_used.php', true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                

                request.onload = function() {
                    if (this.status >= 200 && this.status < 400) {
                        row.classList.add('usado');
                        console.log(request.responseText);
                    } else {
                        console.log(request.responseText);
                    }
                };

                request.onerror = function() {
                    console.log(request.responseText);
                };

                request.send(data);
                
            } else {
                var data = 'usado=nousado&email=' + email;
                var request = new XMLHttpRequest();
                request.open('POST', linkBase + '/add_user_used.php', true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

                request.onload = function() {
                    if (this.status >= 200 && this.status < 400) {
                        row.classList.remove('usado');
                        console.log(data);
                    } else {
                        console.log(data);
                    }
                };

                request.onerror = function() {
                    console.log(data);
                };

                request.send(data);
            }
        });
    }

});