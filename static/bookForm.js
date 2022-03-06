setTimeout(() => {

    let button = document.getElementById('bookSubmit');

    button.addEventListener('click', (e) => {

        e.preventDefault();

        let name = document.getElementById('bookName').value.trim();
        let age = document.getElementById('bookAge').value;
        let gender = document.getElementById('bookGender').value.trim();
        let email = document.getElementById('bookEmail').value.trim();
        let phone = document.getElementById('bookPhone').value;
        let service = document.getElementById('Service').value;


        let data = {
            Name: name,
            Age: age,
            Gender: gender,
            Email: email,
            Phone: phone,
            Service: service
        }


        let formData = new URLSearchParams(data);

        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://puneet-dance-academy.herokuapp.com/services/book', true);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {

            if (this.readyState != 4) {

                document.getElementById('bookSubmit').disabled = true;
                document.getElementById('bookSubmit').innerText = 'Loading...';
            }
        }

        xhr.onload = function () {

            if (this.status === 200) {

                document.getElementById('bookSubmit').disabled = false;
                document.getElementById('bookSubmit').innerText = 'Book';

                document.getElementById('bookAlert').innerHTML = `<div class="alert alert-success alert-dismissible fade show my-n2" role="alert">
        <strong>Booking Success!</strong> ${name} your booking for ${service} is successfully completed! Our representatives will reach out to you soon.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;

                document.getElementById('bookName').value = "";
                document.getElementById('bookAge').value = "";
                document.getElementById('bookGender').value = "";
                document.getElementById('bookPhone').value = "";
                document.getElementById('bookEmail').value = "";
                document.getElementById('Service').value = "Dance Classes";
            }
            else {

                document.getElementById('bookAlert').innerHTML = `<div class="alert alert-danger alert-dismissible fade show my-n2" role="alert">
        <strong>Error!</strong> ${name} some internal error occured we are sorry!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

            }
        }

        xhr.send(formData);

    });

}, 50);