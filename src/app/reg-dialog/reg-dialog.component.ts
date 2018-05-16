import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-reg-dialog",
  templateUrl: "./reg-dialog.component.html",
  styleUrls: ["./reg-dialog.component.css"]
})
export class RegDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RegDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  gameType: string = "Singleplayer";
}
