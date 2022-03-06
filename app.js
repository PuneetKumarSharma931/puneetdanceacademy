const express = require('express');
const path = require('path');


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

const contactSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Gender: String,
    Phone: Number,
    Email: String,
    address: String,
    moreInfo: String
  });

  const bookSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Gender: String,
    Email: String,
    Phone: Number,
    Service: String
  });

const Contact = mongoose.model('Contact', contactSchema);
const Booking = mongoose.model('Booking', bookSchema);

const app = express();

const port = process.env.PORT || 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{

    res.status(200).render('home.pug', {});
});

app.get('/contact', (req, res)=>{

    res.status(200).render('contact.pug', {});
});

app.post('/contact', (req, res)=>{

    let myData = new Contact(req.body);

    myData.save().then(()=>{
        
        res.status(200).send();

    }).catch(()=>{
        
        res.status(400).send();
    });
});

app.get('/services', (req, res)=>{

        res.status(200).render('services.pug', {});
});

app.get('/services/book', (req, res)=>{

    res.status(200).render('bookForm.pug', {});
});

app.post('/services/book', (req, res)=>{

    let myData = new Booking(req.body);

    myData.save().then(()=>{

        res.status(200).send();

    }).catch(()=>{

        res.status(400).send();

    });

});

app.get('/classes', (req, res)=>{

    res.status(200).render('classes.pug', {});
});

app.get('/about', (req, res)=>{

    res.status(200).render('about.pug', {});
});

app.listen(port, ()=>{

    console.log(`Website is running at port: ${port}`);
});



