import {Component, ViewChild, OnInit} from "@angular/core";

@Component({
    selector: "kmath",
    templateUrl: 'kmath.component.html',
    styleUrls: ['katex.css']
})

export class KMathComponent implements OnInit {
    @ViewChild("math") math;
    @ViewChild("math1") math1;
    @ViewChild("math2") math2;
    @ViewChild("math3") math3;
    @ViewChild("math4") math4;
    private kateX = require('katex');

    ngOnInit() {
        setTimeout(() => {
            try {
                this.kateX.render("\\frac{1}{n}\\displaystyle\\sum_{i=1}^n\\begin{vmatrix}\\frac{\\hat{y_i}- {y_i}}{y_i}\\end{vmatrix}",
                    this.math.nativeElement);
                this.kateX.render("\\frac{1}{n}\\displaystyle\\sum_{i=1}^n \\begin{vmatrix}\\hat{y_i}- {y_i}\\end{vmatrix}",
                    this.math1.nativeElement);
                this.kateX.render("\\frac{1}{n}\\sqrt{\\displaystyle\\sum_{i=1}^n\\left(\\hat{y_i}- {y_i}\\right)^2}",
                    this.math2.nativeElement);
                this.kateX.render("\\hat{y_i}",
                    this.math3.nativeElement);
                this.kateX.render("{y_i}",
                    this.math4.nativeElement);
            } catch (e) {
                if (e.__proto__ == this.kateX.ParseError.prototype) {
                    console.error(e);
                } else {
                    throw e;
                }
            }
        }, 1000);
    }
}