    function webScan(){  
        let scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
            scanner.addListener('scan', function (content) {
            $(document).ready(function(){
                window.location = './data_lookup.php?data='+content;
            });
            });
            Instascan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                    scanner.start(cameras[0]);
                } else {
                    console.error('No cameras found.');
                }
            }).catch(function (e) {
                console.error(e);
            });
    };


    //negeer wat hieronder staat
                    // $.ajax({
                //     type: "POST",
                //     url: "data_lookup.php",
                //     data: {data: content},
                //     success: function(response) {
                //         alert(response);
                //     }
                // });
                // window.alert(content)