const students = [
    {
      roll: "12210010001",
      name: "ABHISHEK TAILOR",
      father: "SHIVRAJ TAILOR",
      mother: "SAROJ DEVI",
      enroll: "122100100001",
      institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
      semester: "B.C.A IV SEMESTER (MAY-JUNE 2024)",
      credit: 28.00,
      sgpa: 8.12,
      cgpa: 7.44,
      ec: 112.00,
     
      subjects: [
        { code: "04BCA101", title: "COMPUTER ORIENTED FINANCIAL MANAGEMENT", credit: 6.0, grade: "A" },
        { code: "04BCA102", title: "COMPUTER COMMUNICATION NETWORKS", credit: 6.0, grade: "B" },
        { code: "04BCA103", title: "COMPUTER GRAPHICS", credit: 6.0, grade: "B" },
        { code: "04BCA104", title: "OBJECT ORIENTED PROGRAMMING AND C++", credit: 6.0, grade: "B" },
        { code: "04BCA201", title: "SOFTWARE LAB BASED ON 04BCA-103 & 04BCA-104", credit: 3.0, grade: "A" },
        { code: "04BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" }
      ]
    },
    {
      roll: "12210010026",
      name: "SUNIL KUMAR",
      father: "SHUBH RAM",
      mother: "GYARSI DEVI",
      enroll: "122100100026",
      institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
      semester: "B.C.A IV SEMESTER (MAY-JUNE 2024)",
      credit: 28.00,
      sgpa: 8.12,
      cgpa: 7.44,
      ec: 112.00,
     
  
      subjects: [
        { code: "04BCA101", title: "COMPUTER ORIENTED FINANCIAL MANAGEMENT", credit: 6.0, grade: "A" },
        { code: "04BCA102", title: "COMPUTER COMMUNICATION NETWORKS", credit: 6.0, grade: "B" },
        { code: "04BCA103", title: "COMPUTER GRAPHICS", credit: 6.0, grade: "B" },
        { code: "04BCA104", title: "OBJECT ORIENTED PROGRAMMING AND C++", credit: 6.0, grade: "B" },
        { code: "04BCA201", title: "SOFTWARE LAB BASED ON 04BCA-103 & 04BCA-104", credit: 3.0, grade: "A" },
        { code: "04BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" }
      ]
    }
  ];
  
  function search() {
    const roll = document.getElementById("rollInput").value.trim();
    const resultBox = document.getElementById("resultBox");
    const studentInfo = document.getElementById("studentInfo");
    const marksTable = document.getElementById("marksTable");
    const footer = document.querySelector(".footer");
    
  
    document.querySelectorAll('h6').forEach(h => h.remove());
  
    resultBox.style.display = "block";
    studentInfo.innerHTML = `<p style="text-align:center; color: green; font-weight: bold;">Processing your result, please wait...</p>`;
    marksTable.innerHTML = `
      <tr>
        <th>Subject Code</th>
        <th>Course Title</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    `;
  
    setTimeout(() => {
      const student = students.find(s => s.roll === roll);
      if (student) {
        studentInfo.innerHTML = `
          <p style="text-align: left;"><strong>Name:</strong> ${student.name}</p>
          <p style="text-align: left;"><strong>Roll No:</strong> ${student.roll}</p>
          <p style="text-align: left;"><strong>Father's Name:</strong> ${student.father}</p>
          <p style="text-align: left;"><strong>Mother's Name:</strong> ${student.mother}</p>
          <p style="text-align: left;"><strong>Enrollment No:</strong> ${student.enroll}</p>
          <p style="text-align: left;"><strong>Institute:</strong> ${student.institute}</p>
          <p style="text-align: left;"><strong>Semester:</strong> ${student.semester}</p>
        `;
        student.subjects.forEach(sub => {
          marksTable.innerHTML += `
            <tr>
              <td>${sub.code}</td>
              <td>${sub.title}</td>
              <td>${sub.credit}</td>
              <td>${sub.grade}</td>
            </tr>
          `;
        });
  
        marksTable.insertAdjacentHTML("afterend", `
          <h6 style="text-align: center; font-weight:300; margin-top: 20px; font-size: 12px;  font-family: sans-serif; ">
         <br>  CREDIT EARNED IN THE SEMESTER = <b style="color: black;font-weight: 800;">${student.credit.toFixed(2)}</b>
         <br>
            SEMESTER GRADE POINT AVERAGE (SGPA) = <b style="color: black;font-weight: 800;">${student.sgpa.toFixed(2)}</b>
          <br>
       
            CUMULATIVE GRADE POINT AVERAGE (CGPA) = <b style="color: black; font-weight: 800;">${student.cgpa.toFixed(2)}</b>
         <br>
            EARNED CREDITS (EC) = <b style="color: black; font-weight: 800;">${student.ec.toFixed(2)}</b>
          </h6>
        `);
        footer.style.display = "block";
      } else {
        studentInfo.innerHTML = `<p style="color:red;">No ❌ student found with this roll number.</p>`;
        footer.style.display = "none";
      }
    }, 2000);
  }
  
  function downloadPDF() {
    window.print();
  }