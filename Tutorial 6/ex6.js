let student = {
    firstName:'John',
    lastName:'Smith',
    'age': 19,
    contact:{
      email:'johnsmith@fakeschool.com',
      phoneNumber:{
        'country code':'+65',
        'number': '9919912'
      }
    },
    address: {
      'streetName':'Yishun Ring Road',
      'building': 'Blk 171 #11-221'
    },
    classes:[
      "Computing 101", "Computing 102", "Computing 103"
    ],
    grades:[
      {
        'subject name':'Computing 1',
        'Grade': 85
      },
      {
        'subject name':'Computing 2',
        'grade': 31
      },
      {
        'subject name':'Computing 3',
        'grade': 75
      }
    ]
   };
   
   // Add a new property "gender"
   student.gender = "male";
   
   // Add a new class "Computing 104"
   student.classes.push("Computing 104");
   
   // Change the age to 21
   student.age = 21;
   
   console.log(student);
   