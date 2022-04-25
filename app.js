const SVG_WIDTH = document.querySelector('svg').clientWidth;
const SVG_HEIGHT = document.querySelector('svg').clientHeight;

const rectData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];


let allRect = d3.select('svg')
                .selectAll('rect')
                .data(rectData)
                .join('rect')
                .attr('x', (d, i) => (i * SVG_WIDTH / rectData.length))
                .attr('y', d=>SVG_HEIGHT - d*3)
                .attr('width', SVG_WIDTH/rectData.length-2)
                .attr('rx', '5')
                .attr('ry', '5');


// Create a transition

// Process A.
// let x = allRect.transition()
//     .duration(1000)
//     .attr('height', d => d * 3)
//     .transition()
//     .duration(1000)
//     .style('fill', 'pink');

// allRect.transition()
//     .delay(2000)
//     .attr('height', d=> d*3)
//     .transition()
//     .duration(1000)
//     .delay(2000)
//     .style('fill', 'salmon');

// allRect.transition()
//     .ease(d3.easeBounce)
//     .duration(1000)
//     .attr('height', d=>d*3)
//     .transition()
//     .ease(d3.easeBounce)
//     .duration(1000)
//     .style('fill', 'salmon');


// process B  d3.transition()

// let T1 = d3.transition()
//     .delay(1000)
//     .ease(d3.easeBounce)
//     .duration(2000)
// allRect.transition(T1).attr('height', d=>d*3)
//         .transition(T1)
//         .style('fill', 'crimson');

allRect.each((d, i, n)=>{
    d3.select(n[i])
        .transition()
        .delay(i * d)
        .ease(d3.easeBounce)
        .duration(i * d)
        .attr('height', d=>d*3)
        .transition()
        .delay(i*d)
        .ease(d3.easeBounce)
        .duration(i * d)
        .style('fill', 'slategrey');
})