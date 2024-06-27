    function submit_click() {

      //กรรมการคนที่ 1 ปวช.
      if (document.getElementById('user').value != "" && 
          document.getElementById('pass').value != "") {

            if (document.getElementById('user').value == "pvc01" && 
          document.getElementById('pass').value == "pvc01*67*99") {
            //document.getElementById('output').style.display = "block"
            //document.getElementById('output2').innerHTML = 'https://docs.google.com/spreadsheets/d/1aMyGoXIeeXY9ZoKOetLx0-RbwRSPUsJSOGKgWP6M4xQ/edit?usp=sharing'  
                //location.replace("https://docs.google.com/spreadsheets/d/1aMyGoXIeeXY9ZoKOetLx0-RbwRSPUsJSOGKgWP6M4xQ/edit?usp=sharing")
                location.href = "https://docs.google.com/spreadsheets/d/1aMyGoXIeeXY9ZoKOetLx0-RbwRSPUsJSOGKgWP6M4xQ/edit?usp=sharing"
                //location.assign('https://docs.google.com/spreadsheets/d/1aMyGoXIeeXY9ZoKOetLx0-RbwRSPUsJSOGKgWP6M4xQ/edit?usp=sharing')
            }
            else {
              alert('กรุณาป้อนข้อมูลให้ถูกต้อง')
            }

      } else {
        alert('กรุณาป้อนข้อมูลให้ถูกต้อง')
      }
    
    
    }

    function reset_click() {
      // document.getElementById('output').style.display = "none"
      // document.getElementById('output0').innerHTML = ""
      // document.getElementById('output1').innerHTML = ""
      // document.getElementById('output2').innerHTML = ""
      // document.getElementById('output3').innerHTML = ""
      // document.getElementById('output4').innerHTML = ""
      document.getElementById('user').value = null
      document.getElementById('pass').value = null   

    }
