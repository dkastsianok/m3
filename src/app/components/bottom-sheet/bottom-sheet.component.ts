import {Component, inject} from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef,} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet.component.html',
  imports: [MatButtonModule, MatBottomSheetModule],
})
export class BottomSheetOverviewExample {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'example.html',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
