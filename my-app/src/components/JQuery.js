var table2=    $('#PYtList2').DataTable({
        "columnDefs": [
                {"targets": 1,"width": "45px"},
                {"targets": 2,"width": "120px"},
                {"targets": 3,"width": "80px"},
                {"targets": 4,"width": "100px"},
                {"targets": 6,"width": "110px"},
                {"targets": 7,"width": "70px"}
            ],
            dom : 'lBfrtip',         buttons : [
            /* 'excel', */
            {
                extend : 'excel',
                text : 'Export File',
                sheetName: 'PY_Actual',
                exportOptions : {
                    modifier : {
                        selected : null
                    }
                }
            }         ],
            select : null
            /*"bSort" : false*/
        });       $('.dashboardActive #aside .nav li:nth-child(1)').addClass('active');
          $('.monthWiseActive #aside .nav li:nth-child(2)').addClass('active');
          $('.lineChartActive #aside .nav li:nth-child(3)').addClass('active');
          $('.planningMasterActive #aside .nav li:nth-child(4)').addClass('active');      
          $('.actualAndForecastActive #aside .nav li:nth-child(5)').addClass('active');
          $('.pyActualAndForecastActive #aside .nav li:nth-child(6)').addClass('active');      $(document).on('change','input:checkbox', function () {
           //build a regex filter string with an or(|) condition
             //build a filter string with an or(|) condition
          var team = $('input:checkbox[name="team"]:checked').map(function() {
             return this.value;
           }).get().join('|');
           //now filter in column 1, with no regex, no smart filtering, not case sensitive
           table2.column(1).search(team, true, false, false).draw(false);
           var type = $('input:checkbox[name="programTeam"]:checked').map(function() {
             return this.value;
           }).get().join('|');
           //now filter in column 2, with no regex, no smart filtering, not case sensitive
           table2.column(2).search(type, true, false, false).draw(false);
      var location = $('input:checkbox[name="location"]:checked').map(function() {
             return this.value;
           }).get().join('|');
           //now filter in column 5, with no regex, no smart filtering, not case sensitive
           table2.column(5).search(location, true, false, false).draw(false); 
        var roll = $('input:checkbox[name="roll"]:checked').map(function() {
             return this.value;
           }).get().join('|');
           //now filter in column 6, with no regex, no smart filtering, not case sensitive
           table2.column(6).search(roll, true, false, false).draw(false);     var status = $('input:checkbox[name="status"]:checked').map(function() {
             return this.value;
           }).get().join('|');
           //now filter in column 7, with no regex, no smart filtering, not case sensitive
           table2.column(7).search(status, true, false, false).draw(false);     
    });
    