import {
  Component,
  OnInit
} from '@angular/core';
import { CoffeeItem } from "../../../models/coffee.model";
import { Store } from "@ngrx/store";
import {
  selectAllCoffees,
  selectCoffees
} from "../../../store/coffee/coffee.selectors";
import { Observable } from "rxjs";
import { loadCoffees } from "../../../store/coffee/coffee.actions";
import { AppState } from "../../../store/app.state";

@Component({
  selector: 'app-coffee-list-cont',
  templateUrl: './coffee-list-cont.component.html'
})
export class CoffeeListContComponent implements OnInit {

  /* mock */
  public coffeesFromApi: CoffeeItem[] = [
    {
      "id": 7803,
      "uid": "6b1bdbde-87f1-4f39-baa2-d396f32a69b1",
      "blend_name": "Kreb-Full-o Delight",
      "origin": "Tapanuli, Sumatra",
      "variety": "Ethiopian Heirloom",
      "notes": "crisp, creamy, maple syrup, tamarind, black cherry",
      "intensifier": "unbalanced"
    }, {
      "id": 9810,
      "uid": "66218394-731f-4b6f-9ede-344f0dfabdbe",
      "blend_name": "American Blend",
      "origin": "Kayanza, Burundi",
      "variety": "Catuai",
      "notes": "bright, tea-like, raspberry, hay, walnut",
      "intensifier": "pointed"
    }, {
      "id": 8202,
      "uid": "e4a38991-64df-4c51-a5dc-ff44b229c4b3",
      "blend_name": "Captain's Pie",
      "origin": "Travancore, India",
      "variety": "Obata",
      "notes": "complex, velvety, lime, barley, red currant",
      "intensifier": "astringent"
    }, {
      "id": 7775,
      "uid": "b0d0efb9-a8cb-4fa5-b890-a3e4ab47a02a",
      "blend_name": "Café Mug",
      "origin": "Western Region, Bukova, Tanzania",
      "variety": "San Ramon",
      "notes": "soft, tea-like, soy sauce, figs, concord grape",
      "intensifier": "rounded"
    }, {
      "id": 3654,
      "uid": "a9ff1780-176d-4464-b59a-d6154857636f",
      "blend_name": "Bluebery Coffee",
      "origin": "Nayarit, Mexico",
      "variety": "Obata",
      "notes": "vibrant, watery, hay, golden raisin, orange creamsicle",
      "intensifier": "crisp"
    }, {
      "id": 9518,
      "uid": "f661b009-241a-45fb-8e11-c1881515b765",
      "blend_name": "Brooklyn Nuts",
      "origin": "Agalta, Honduras",
      "variety": "Liberica",
      "notes": "vibrant, tea-like, magnolia, black-tea, corriander",
      "intensifier": "delicate"
    }, {
      "id": 521,
      "uid": "ee556283-66f7-484a-a5cd-ba879dd2b45c",
      "blend_name": "Wake-up Extract",
      "origin": "Mattari, Yemen",
      "variety": "Kona",
      "notes": "dry, watery, musty, apricot, baggy",
      "intensifier": "wild"
    }, {
      "id": 1950,
      "uid": "7fb67b7d-d548-47ea-a689-72125eb4775c",
      "blend_name": "Chocolate Volcano",
      "origin": "Ojimmah, Ethiopia",
      "variety": "Pink Bourbon",
      "notes": "unbalanced, watery, cashew, squash, sage",
      "intensifier": "delicate"
    }, {
      "id": 4957,
      "uid": "4e3fe127-4626-4280-b539-0a31321c6806",
      "blend_name": "Split Solstice",
      "origin": "Cerrado, Brazil",
      "variety": "Dilla",
      "notes": "juicy, smooth, honey, black pepper, nectarine",
      "intensifier": "juicy"
    }, {
      "id": 1445,
      "uid": "9adff89c-ae25-4708-8147-b23ea52a4c6e",
      "blend_name": "Blue Treat",
      "origin": "Comayagua, Honduras",
      "variety": "Obata",
      "notes": "rounded, velvety, raisin, tamarind, fresh wood",
      "intensifier": "dirty"
    }, {
      "id": 520,
      "uid": "270a0c52-983e-4deb-913c-44f5a2147e54",
      "blend_name": "Morning Volcano",
      "origin": "Mogiana, Brazil",
      "variety": "Dega",
      "notes": "astringent, syrupy, nutmeg, mango, green pepper",
      "intensifier": "lingering"
    }, {
      "id": 5869,
      "uid": "78629703-f029-4663-8ee2-dc62117fb3a1",
      "blend_name": "Reg's Forrester",
      "origin": "Lake Tawar, Sumatra",
      "variety": "Dilla",
      "notes": "bright, full, squash, fresh bread, black pepper",
      "intensifier": "soft"
    }, {
      "id": 5389,
      "uid": "c090e654-0ba4-4a49-9519-a4fb7b046fbd",
      "blend_name": "Reg's Pie",
      "origin": "Kayanza, Burundi",
      "variety": "Colombia",
      "notes": "sharp, coating, nutella, clementine, sage",
      "intensifier": "soft"
    }, {
      "id": 8126,
      "uid": "00cba871-f89a-4b8e-8496-2d1727d5923e",
      "blend_name": "Chocolate Look",
      "origin": "Mount Elgon, Uganda",
      "variety": "Red Bourbon",
      "notes": "complex, juicy, grassy, mint, cherry",
      "intensifier": "structured"
    }, {
      "id": 6705,
      "uid": "f625c14b-45aa-435f-982d-356926369ccd",
      "blend_name": "Goodbye Solstice",
      "origin": "Alotepec-Metapán, El Salvador",
      "variety": "Gesha",
      "notes": "vibrant, big, tamarind, baggy, cantaloupe",
      "intensifier": "rounded"
    }, {
      "id": 4105,
      "uid": "e01eab0f-14c2-4fa9-9b2a-04514e7eda66",
      "blend_name": "Captain's Look",
      "origin": "Gimbi, Ethiopia",
      "variety": "Caturra",
      "notes": "wild, juicy, mushroom, fresh wood, grapefruit",
      "intensifier": "astringent"
    }, {
      "id": 9431,
      "uid": "521afb6a-3296-46c3-bd6f-a0406ddf7210",
      "blend_name": "Street Cowboy",
      "origin": "Chiriqui, Panama",
      "variety": "Pink Bourbon",
      "notes": "vibrant, smooth, red grape, squash, clementine",
      "intensifier": "tart"
    }, {
      "id": 6874,
      "uid": "3a404f14-9e74-4400-a5cc-9bab38ed732b",
      "blend_name": "Veranda Utopia",
      "origin": "Lekempti, Ethiopia",
      "variety": "Barbuk Sudan",
      "notes": "sharp, silky, kiwi, squash, lemon",
      "intensifier": "clean"
    }, {
      "id": 6062,
      "uid": "5ad1623f-85dc-4391-a09c-b366ba4e334a",
      "blend_name": "Express Coffee",
      "origin": "Brahmaputra, India",
      "variety": "Villalobos",
      "notes": "dry, velvety, green-tea, squash, soil",
      "intensifier": "pointed"
    }, {
      "id": 9371,
      "uid": "d1a7dbaf-77f8-4e15-9db2-9fa0449bd43e",
      "blend_name": "Reg's Choice",
      "origin": "Chiriqui, Panama",
      "variety": "S.4",
      "notes": "complex, silky, butter, cacao nibs, butter",
      "intensifier": "complex"
    }, {
      "id": 756,
      "uid": "91f947aa-6eae-403e-b6d6-4e1229d159d0",
      "blend_name": "Major Look",
      "origin": "Lake Tawar, Sumatra",
      "variety": "Mundo Novo",
      "notes": "tart, coating, white grape, grapefruit, dill",
      "intensifier": "tart"
    }, {
      "id": 3055,
      "uid": "f500faac-2b60-4438-b4e3-842d4c1bb332",
      "blend_name": "Blacktop Java",
      "origin": "Lintong, Sumatra",
      "variety": "Villalobos",
      "notes": "soft, round, orange, rose hips, carmel",
      "intensifier": "quick"
    }, {
      "id": 8320,
      "uid": "0e523ef3-dc14-434e-a12b-42bd0eae15a8",
      "blend_name": "Evening Symphony",
      "origin": "Atitlan, Guatemala",
      "variety": "S.4",
      "notes": "tart, coating, lemon, orange, peanut",
      "intensifier": "astringent"
    }, {
      "id": 6847,
      "uid": "15259224-5374-4df4-9f6a-7957e0081306",
      "blend_name": "Blue Forrester",
      "origin": "Manjarabad, India",
      "variety": "Villa Sarchi",
      "notes": "mild, slick, fresh bread, raspberry, black cherry",
      "intensifier": "sharp"
    }, {
      "id": 1059,
      "uid": "f4a8e052-d0be-4394-978f-a967446705ec",
      "blend_name": "Captain's Look",
      "origin": "Volcan, Panama",
      "variety": "San Ramon",
      "notes": "pointed, silky, leathery, leathery, concord grape",
      "intensifier": "bright"
    }, {
      "id": 3500,
      "uid": "22b2cc6a-7d53-477a-95b4-b3cfde19088e",
      "blend_name": "Huggy America",
      "origin": "Kiamba, Kenya",
      "variety": "Kent",
      "notes": "unbalanced, big, rye, grassy, musty",
      "intensifier": "dense"
    }, {
      "id": 1105,
      "uid": "4f187c8d-0970-401c-b34e-c0c28cf33453",
      "blend_name": "Captain's Enlightenment",
      "origin": "Nariño, Colombia",
      "variety": "Kaffa",
      "notes": "tart, full, pineapple, banana, mint",
      "intensifier": "wild"
    }, {
      "id": 5235,
      "uid": "2659526a-00ad-47e2-b80a-4edce82e5879",
      "blend_name": "Jacked Pie",
      "origin": "Wellega, Ethiopia",
      "variety": "Gesha",
      "notes": "dull, round, golden raisin, raisin, black pepper",
      "intensifier": "astringent"
    }, {
      "id": 9950,
      "uid": "1b704871-a85e-4b28-b9a3-038e42f0c79d",
      "blend_name": "Split Cup",
      "origin": "Carazo, Nicaragua",
      "variety": "Agaro",
      "notes": "clean, round, snow pea, dates, butter",
      "intensifier": "clean"
    }, {
      "id": 5470,
      "uid": "bfd8f8fb-302d-462c-85ef-67445a361014",
      "blend_name": "Green Coffee",
      "origin": "Wellega, Ethiopia",
      "variety": "Barbuk Sudan",
      "notes": "structured, smooth, clove, cola, toast",
      "intensifier": "bright"
    }, {
      "id": 7542,
      "uid": "a0ad02d6-3523-4dba-8acf-8ad4d7a26cc2",
      "blend_name": "KrebStar Java",
      "origin": "Veracruz, Mexico",
      "variety": "Gesha",
      "notes": "lingering, velvety, mango, papaya, tomato",
      "intensifier": "dirty"
    }, {
      "id": 6642,
      "uid": "f2205d2f-3c39-4058-8119-19b8ee3b79b0",
      "blend_name": "Winter Bean",
      "origin": "Granada, Nicaragua",
      "variety": "Yellow Bourbon",
      "notes": "structured, full, black pepper, fresh wood, lychee",
      "intensifier": "complex"
    }, {
      "id": 1627,
      "uid": "a4b0df0a-7162-43b5-9727-7733d57309df",
      "blend_name": "Café Cake",
      "origin": "Southern Region, Mbinga, Tanzania",
      "variety": "SL28",
      "notes": "crisp, watery, black-tea, star fruit, bergamot",
      "intensifier": "bright"
    }, {
      "id": 2838,
      "uid": "1c3de7cc-a103-4d2a-9dce-60d917ded881",
      "blend_name": "Good-morning Mug",
      "origin": "Gimbi, Ethiopia",
      "variety": "Red Bourbon",
      "notes": "pointed, syrupy, dill, honeydew, toast",
      "intensifier": "rounded"
    }, {
      "id": 6000,
      "uid": "e509ca5f-91a1-4ae1-b1b7-105e9bf5376d",
      "blend_name": "Blacktop Equinox",
      "origin": "Fraijanes, Guatemala",
      "variety": "Ethiopian Heirloom",
      "notes": "crisp, coating, green pepper, toast, corriander",
      "intensifier": "sharp"
    }, {
      "id": 3088,
      "uid": "5ed80887-81c9-4cf7-93f5-2e4c74b4cfbc",
      "blend_name": "Goodbye Bean",
      "origin": "Ojimmah, Ethiopia",
      "variety": "SL34",
      "notes": "pointed, tea-like, carmel, nectarine, lemon verbena",
      "intensifier": "complex"
    }, {
      "id": 7619,
      "uid": "cb194a0d-1177-48d3-b18e-20de84fd14c8",
      "blend_name": "Major Cup",
      "origin": "Tapanuli, Sumatra",
      "variety": "Dega",
      "notes": "deep, silky, potato defect!, soil, bakers chocolate",
      "intensifier": "mild"
    }, {
      "id": 430,
      "uid": "240f3b4a-2f9e-4f08-b0ac-bf81f74924ef",
      "blend_name": "Good-morning Java",
      "origin": "Rulindo, Rwanda",
      "variety": "Red Bourbon",
      "notes": "deep, watery, hazelnut, rose hips, black pepper",
      "intensifier": "structured"
    }, {
      "id": 2091,
      "uid": "7d8c91e6-70af-4e71-9a7d-58c3eb46effc",
      "blend_name": "Thanksgiving Cake",
      "origin": "Sidama, Ethiopia",
      "variety": "Java",
      "notes": "bright, big, grapefruit, orange, mango",
      "intensifier": "vibrant"
    }, {
      "id": 5092,
      "uid": "12cd7299-c9d0-48c0-b685-de6d98bd9223",
      "blend_name": "Evening Solstice",
      "origin": "Mattari, Yemen",
      "variety": "S288",
      "notes": "juicy, slick, black pepper, quakery, rubber",
      "intensifier": "unbalanced"
    }, {
      "id": 2424,
      "uid": "5b1d7cd0-8b06-4b4c-917d-09fe01a15b6d",
      "blend_name": "Split Coffee",
      "origin": "Jalisco, Mexico",
      "variety": "San Ramon",
      "notes": "muted, creamy, red currant, granola, liquorice",
      "intensifier": "faint"
    }, {
      "id": 8957,
      "uid": "76a4c7e3-92f9-402f-b182-5c99ec9a6b2d",
      "blend_name": "Heart Volcano",
      "origin": "Embu, Kenya",
      "variety": "Kona",
      "notes": "astringent, chewy, sage, green-tea, olive",
      "intensifier": "mild"
    }, {
      "id": 7207,
      "uid": "67db52e0-a71a-4e82-a9d5-643ca133864f",
      "blend_name": "KrebStar Cake",
      "origin": "Kigeyo Washing Station, Rwanda",
      "variety": "Sarchimor",
      "notes": "juicy, coating, almond, olive, watermelon",
      "intensifier": "astringent"
    }, {
      "id": 5300,
      "uid": "232a3117-7587-4f5c-92f8-b25d5377a6fa",
      "blend_name": "Reg's Solstice",
      "origin": "Puebla, Mexico",
      "variety": "Pink Bourbon",
      "notes": "pointed, syrupy, cacao nibs, burnt sugar, apricot",
      "intensifier": "unbalanced"
    }, {
      "id": 9414,
      "uid": "f290fe18-5cf8-47f3-bad6-087a55ea0a50",
      "blend_name": "Joe Delight",
      "origin": "Manjarabad, India",
      "variety": "Gimma",
      "notes": "dirty, chewy, graham cracker, molasses, cantaloupe",
      "intensifier": "vibrant"
    }, {
      "id": 2373,
      "uid": "5bb0fc83-68ba-45fc-a0a7-dcea1c730a1c",
      "blend_name": "Dark Equinox",
      "origin": "Jalisco, Mexico",
      "variety": "Kent",
      "notes": "clean, velvety, cashew, black-tea, kiwi",
      "intensifier": "soft"
    }, {
      "id": 9840,
      "uid": "00c6a40a-7302-446f-ae9b-2b4692c28a4c",
      "blend_name": "Blacktop Select",
      "origin": "Gimbi, Ethiopia",
      "variety": "Dega",
      "notes": "dull, full, lemonade, dill, cinnamon",
      "intensifier": "dry"
    }, {
      "id": 8515,
      "uid": "de2fbe2c-5bc7-43e3-8792-0a5d7e04b1f6",
      "blend_name": "Veranda Mug",
      "origin": "Puebla, Mexico",
      "variety": "San Ramon",
      "notes": "sharp, full, cacao nibs, sweet pea, granola",
      "intensifier": "deep"
    }, {
      "id": 1641,
      "uid": "4debb38f-340e-40c7-b415-320f6eb3d05f",
      "blend_name": "Joe Delight",
      "origin": "Brunca, Costa Rica",
      "variety": "Colombia",
      "notes": "quick, chewy, nutmeg, sweet pea, liquorice",
      "intensifier": "rounded"
    }, {
      "id": 2317,
      "uid": "d60a3d43-5844-4bc2-a8f1-be16e17bbbcc",
      "blend_name": "Street Extract",
      "origin": "Raimi, Yemen",
      "variety": "S288",
      "notes": "deep, slick, clove, cherry, tamarind",
      "intensifier": "juicy"
    }].sort((a, b) => a.id - b.id)

  public coffees$: Observable<CoffeeItem[]> = this.store.select(selectAllCoffees);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(loadCoffees())
  }

}
