/* 
============================================================
-----------------------{  Doctype.js }----------------------
============================================================
*/              //----------{  ^_^  }----------//

//!------------{  Author      :   Bisakto-Rahi  }------------//
//!------------{  Create      :   21/10/2024   }-------------//
//!------------{  Update      :   29/10/2024   }-------------//

//todo------------{  Start Hare  }------------
function updateDateTime() {
    const now = new Date();

    // Format date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);

    // Format time
    const currentTime = now.toLocaleTimeString();

    // Display date and time
    document.getElementById('date').textContent = currentDate;
    document.getElementById('time').textContent = currentTime;
}

// Update date and time immediately, and every second
updateDateTime();
setInterval(updateDateTime, 1000);



////------------{  Start Hare  }------------////
//?------------{  Add description  }------------?//


////----------{  Add description  }------------////