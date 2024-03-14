// Import all required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 4000;

// Connect to MongoDB server
// mongodb+srv://spgowtham773:spGowthu1996@cluster0.n3ynrqe.mongodb.net/Cams?retryWrites=true&w=majority&appName=Cluster0
// url to check the collection and documents for in the mongo db atlas : https://cloud.mongodb.com/v2/65ee99127173530709c84478#/metrics/replicaSet/65ee9a0dd1a1e414f5a23c25/explorer/Cams/std/find
//username : spgowtham773
// password : spGowthu1996

// Link : mongodb+srv://spgowtham773:spGowthu1996@cluster0.n3ynrqe.mongodb.net/ ?retryWrites=true&w=majority&appName=Cluster0
//
//
mongoose
  .connect('mongodb+srv://spgowtham773:spGowthu1996@cluster0.n3ynrqe.mongodb.net/Cams?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to mongoDb Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to Atlas:', error);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Define the schema
const camsSchema = new mongoose.Schema({
  studentRegNo: { type: Number, required: true },
  studentName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  age: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true }
});
const Std = mongoose.model('Std', camsSchema, 'std');

// Middleware setup
app.use(express.json());

// Create a student
app.post('/students', (req, res) => {
  const { studentRegNo, studentName, email, phoneNo, age, dateOfBirth } = req.body;
  const newStudent = new Std({ studentRegNo, studentName, email, phoneNo, age, dateOfBirth });
  newStudent
    .save()
    .then((std) => {
      res.status(201).json(std);
    })
    .catch((error) => {
      console.log('Error creating student:', error);
      res.status(500).json({ error: 'An error occurred while creating student' });
    });
});

// Get all students
app.get('/getAllStudents', (req, res) => {
  Std.find()
    .then((studentList) => {
      res.json(studentList);
    })
    .catch((error) => {
      console.log('Error getting students:', error);
      res.status(500).json({ error: 'An error occurred while getting students' });
    });
});

// Define the model
const Student = mongoose.model('Student', camsSchema, 'std');;
// Update a student by ID
app.put('/students/:studentRegNo', (req, res) => {
  const { studentRegNo } = req.params;
  const { studentName, email, phoneNo, age, dateOfBirth } = req.body;

  Student.findOneAndUpdate(
    { studentRegNo },
    { studentName, email, phoneNo, age, dateOfBirth },
    { new: true }
  )
    .then((updatedStudent) => {
      if (updatedStudent) {
        res.json({ message: 'Student updated successfully', student: updatedStudent });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    })

    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const studentRegNo = req.params.id;
  Std.findOneAndDelete({ studentRegNo })
    .then((deletedStudent) => {
      if (deletedStudent) {
        res.json(deletedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    })
    .catch((error) => {
      console.log('Error deleting student:', error);
      res.status(500).json({ error: 'An error occurred while deleting student' });
    });
});
// Get a student by registration number
app.get('/students/:registrationNumber', (req, res) => {
  const registrationNumber = req.params.registrationNumber;
  Std.findOne({ studentRegNo: registrationNumber })
    .then((student) => {
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    })
    .catch((error) => {
      console.log('Error getting student:', error);
      res.status(500).json({ error: 'An error occurred while getting student' });
    });
});