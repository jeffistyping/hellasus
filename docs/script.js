$( document ).ready(function() {
    var data = [
        {
            date: "August 28, 2021",
            name: "Seal",
            institution: "Cohere",
            link: "https://docs.cohere.ai/generation-card",
            score: "33.3",
            score_1: "-",
            score_2: "33.3",
        },
        {
            date: "September 2, 2021",
            name: "Shrimp",
            institution: "Cohere",
            link: "https://docs.cohere.ai/generation-card",
            score: "25.0",
            score_1: "-",
            score_2: "25.0",
        },

    ];
    var tableRow, bottomRow;
    for (d in data){
        medal = ""
        tableRow = document.createElement('tr');
        if (d == 0) {
            medal = "<p>🥇</p>"
        }
        else if (d == 1) {
            medal = "<p>🥈</p>"
        }
        else if (d == 2) {
            medal = "<p>🥉</p>"
        }
        else {
            medal = "<p>"+d+"</p>"
        }
        // <tr><td><p>🥇</p><span class="date">August 28, 2021</span></td><td>Shark<p class="institution">Cohere</p><a class="link" href="https://cohere.ai"></a></td><td><b>90.5</b></td><td><b>91.3</b></td><td><b>89.7</b></td><td><b>80.3</b></td><td><b>96.1</b></td></tr>
        tableRow.innerHTML = "<td>"+medal+"<span class='date'> " + data[d].date + "</span></td><td> <a href="+data[d].link+" target='_blank'>"+data[d].name + "</a><p class='institution'>" + data[d].institution + "</p></td><td><b>" + data[d].score + "</b></td><td><b>" + data[d].score_1 + "</b></td><td><b>" + data[d].score_2 + "</b></td>"; //<td><b>" + data[d].score_3 + "</b></td><td><b>" + data[d].score_4 + "</b></td><td><b>" + data[d].score_5 + "</b></td>";
        document.querySelector(".hellasus-table").appendChild(tableRow);
    }
    bottomRow = document.createElement('tr');
    bottomRow.innerHTML = "<tr class='random-row'><td></td><td>Random Performance</td><td>25.0</td><td>25.0</td><td>25.0</td></tr>";//<td>25.0</td><td>25.0</td></tr>"
    document.querySelector(".hellasus-table").appendChild(bottomRow);
});

$("#g0").find("button").click(function () {
    if (this.id.startsWith('gold')) {
        $(this).addClass('clicked-correct');
        $(this).parent().parent().find("p.msg").text("Correct! 🙂")
    } else {
        $(this).addClass('clicked-wrong');
        $(this).parent().parent().find("p.msg").text("Incorrect 😢")
    }
    // Find the correct one otherwise
    $(this).siblings().each(function () {
        if (this.id.startsWith('gold')) {
            $(this).addClass('clicked-correct');
        } else {
            $(this).removeClass('clicked-wrong');
        }
    });
});
