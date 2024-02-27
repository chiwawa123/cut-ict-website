import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  tree: Breadcrumb;
  softwareDetails:any;

  constructor(
    private bread: BreadcrumbService
  ) {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'downloads', link: 'downloads' },
      tree: []
    };
    this.bread.tree.next(this.tree);

    // Initialize software names from JSON data
    this.softwareDetails = [

      {
      "id": 1,
      "softwarePurpose": "To create  graphics  and layouts, editing, photos/ designing  websites",
      "commercialSoftware": "CorelDRAW Graphics Suite 2021 ",
      "alternativeOpenSourceSoftware": "Inkscape",
      "downloadLink": "https://inkscape.org/release/inkscape-1.2.1/",
    },
    {
      "id": 2,
      "softwarePurpose": "To acquire, edit and distribute digital video  and audio",
      "commercialSoftware": "Adobe Creative Suite",
      "alternativeOpenSourceSoftware": "Seashore",
      "downloadLink": "https://sourceforge.net/projects/seashore/files/latest/download",
    },
    {
      "id": 3,
      "softwarePurpose": "Allows instructional designers to create interactive courses ",
      "commercialSoftware": "Articulate storyline",
      "alternativeOpenSourceSoftware": "CloudApp",
      "downloadLink": "https://share.getcloudapp.com/download",
    },
    {
      "id": 4,
      "softwarePurpose": "To edit and apply effects to the audio from video footage ",
      "commercialSoftware": "Adobe Audition",
      "alternativeOpenSourceSoftware": "Audacity ",
      "downloadLink": "https://www.audacityteam.org/download/",
    },
    {
      "id": 5,
      "softwarePurpose": "To create precise 2D and 3D drawings and models, as well as electrical diagrams,",
      "commercialSoftware": "Autocard",
      "alternativeOpenSourceSoftware": "Freecard ",
      "downloadLink": "https://www.freecad.org/downloads.php",
    },
    {
      "id": 6,
      "softwarePurpose": "Inkscape is a versatile CAD and engineering software that enables you to create precise and intricate 2D and 3D mechanical designs and models.",
      "commercialSoftware": "Solidworks",
      "alternativeOpenSourceSoftware": "Freecard ",
      "downloadLink": "https://www.freecad.org/downloads.php",
    },
    {
      "id": 7,
      "softwarePurpose": "For numerically solving a wide variety of mechanical problems",
      "commercialSoftware": "Ansys",
      "alternativeOpenSourceSoftware": "librecard ",
      "downloadLink": "https://librecad.org/",
    },
    {
      "id": 8,
      "softwarePurpose": "  visual web page editor that allows you to create, edit and manage websites that supports HTML, CSS, JavaScript and more",
      "commercialSoftware": "DreamWeaver",
      "alternativeOpenSourceSoftware": "bluegriffon ",
      "downloadLink": "http://www.bluegriffon.org/#download",
    },
    {
      "id": 9,
      "softwarePurpose": "  visual web page editor that allows you to create, edit and manage websites that supports HTML, CSS, JavaScript and more",
      "commercialSoftware": "DreamWeaver",
      "alternativeOpenSourceSoftware": "bluegriffon ",
      "downloadLink": "http://www.bluegriffon.org/#download",
    },
    {
      "id": 10,
      "softwarePurpose":"Image creation, graphic design and photo editing. Provides many image editing features for pixel-based images, raster graphics and vector graphics  ",
      "commercialSoftware": "Adobe PhotoShop",
      "alternativeOpenSourceSoftware": "GIMP ",
      "downloadLink": "https://www.gimp.org/downloads/",
    },
    {
      "id": 11,
      "softwarePurpose":" To draw and write naturally and comfortably as you  would on real paper ",
      "commercialSoftware": "graphics tablet Huion",
      "alternativeOpenSourceSoftware": "Krita ",
      "downloadLink": "https://krita.org/en/download/krita-desktop/",
    },
    {
      "id": 12,
      "softwarePurpose":"Enables energy professionals to rapidly identify, assess, optimize and track the  performance of clean energy investments over the entire project life cycle",
      "commercialSoftware": "graphics tablet Huion",
      "alternativeOpenSourceSoftware": "RETScreen Expert",
      "downloadLink": "https://www.watchwire.org/download",
    },
    {
      "id": 13,
      "softwarePurpose":" To create schematics and electronic prints for manufacturing printed circuit boards",
      "commercialSoftware": "WatchWire",
      "alternativeOpenSourceSoftware": "Krita",
      "downloadLink": "https://www.watchwire.org/download",
    },
    {
      "id": 14,
      "softwarePurpose":" To create schematics and electronic prints for manufacturing printed circuit boards",
      "commercialSoftware": "Proteus",
      "alternativeOpenSourceSoftware": "KiCad",
      "downloadLink": "https://www.kicad.org/download/kica",
    },
    {
      "id": 15,
      "softwarePurpose":" Create 2D hand drawn animations using vector graphics and bitmap images",
      "commercialSoftware": "Pencil2D",
      "alternativeOpenSourceSoftware": "ynfig (2danimation)",
      "downloadLink": "https://synfig.gumroad.com/l/synfig",
    },
    {
      "id": 16,
      "softwarePurpose":" To make maps, analyze data and to share and collaborate",
      "commercialSoftware": "Arch GIS",
      "alternativeOpenSourceSoftware": "SciLab",
      "downloadLink": "https://www.scilab.org/download/scilab-6.1.1",
    },
  ];

    // Rest of the code...
  }

  ngOnInit(): void {
    this.tree = {
      parent: { name: 'Home', link: "home" },
      current: { name: 'downloads', link: 'downloads' },
      tree: []
    };
  }
}
