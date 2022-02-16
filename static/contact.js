
setTimeout(() => {

    let button = document.getElementById('submit');

    button.addEventListener('click', (e) => {

        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let age = document.getElementById('age').value;
        let gender = document.getElementById('gender').value.trim();
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value.trim();
        let address = document.getElementById('Address').value.trim();
        let moreInfo = document.getElementById('MoreInfo').value.trim();

        let data = {
            Name: name,
            Age: age,
            Gender: gender,
            Phone: phone,
            Email: email,
            address: address,
            moreInfo: moreInfo
        }


        let formData = new URLSearchParams(data);

        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://localhost/contact', true);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {

            if (this.readyState != 4) {

                document.getElementById('submit').disabled = true;
                document.getElementById('submit').innerText = 'Loading...';
            }
        }

        xhr.onload = function () {

            if (this.status === 200) {

                document.getElementById('submit').disabled = false;
                document.getElementById('submit').innerText = 'Submit';

                document.getElementById('alert').innerHTML = `<div class="alert alert-success alert-dismissible fade show my-n2" role="alert">
        <strong>Success!</strong> ${name} your response was successfully saved.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

                document.getElementById('name').value = "";
                document.getElementById('age').value = "";
                document.getElementById('gender').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('email').value = "";
                document.getElementById('Address').value = "";
                document.getElementById('MoreInfo').value = "";
            }
            else {

                document.getElementById('alert').innerHTML = `<div class="alert alert-danger alert-dismissible fade show my-n2" role="alert">
        <strong>Error!</strong> ${name} some internal error occured we are sorry!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

            }
        }

        xhr.send(formData);

    });

}, 50);