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
   }

   console.log("Full Name:", student.firstName, student.lastName);
   console.log("Age:", student.age);
   console.log("Country Code and Phone Number:", student.contact.phoneNumber['country code'] + student.contact.phoneNumber.number);

   student.age = 21;
   console.log("Updated Age:",student.age);

let s = student;
s.contact.email = "johnsmith@fakehotmail.com";
console.log("Stundent Email:",student.contact.email); 

for (let k in student.address) {
    console.log(k," : ", student.address[k]);
   }
   
