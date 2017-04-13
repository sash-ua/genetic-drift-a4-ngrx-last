"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3 = require("d3");
var D3Service = (function () {
    function D3Service() {
    }
    D3Service.prototype.drawChart = function (data, x_label, y_label, appendTo, legend_values, x_max, wFrame, hFrame) {
        if (wFrame === void 0) { wFrame = 300; }
        if (hFrame === void 0) { hFrame = 300; }
        var margin = { top: 20, right: 20, bottom: 50, left: 50 }, width = wFrame - margin.left - margin.right, height = hFrame - margin.top - margin.bottom;
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        if (!x_max) {
            x_max = data[0].length > 0 ? data[0].length : data.length;
        }
        var y_max = data[0].length > 0 ? d3.max(data, function (array) {
            return d3.max(array);
        }) : d3.max(data);
        var x = d3.scaleLinear()
            .domain([0, x_max])
            .range([0, width]);
        var y = d3.scaleLinear()
            .domain([0, 1.1 * y_max])
            .range([height, 0]);
        var xAxis = d3.axisBottom().scale(x);
        var yAxis = d3.axisLeft().scale(y);
        var line = d3.line()
            .x(function (d, i) {
            var dat = (data[0].length > 0 ? data[0] : data);
            return x((i / (dat.length - 1)) * x_max);
        })
            .y(function (d) {
            return y(d);
        });
        var svg = d3.select(appendTo).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("data-D3-graph", "1")
            .style("cursor", "pointer")
            .append("g")
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .style("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", 6)
            .attr("dy", "3em")
            .style("fill", "#000")
            .text(x_label);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("dy", "-3.5em")
            .style("text-anchor", "middle")
            .style("fill", "#000")
            .text(y_label);
        if (legend_values.length > 0) {
            var legend = svg.append("text")
                .attr("text-anchor", "star")
                .attr("y", 30)
                .attr("x", width - 100)
                .append("tspan").attr("class", "legend_title")
                .text(legend_values[0])
                .append("tspan").attr("class", "legend_text")
                .attr("x", width - 100).attr("dy", 20).text(legend_values[1])
                .append("tspan").attr("class", "legend_title")
                .attr("x", width - 100).attr("dy", 20).text(legend_values[2])
                .append("tspan").attr("class", "legend_text")
                .attr("x", width - 100).attr("dy", 20).text(legend_values[3]);
        }
        else {
            svg.selectAll("line.horizontalGridY")
                .data(y.ticks(10)).enter()
                .append("line")
                .attr("x1", 1)
                .attr("x2", width)
                .attr("y1", function (d) { return y(d); })
                .attr("y2", function (d) { return y(d); })
                .style("fill", "none")
                .style("shape-rendering", "crispEdges")
                .style("stroke", "#f5f5f5")
                .style("stroke-width", "1px");
            svg.selectAll("line.horizontalGridX")
                .data(x.ticks(10)).enter()
                .append("line")
                .attr("x1", function (d, i) { return x(d); })
                .attr("x2", function (d, i) { return x(d); })
                .attr("y1", 1)
                .attr("y2", height)
                .style("fill", "none")
                .style("shape-rendering", "crispEdges")
                .style("stroke", "#f5f5f5")
                .style("stroke-width", "1px");
        }
        d3.select(appendTo).style("font", "10px sans-serif");
        d3.selectAll(".axis line").style("stroke", "#000");
        d3.selectAll(".y.axis path").style("display", "none");
        d3.selectAll(".x.axis path").style("display", "none");
        d3.selectAll(".legend_title")
            .style("font-size", "12px").style("fill", "#555").style("font-weight", "400");
        d3.selectAll(".legend_text")
            .style("font-size", "20px").style("fill", "#bbb").style("font-weight", "700");
        if (data[0].length > 0) {
            var simulation = svg.selectAll(".simulation")
                .data(data)
                .enter().append("g")
                .attr("class", "simulation");
            simulation.append("path")
                .attr("class", "line")
                .attr("fill", "none")
                .attr("d", function (d) { return line(d); })
                .style("stroke", function (d, i) { return color(i); });
        }
        else {
            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("fill", "none")
                .attr("d", line)
                .style("stroke", "steelblue");
        }
        d3.selectAll(".line").style("fill", "none").style("stroke-width", "1.5px");
    };
    return D3Service;
}());
D3Service = __decorate([
    core_1.Injectable()
], D3Service);
exports.D3Service = D3Service;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
