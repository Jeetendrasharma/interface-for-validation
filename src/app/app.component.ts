import { Component, VERSION } from "@angular/core";
interface dataType{
    name: String,
    id : number,
    indian : boolean
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  get data() {
    const data:dataType = {
      name: "jeetendra",
      id: 10,
      indian: "yes"
    };
    return data;
  }
}
