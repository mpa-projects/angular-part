import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  isVisible = false;
  isVisibleOne = false;
  isVisibleTwo = false;
  isVisibleTree = false;

  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showModalOne(): void {
    this.isVisibleOne = true;
  }
  handleOkOne(): void {
    this.isVisibleOne = false;
  }

  handleCancelOne(): void {
    this.isVisibleOne = false;
  }

  showModalTwo(): void {
    this.isVisibleTwo = true;
  }
  handleOkTwo(): void {
    this.isVisibleTwo = false;
  }

  handleCancelTwo(): void {
    this.isVisibleTwo = false;
  }
}
