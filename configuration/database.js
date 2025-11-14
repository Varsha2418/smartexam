const mongoose = require('mongoose');

const connection = mongoose.createConnection ('mongodb+srv://202317b2418_db_user:J2fltXMkNqR9bxpe@cluster0.wizcchi.mongodb.net/SmartExamProject').on('open',()=>{
    console.log('Database connected');

}).on('error',(err)=>{
    console.log('Database connection error:', err);
});

module.exports = connection;
