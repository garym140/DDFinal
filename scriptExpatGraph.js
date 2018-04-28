//EXPAT DATA CIRCLES

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var data = [ 
  // {date: '2000(150)', value: 529984/150}, //armed forces data
  {date: '2000-2005', value: 6134},
  {date: '2005-2010', value: 4254},
  // {date: '2010(150)', value: 1002849/150}, //armed forces data
  {date: '2010-2015', value: 4682},
]

// Parse the date / time
// var parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scaleBand()
.range([0, width])
// .padding(0.1)
.domain(data.map(function(d) { return d.date }));


// var yDomain = [0, d3.max(data, function(d) { return d.value })];


var yDomain = [1000, 7000];

var y = d3.scaleLinear()
.range([height, 0])
.domain(yDomain);

var xAxis = d3.axisBottom()
    .scale(x)
    // .tickFormat(d3.timeFormat("%Y-%Y"));

var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(10);

console.log("hello")
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
  // .append("g")
  //   .attr("transform", 
  //         "translate(" + margin.left + "," + margin.top + ")");

let scaleFactor = 20;

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .style("fill", "grey")
  .attr("cx", d => x(d.date) +90)
  .attr("cy", d => y(d.value))
  .attr("r", 10)
  .on('mouseover', function(d) {
    console.log(this);
    d3.select(this)
      .style('fill', 'purple');
  })
  .on('mouseleave',function(d){
    d3.select(this)
      .style('fill', 'grey');
  })

  .append("title")          // Use tooltips instead of squashing in the x axis labels
         .text(d => d.value)
  // .on('mouseover', function(d) { 

  //             d3.select(this)
  //               .attr('fill', 'red')
  //             // groups.selectAll('circle')
  //             //     .filter(d => x(d.value))
  //             //     .attr('opacity', 0.1);
  //         }).on('mouseleave', function(d) {
  //               groups.selectAll('circle')
  //                     .attr('opacity', 1);
  //         });

// svg.selectAll("rect")
//   .data(data)
//   .enter()
//   .append("rect")
//   .style("fill", "steelblue")
//   .attr("x", function(d) { return x(d.date); })
//   .attr("width", x.bandwidth() )
//   // .attr("y", function(d) { return y(d.value); })
//   .attr("y", d => { 
//     return y(d.value); 
//   })
//   .attr("height", function(d) { return y(0) - y(d.value); });


// d3.csv("data.csv", function(error, data) {

//   console.log(data)

//     data.forEach(function(d) {
//         // d.date = parseDate(d.date);
//         d.value = +d.value;
//     });

  // x.domain(data.map(function(d) { return d.date; }));
  // y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.25em")
      .attr("transform", "rotate(-70)" )
      .attr("fill", "grey");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");

  // svg.selectAll("bar")
  //     .data(data)
  //     .enter()
  //     .append("rect")
  //     .style("fill", "steelblue")
  //     .attr("x", function(d) { return x(d.date); })
  //     .attr("width", x.rangeBand())
  //     .attr("y", function(d) { return y(d.value); })
  //     .attr("height", function(d) { return height - y(d.value); });

// });