import React from "react";
import rough from "roughjs";
import Container from "./container";
import Button from "./button";
import { WordProps } from "./word";
import { scaleBand, scaleLinear } from "d3";

interface BarChartProps {
  words: Array<[string, WordProps]>;
}

interface BarChartState {
  sortBy: "count" | "retweetCount" | "favoriteCount" | "tweetsWithWord";
}

export default class extends React.Component<BarChartProps, BarChartState> {
  state: BarChartState = {
    sortBy: "count"
  };
  node: HTMLCanvasElement;

  width: number = 1000;

  generateBarChart = () => {
    const canvas = this.node;
    canvas.width = this.width;
    const rc = rough.canvas(canvas, {
      options: {
        fill: "white",
        roughness: 0.8
      }
    });
    // @ts-ignore
    const ctx = rc.ctx;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const width = canvasWidth - margin.left - margin.right;
    const height = canvasHeight - margin.top - margin.bottom;
    const { sortBy } = this.state;
    let sortedData = this.props.words.sort(
      (a, b) => b[1][sortBy] - a[1][sortBy]
    );
    const barMax: number = sortedData[0][1][sortBy];
    ctx.translate(margin.left, margin.top);
    ctx.fillStyle = "white";
    ctx.strokeWidth = 4;
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.2);

    const y = scaleLinear().rangeRound([0, height]);
    x.domain(sortedData.map(d => d[0]));
    y.domain([barMax, 0]);

    const yTickCount = barMax;
    const yTicks = y.ticks(yTickCount);
    const yTickFormat = y.tickFormat(yTickCount);

    sortedData.forEach(d => {
      let val = x(d[0]);
      if (val == null) {
        val = 0;
      }
      rc.rectangle(val, height, x.bandwidth(), y(d[1][sortBy]) - height, {
        stroke: "white",
        fill: "white",
        strokeWidth: 2
      });
    });
    // ctx.rotate((Math.PI * 2) / 3);

    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "bold 10px sans-serif";
    x.domain().forEach(d => {
      ctx.fill = "white";
      let val = x(d);
      if (val == null) {
        val = 0;
      }
      ctx.fillText(d, val + x.bandwidth() / 2, height + 10);
    });
    x.domain().forEach(d => {
      ctx.fill = "white";
      let val = x(d);
      if (val == null) {
        val = 0;
      }
      ctx.lineTo(val + x.bandwidth() / 2, height + 5);
    });
    ctx.closePath();

    ctx.stroke();
    ctx.beginPath();
    yTicks.forEach(d => {
      ctx.moveTo(0, y(d) + 0.5);
      ctx.lineTo(-6, y(d) + 0.5);
    });

    ctx.closePath();
    ctx.stroke();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    yTicks.forEach(d => {
      ctx.fillText(yTickFormat(d), -9, y(d));
    });
    ctx.beginPath();
    ctx.moveTo(-6.5, 0 + 0.5);
    ctx.lineTo(0.5, 0 + 0.5);
    ctx.lineTo(0.5, height + 0.5);
    ctx.lineTo(-6.5, height + 0.5);
    ctx.stroke();
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.font = "bold 40px sans-serif";
    ctx.fillText(`${sortBy}`, -10, -60);
    ctx.closePath();
    ctx.save();
  };

  componentDidMount() {
    if (this.node) {
      this.generateBarChart();
    }
  }
  componentDidUpdate() {
    if (this.node) {
      this.generateBarChart();
    }
  }

  render() {
    const { sortBy } = this.state;
    return (
      <>
        <Container style={{ padding: "4rem" }} direction="column" center>
          <Container direction="row" wrap="wrap" center>
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
            <Button
              style={{ fontSize: "0.8rem" }}
              active={sortBy == "tweetsWithWord"}
              onClick={() => this.setState({ sortBy: "tweetsWithWord" })}
            >
              {"Sort By Tweets With Word"}
            </Button>
          </Container>
          <canvas
            height={800}
            width={1000}
            ref={node => {
              if (node != null) this.node = node;
            }}
          />
        </Container>
      </>
    );
  }
}
