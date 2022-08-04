function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          // move()
          let bar
          bar =`
      <p style="text-align:center;"> uploading</p>
      <div class="meter">
          <span  id= "bar" style="width:100%;"><span id="progress"></span></span>
      </div>`
        document.getElementById('drop_zone').innerHTML = bar
        const element = document.querySelector('#progress')
        element.addEventListener("animationend", onAnimationComplete);

        function onAnimationComplete(e){
        if(e.animationName==='progressBar'){
        console.log("progress-animation ended")
        let html
        html =` <p class="main_p">File Name: ${file.name} </p>`
        document.getElementById('drop_zone').innerHTML = html
    }

          
        }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log(`… file[${i}].name = ${ev.dataTransfer.files[i].name}`);
        let html
        html =` <p class="main_p">File Name: ${ev.dataTransfer.files[i].name} </p>`
        document.getElementById('drop_zone').innerHTML = html
      }
    }
  }
  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
 

  addFile = function() {
    
      var input = document.getElementById('selectedFile');
      var output = document.getElementById('drop_zone');
    
      
      
      let bar
      bar =`
      <p style="text-align:center;"> uploading</p>
      <div class="meter">
          <span  id= "bar" style="width:100%;"><span id="progress"></span></span>
      </div>`
        document.getElementById('drop_zone').innerHTML = bar
        const element = document.querySelector('#progress')
        element.addEventListener("animationend", onAnimationComplete);

        function onAnimationComplete(e){
          if(e.animationName==='progressBar'){
            console.log("progress-animation ended")
        for (var i = 0; i < input.files.length; i++) {
        let html
        html =` <p class="main_p">File Name: ${input.files.item(i).name}</p>`
        output.innerHTML = html 
    }

          
        }
        
      }
    }

    