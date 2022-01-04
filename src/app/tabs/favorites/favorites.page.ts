import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/Category';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-download',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private account: AccountService,
    private db: DbService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {

<<<<<<< HEAD
    this.categories = (await this.db.getCats()).filter(i => i.favoritesCount > 0);
=======
    try {
      if ((await this.account.getUser()).isPermium)
        this.categories = (await this.db.getCats()).filter(i => i.favoritesCount > 0);
    } catch (error) { }
>>>>>>> 882dc096f52dbcc323551fb720ea02836ce654e2

    this.categoryService.get()
      .subscribe(
        res => {
          this.categories = res.value.filter(i => i.favoritesCount > 0);
        }
      )
  }

}
