import ReactRough from "react-rough";
import React from "react";
import Container from "./container";
import Button from "./button";
import { WordProps } from "./word";
import { scaleBand, scaleLinear } from "d3";

interface BarChartProps {
  words: Array<[string, WordProps]>;
}

interface BarChartState {
  rc: any;
  canvasHeight: number;
  canvasWidth: number;
  sortBy: "count" | "retweetCount" | "favoriteCount";
}

export default class extends React.Component<BarChartProps, BarChartState> {
  state: BarChartState = {
    rc: null,
    canvasHeight: 800,
    canvasWidth: 1000,
    sortBy: "count"
  };
  generateBarChart = (rc: any) => {
    const context = rc.ctx;
    const canvasWidth = rc.canvas.width;
    const canvasHeight = rc.canvas.height;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.beginPath();
    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const width = canvasWidth - margin.left - margin.right;
    const height = canvasHeight - margin.top - margin.bottom;
    const { sortBy } = this.state;
    let sortedData = this.props.words.sort(
      (a, b) => b[1][sortBy] - a[1][sortBy]
    );
    const barMax: number = sortedData[0][1][sortBy];
    context.translate(margin.left, margin.top);
    context.fillStyle = "white";
    context.strokeWidth = 4;
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.2);

    const y = scaleLinear().rangeRound([0, height]);
    x.domain(sortedData.map(d => d[0]));
    y.domain([barMax, 0]);

    const yTickCount = barMax;
    const yTicks = y.ticks(yTickCount);
    const yTickFormat = y.tickFormat(yTickCount);

    sortedData.forEach(datum => {
      rc.rectangle(
        x(datum[0]),
        height,
        x.bandwidth(),
        y(datum[1][sortBy]) - height,
        {
          stroke: "white",
          fill: "white",
          strokeWidth: 2
        }
      );
    });
    // context.rotate((Math.PI * 2) / 3);

    context.beginPath();
    context.textAlign = "center";
    context.textBaseline = "top";
    context.font = "bold 10px sans-serif";
    x.domain().forEach(d => {
      context.fillText(d, x(d) + x.bandwidth() / 2, height + 10);
    });
    x.domain().forEach(datum => {
      context.fill = "white";
      let val: number = x(datum) != undefined ? x(datum) : 0;
      context.lineTo(val + x.bandwidth() / 2, height + 5);
    });

    context.stroke();
    context.beginPath();
    yTicks.forEach(datum => {
      context.moveTo(0, y(datum) + 0.5);
      context.lineTo(-6, y(datum) + 0.5);
    });
    context.stroke();
    context.textAlign = "right";
    context.textBaseline = "middle";
    yTicks.forEach(d => {
      context.fillText(yTickFormat(d), -9, y(d));
    });
    context.beginPath();
    context.moveTo(-6.5, 0 + 0.5);
    context.lineTo(0.5, 0 + 0.5);
    context.lineTo(0.5, height + 0.5);
    context.lineTo(-6.5, height + 0.5);
    context.stroke();
    context.save();
    context.rotate(-Math.PI / 2);
    context.textAlign = "right";
    context.textBaseline = "top";
    context.font = "bold 40px sans-serif";
    context.fillText(`${sortBy}`, -10, -60);
    context.restore();
  };
  componentDidUpdate() {
    const { rc } = this.state;
    if (rc) {
      this.generateBarChart(rc);
    }
  }
  render() {
    const height = 800;
    const width = 1000;
    const { sortBy } = this.state;
    return (
      <>
        <Container style={{ padding: "4rem" }} direction="column" center>
          <Container direction="row" wrap="wrap">
            <Button
              style={{ fontSize: "0.8rem" }}
              active={sortBy == "count"}
              onClick={() => this.setState({ sortBy: "count" })}
            >
              {"Sort By Total Count"}
            </Button>
            <Button
              style={{ fontSize: "0.8rem" }}
              active={sortBy == "retweetCount"}
              onClick={() => this.setState({ sortBy: "retweetCount" })}
            >
              {"Sort By Retweet Count"}
            </Button>
            <Button
              style={{ fontSize: "0.8rem" }}
              active={sortBy == "favoriteCount"}
              onClick={() => this.setState({ sortBy: "favoriteCount" })}
            >
              {"Sort By Favorite Count"}
            </Button>
          </Container>
          <ReactRough
            options={{
              fill: "white",
              roughness: 0.8,
              bowing: 0.7
            }}
            width={width}
            height={height}
            render={rc => {
              this.setState({
                rc: rc
              });
            }}
          />
        </Container>
      </>
    );
  }
}
