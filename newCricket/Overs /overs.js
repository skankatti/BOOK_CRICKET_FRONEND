
    function fun() {
        var teamOne = document.getElementById("value").value;
        var teamTwo = document.getElementById("value1").value;
        var tovatlOver = document.getElementById("overs").value;
        var totalWickets = document.getElementById("wicket").value;
        var series = document.getElementById("series").value;
        var url = new URL(
          "http://localhost:8080/book-cricket/setOverswicketsTeamNames"
        );
  
        url.searchParams.append("tovatlOver", tovatlOver);
        url.searchParams.append("totalWickets", totalWickets);
        url.searchParams.append("teamOne", teamOne);
        url.searchParams.append("teamTwo", teamTwo);
        url.searchParams.append("series", series);
        console.log(url);
  
        const Senddata = (ev) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url);
          xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
          xhr.send();
        };
        console.log(Senddata(url));
      }