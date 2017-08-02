var MOBILE_THRESHOLD = 600,
isMobile = false,
$graphic = $("#graphic")
step = 1;


function buttonStyle(step) {

    d3.selectAll(".button.num").classed("greyed", true);
    d3.select(".button.b" + step).classed("greyed", false);

    if (step == 1) {
        d3.select("#btnprev").classed("greyed", true);
    } else if (step != 1) {
        d3.select("#btnprev").classed("greyed", false);
    }
    if (step == 6) {
        d3.select("#btnnext").classed("greyed", true);
    } else if (step != 6) {
        d3.select("#btnnext").classed("greyed", false);
    }

}

buttonStyle(1);

function drawLineGraph(container_width) {

   
  d3.csv("data/step-data.csv", function(data) {
      data.forEach(function(d) {
        d.year = +d.year;
        d.actual = +d.actual;
        d.synthetic = +d.synthetic;
        d.figure = d.figure;

      })
    //FILTER DATA FOR STEPS 1-3
    var dataset1 = data.filter(function(d) { 
        return d.figure == 8;
    })
    console.log(dataset1)
    //FILTER DATA FOR STEPS 4-5
    var dataset2 = data.filter(function(d) { 
        return d.figure == 19;
    })
    console.log(dataset2)
    //FILTER DATA FOR STEP 6
    var dataset3 = data.filter(function(d) { 
        return d.figure == 24;
    })

    if (container_width == undefined || isNaN(container_width)) {
        container_width = 1170;
    }
    var padding = 20;

    if (container_width <= MOBILE_THRESHOLD) {
        isMobile = true;
        var chart_aspect_height = 1.75;
        var margin = {
            top: 125,
            right: 20,
            bottom: 15,
            left: 60
        };
        var width = container_width - margin.left - margin.right,
            height = Math.min(500, (Math.ceil(width * chart_aspect_height))) - margin.top - margin.bottom - padding;
    } else {
        isMobile = false;
        var chart_aspect_height = 0.6;
        var margin = {
            top: 80,
            right: 20,
            bottom: 15,
            left: 40
        };
        var width = container_width - margin.left - margin.right,
            height = Math.ceil(Math.max(350, width * chart_aspect_height)) - margin.top - margin.bottom - padding;
    }

    $graphic.empty();
    //MAKE LINE GRAPH
    var svg = d3.select("#graphic").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom + padding)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().rangeRound([height, 0]);
    var line = d3.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.actual); });
    x.domain(d3.extent(dataset1, function(d) { return d.year; }));
    y.domain(d3.extent(dataset1, function(d) { return d.actual; }));
  
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
        .tickFormat(d3.format(""))
      )
      .attr("class", "x-axis")

    svg.append("g")
      .call(d3.axisLeft(y))
      .attr("class", "y-axis")
      .append("text")
      .attr("fill", "#000")
   //   .attr("transform", "rotate(-90)")
      .attr("y", -15)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Percent");

    svg.append("path")
      .datum(dataset1)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("d", line)
      .attr("class", "line1");
  
    d3.select('#btnnext')
        .on("click", function () {
            changeStep("next");
        });

    d3.select('#btnprev')
        .on("click", function () {
            changeStep("prev");
        });
    //when changing the step, change the graph
    function changeStep(direction){
      if (direction == "next"){
        step = step < 6 ? step + 1 : step;
        console.log(step)
      }else if (direction == "prev") {
        step = step > 1 ? step - 1 : step;
        console.log(step)
      }
      buttonStyle(step);
      switch(step){
      case 1:
        step1(direction);
        break;
      case 2:
        step2(direction);
        break;
      case 3:
        step3(direction);
        break;
      case 4:
        step4(direction);
        break;
      case 5:
        step5(direction);
        break;
      case 6:
        step6(direction);
        break;      
      }

    }

    function step1(direction) {
      console.log('step1')
      if (direction == "next"){

      }else if (direction == "prev"){
        x.domain(d3.extent(dataset1, function(d) { return d.year; }));
        y.domain(d3.extent(dataset1, function(d) { return d.actual; }));
        d3.selectAll("#graphic .y-axis")
          .transition()
          .duration(1800)
          .call(d3.axisLeft(y))
        d3.select(".line2")
          .transition()
          .duration(1000)
          .remove()

      }

    }

    function step2(direction) {
      console.log('step2')
      if (direction == "next"){
      //ADD SYNTHETIC LINE
        console.log('next')
        d3.select("#graphic svg g")
          .data(dataset1)
        x.domain(d3.extent(dataset1, function(d) { return d.year; }));
        y.domain(d3.extent(dataset1, function(d) { return d.synthetic; }));
        d3.selectAll("#graphic .y-axis")
          .transition()
          .duration(1800)
          .call(d3.axisLeft(y))
        var line2 = d3.line()
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.synthetic); });
        var path = d3.select("#graphic svg g").append("path")
            .datum(dataset1)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("d", line2);
        var totalLength = path.node().getTotalLength();
        console.log(totalLength)
        path
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .attr("class", "line2")
          .transition()
          .duration(1800)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0);
      }else if (direction == "prev"){
        
      }
    }

    function step3(direction) {
      console.log('step3')
      if (direction == "next"){

      }else if (direction == "prev"){
        
      }
    }

    function step4(direction) {
      console.log('step4')
      if (direction == "next"){

      }else if (direction == "prev"){
        
      }
    }

    function step5(direction) {
    console.log('step5')
      if (direction == "next"){

      }else if (direction == "prev"){
        
      }
    }

    function step6(direction){
    console.log('step6')
      if (direction == "next"){

      }else if (direction == "prev"){
        
      }
    }


  })


};

var pymChild = new pym.Child({ renderCallback: drawLineGraph, polling: 500 });
