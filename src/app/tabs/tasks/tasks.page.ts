import {Component, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: any[] = [];

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
  }

  async presentTaskForm() {
    const alert = await this.alertController.create({
      header: 'Add a new task',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          role: 'confirm',
          handler: (alertData) => {
            if (alertData.title && alertData.description) {
              return true;
            } else {
              return false;
            }
          },
        },
      ],
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'title',
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'Description',
        },
      ],
    });

    await alert.present();
  }


}
